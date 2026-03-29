'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Link2, ArrowLeft, Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-orange-100">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-neutral-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white">
              <Link2 size={20} />
            </div>
            <span>Shorten<span className="text-orange-600">Real</span></span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </motion.nav>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">Contact Us</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
          <p>
            Have a question, feedback, or just want to say hi? We&apos;d love to hear from you. 
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit} 
                className="mt-10 space-y-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/50 sm:p-10"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-neutral-900">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 block w-full rounded-xl border-0 bg-neutral-100 px-4 py-4 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-600 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-neutral-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-xl border-0 bg-neutral-100 px-4 py-4 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-600 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-neutral-900">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-2 block w-full rounded-xl border-0 bg-neutral-100 px-4 py-4 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-600 transition-all"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-8 py-5 font-bold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-green-100 bg-green-50 p-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="mt-6 text-2xl font-black text-neutral-900">Message Sent!</h2>
                <p className="mt-2 text-neutral-600">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold text-orange-600 hover:text-orange-700 uppercase tracking-widest"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 flex items-center gap-6 border-t border-neutral-200 pt-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-900">Email Support</p>
              <p className="text-lg text-neutral-500">support@shortenreal.com</p>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
