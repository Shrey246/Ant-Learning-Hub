"use client";

import { db, auth } from "../../lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  writeBatch,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Bell,
  Filter,
  MessageSquare,
  ChevronRight,
  Clock,
  Sparkles,
  LayoutDashboard,
  LogOut,
  Camera,
  Pencil,
  CheckCheck,
  Inbox,
  Trash2,
  ArrowUpDown,
} from "lucide-react";

const AUTO_DELETE_DAYS = 10;
const DAY_MS = 24 * 60 * 60 * 1000;

export default function AdminDashboard() {
  const router = useRouter();

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [sortType, setSortType] = useState("all");
  const [sortStatus, setSortStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const savedImage = localStorage.getItem("adminProfileImg");
    if (savedImage) setProfileImage(savedImage);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);

  const getCreatedDate = (createdAt) => {
    if (!createdAt) return new Date();
    if (createdAt?.toDate) return createdAt.toDate();
    if (createdAt?.seconds) return new Date(createdAt.seconds * 1000);
    return new Date(createdAt);
  };

  const getDaysLeft = (createdAt) => {
    const createdDate = getCreatedDate(createdAt);
    const expiresAt = createdDate.getTime() + AUTO_DELETE_DAYS * DAY_MS;
    const diff = expiresAt - Date.now();
    return Math.max(0, Math.ceil(diff / DAY_MS));
  };

  const buildSubject = (d) => {
    if (d.type === "program") return `Program: ${d.program || "Not specified"}`;
    if (d.type === "session") {
      return `Session Booking (${d.date || "No date"} - ${d.time || "No time"})`;
    }
    return d.message || "General Inquiry";
  };

  const normalizeLead = (docSnap) => {
    const d = docSnap.data();
    const createdDate = getCreatedDate(d.createdAt);

    return {
      id: docSnap.id,
      sender: d.name || "Unknown",
      email: d.email || "",
      subject: buildSubject(d),
      type: d.type || "general",
      time: createdDate.toLocaleString(),
      createdAt: createdDate,
      daysLeft: getDaysLeft(d.createdAt),
      status: d.read ? "read" : "unread",
      raw: d,
    };
  };

  const fetchMessages = async () => {
    setLoading(true);

    try {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      const expiredDocs = [];
      const activeDocs = [];

      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const createdDate = getCreatedDate(data.createdAt);
        const ageInMs = Date.now() - createdDate.getTime();

        if (ageInMs >= AUTO_DELETE_DAYS * DAY_MS) {
          expiredDocs.push(docSnap.id);
        } else {
          activeDocs.push(docSnap);
        }
      });

      if (expiredDocs.length > 0) {
        const batch = writeBatch(db);
        expiredDocs.forEach((id) => {
          batch.delete(doc(db, "leads", id));
        });
        await batch.commit();
      }

      const data = activeDocs.map(normalizeLead);
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const unreadCount = messages.filter((m) => m.status === "unread").length;

  const handleMarkAllAsRead = async () => {
    const unreadMessages = messages.filter((m) => m.status === "unread");
    if (!unreadMessages.length) return;

    try {
      const batch = writeBatch(db);

      unreadMessages.forEach((message) => {
        batch.update(doc(db, "leads", message.id), { read: true });
      });

      await batch.commit();

      setMessages((prev) =>
        prev.map((m) => ({
          ...m,
          status: "read",
          raw: { ...m.raw, read: true },
        }))
      );
    } catch (error) {
      console.error("Failed to mark all as read:", error);
    }
  };

  const handleToggleRead = async (message) => {
    const nextRead = message.status !== "read";

    try {
      await updateDoc(doc(db, "leads", message.id), { read: nextRead });

      setMessages((prev) =>
        prev.map((m) =>
          m.id === message.id
            ? {
                ...m,
                status: nextRead ? "read" : "unread",
                raw: { ...m.raw, read: nextRead },
              }
            : m
        )
      );

      if (selectedMessage?.id === message.id) {
        setSelectedMessage((prev) =>
          prev
            ? {
                ...prev,
                status: nextRead ? "read" : "unread",
                raw: { ...prev.raw, read: nextRead },
              }
            : prev
        );
      }
    } catch (error) {
      console.error("Failed to toggle read state:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    const confirmed = window.confirm("Delete this inquiry permanently?");
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "leads", id));
      setMessages((prev) => prev.filter((m) => m.id !== id));

      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Failed to delete inquiry:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("adminProfileImg", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const displayMessages = messages
    .filter((message) => {
      if (filterType === "unread" && message.status !== "unread") return false;
      if (sortType !== "all" && message.type !== sortType) return false;
      if (sortStatus !== "all" && message.status !== sortStatus) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") return b.createdAt - a.createdAt;
      if (sortOrder === "oldest") return a.createdAt - b.createdAt;
      if (sortOrder === "az") return a.sender.localeCompare(b.sender);
      if (sortOrder === "za") return b.sender.localeCompare(a.sender);
      return 0;
    });

  return (
    <main className="relative min-h-screen bg-[#030812] text-white overflow-hidden py-12 md:py-20 antialiased cursor-default selection:bg-teal-500/30 font-sans">
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-teal-400">
              <LayoutDashboard size={18} />
            </div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Admin Console
            </span>
          </div>
          <a
            href="/"
            className="text-xs font-bold text-gray-400 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut size={14} /> Exit to Site
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-3xl shadow-2xl"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative group">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative h-32 w-32 rounded-full border-2 border-white/15 bg-[#0c1626] flex items-center justify-center overflow-hidden cursor-pointer shadow-2xl"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User size={52} className="text-gray-600" />
                )}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Camera size={24} className="text-white" />
                </div>
              </div>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-1 right-1 p-2 rounded-full bg-teal-500 text-[#030812] shadow-lg cursor-pointer hover:scale-110 transition-transform active:scale-95 z-20"
              >
                <Pencil size={14} strokeWidth={3} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] uppercase tracking-widest text-teal-400 mb-5 font-bold">
                <Sparkles size={12} /> Master account
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                Mr. Purushotham
              </h1>
              <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-gray-300 font-medium text-sm">
                <Mail size={14} className="text-teal-500" />
                <span>coachpraveenjp@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 relative"
        >
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Bell size={20} className={unreadCount > 0 ? "animate-bounce" : ""} />
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-200">
                {unreadCount > 0 ? (
                  <>
                    You have <span className="text-teal-400 font-bold">{unreadCount}</span>{" "}
                    unread inquiries.
                  </>
                ) : (
                  <>Your inbox is up to date.</>
                )}
              </p>
            </div>

            <button
              onClick={handleMarkAllAsRead}
              disabled={unreadCount === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/20 transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <CheckCheck size={14} />
              Mark all as read
            </button>
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold flex items-center gap-3 text-white">
                <MessageSquare size={20} className="text-teal-400" />
                Incoming Inquiries
              </h2>

              {messages.length > 0 && (
                <button
                  onClick={() =>
                    setFilterType((prev) => (prev === "all" ? "unread" : "all"))
                  }
                  className={`flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-black transition-all cursor-pointer ${
                    filterType === "unread"
                      ? "bg-teal-500 text-black border-teal-500"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <Filter size={12} />
                  {filterType === "all" ? "Filter Unread" : "Show All"}
                </button>
              )}
            </div>

            {messages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="rounded-xl bg-[#030812] border border-white/10 px-4 py-3 text-sm text-white outline-none appearance-none"
              >
                <option value="all" className="bg-[#030812] text-white">
                  All types
                </option>
                <option value="program" className="bg-[#030812] text-white">
                  Program
                </option>
                <option value="session" className="bg-[#030812] text-white">
                  Session
                </option>
                <option value="general" className="bg-[#030812] text-white">
                  General
                </option>
              </select>

                <select
                value={sortStatus}
                onChange={(e) => setSortStatus(e.target.value)}
                className="rounded-xl bg-[#030812] border border-white/10 px-4 py-3 text-sm text-white outline-none appearance-none"
              >
                <option value="all" className="bg-[#030812] text-white">
                  All statuses
                </option>
                <option value="unread" className="bg-[#030812] text-white">
                  Unread only
                </option>
                <option value="read" className="bg-[#030812] text-white">
                  Read only
                </option>
              </select>

                <div className="relative">
                  <ArrowUpDown
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full rounded-xl bg-[#030812] border border-white/10 pl-10 pr-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="newest" className="bg-[#030812] text-white">
                      Newest first
                    </option>
                    <option value="oldest" className="bg-[#030812] text-white">
                      Oldest first
                    </option>
                    <option value="az" className="bg-[#030812] text-white">
                      Sender A-Z
                    </option>
                    <option value="za" className="bg-[#030812] text-white">
                      Sender Z-A
                    </option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <AnimatePresence mode="popLayout">
              {!loading && displayMessages.length > 0 ? (
                displayMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`group relative rounded-[1.8rem] border transition-all duration-500 ${
                      msg.status === "unread"
                        ? "border-white/20 bg-white/[0.05] shadow-2xl"
                        : "border-white/5 bg-transparent opacity-75"
                    } p-6 md:p-8 hover:border-teal-500/30 hover:bg-white/[0.07]`}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`mt-2 h-2.5 w-2.5 rounded-full shrink-0 ${
                              msg.status === "unread"
                                ? "bg-teal-400 shadow-[0_0_12px_#2dd4bf]"
                                : "bg-gray-700"
                            }`}
                          />
                          <div>
                            <h3 className="font-bold text-white text-lg tracking-wide group-hover:text-teal-300 transition-colors">
                              {msg.sender}
                            </h3>
                            <p className="text-sm text-gray-300 font-medium mt-1.5 leading-relaxed">
                              {msg.subject}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-300">
                                {msg.type}
                              </span>
                              <span
                                className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-widest ${
                                  msg.status === "unread"
                                    ? "bg-teal-500/10 text-teal-300 border border-teal-500/20"
                                    : "bg-white/5 text-gray-400 border border-white/10"
                                }`}
                              >
                                {msg.status}
                              </span>
                              <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[10px] uppercase tracking-widest text-orange-300">
                                {msg.daysLeft} day{msg.daysLeft !== 1 ? "s" : ""} left
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 font-black">
                          <Clock size={12} /> {msg.time}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/5">
                        <button
                          onClick={() => setSelectedMessage(msg)}
                          className="text-xs font-black text-teal-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                        >
                          VIEW FULL QUERY
                          <ChevronRight size={16} />
                        </button>

                        <button
                          onClick={() => handleToggleRead(msg)}
                          className="text-xs font-black text-gray-300 hover:text-teal-300 transition-all cursor-pointer"
                        >
                          Mark as {msg.status === "read" ? "Unread" : "Read"}
                        </button>

                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="text-xs font-black text-red-300 hover:text-red-200 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <Trash2 size={14} />
                          Delete Query
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : !loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 border border-dashed border-white/10 rounded-[3rem] bg-white/[0.01]"
                >
                  <div className="p-6 rounded-full bg-white/5 border border-white/5 mb-6">
                    <Inbox size={48} className="text-gray-700" strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest">
                    No Inquiries Found
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mt-2">
                    New messages from your site will appear here.
                  </p>
                </motion.div>
              ) : (
                <div className="py-20 text-center text-gray-500 text-sm">
                  Loading inquiries...
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMessage(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#08101c] p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedMessage.sender}</h3>
                  <p className="text-sm text-gray-400 mt-2">{selectedMessage.email || "No email provided"}</p>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <p className="text-gray-500 uppercase tracking-widest text-[10px] mb-2">Subject</p>
                  <p className="text-gray-200">{selectedMessage.subject}</p>
                </div>

                <div>
                  <p className="text-gray-500 uppercase tracking-widest text-[10px] mb-2">Message</p>
                  <p className="text-gray-300 leading-7 whitespace-pre-wrap">
                    {selectedMessage.raw?.message || "No message content provided."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-[10px] mb-2">Status</p>
                    <p className="text-gray-200">{selectedMessage.status}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-[10px] mb-2">Auto-delete</p>
                    <p className="text-gray-200">
                      {selectedMessage.daysLeft} day{selectedMessage.daysLeft !== 1 ? "s" : ""} left
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => handleToggleRead(selectedMessage)}
                  className="rounded-xl bg-teal-500 px-4 py-3 text-sm font-bold text-black"
                >
                  Mark as {selectedMessage.status === "read" ? "Unread" : "Read"}
                </button>
                <button
                  onClick={() => handleDeleteMessage(selectedMessage.id)}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200"
                >
                  Delete Query
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
