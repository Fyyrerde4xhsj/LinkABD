'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link2, Copy, ExternalLink, Shield, Zap, Smartphone, CheckCircle2, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  // Handle redirection if URL parameter is present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedUrl = params.get('u');
    if (encodedUrl) {
      try {
        const decodedUrl = atob(encodedUrl);
        // Basic validation to ensure it's a URL
        if (decodedUrl.startsWith('http://') || decodedUrl.startsWith('https://')) {
          window.location.replace(decodedUrl);
        } else {
          // Use a small delay to avoid cascading render warning if needed, 
          // or just accept it's for error handling.
          setTimeout(() => setError('Invalid URL format in the link.'), 0);
        }
      } catch (e) {
        setTimeout(() => setError('Failed to decode the URL.'), 0);
      }
    }
  }, []);

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    if (!longUrl) {
      setError('Please enter a URL.');
      return;
    }

    try {
      // Basic URL validation
      new URL(longUrl);
      const encoded = btoa(longUrl);
      const baseUrl = window.location.origin;
      setShortUrl(`${baseUrl}/?u=${encoded}`);
    } catch (e) {
      setError('Please enter a valid URL (including http:// or https://).');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Atmospheric Background Element */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-orange-100/30 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-orange-50/50 blur-[100px]" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white"
            >
              <Link2 size={20} />
            </motion.div>
            <span>Shorten<span className="text-orange-600">Real</span></span>
          </Link>
          <div className="hidden space-x-8 text-sm font-medium text-neutral-600 md:flex">
            {['About', 'Contact', 'Privacy', 'Terms'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="relative group hover:text-orange-600 transition-colors">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section & Tool */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-7xl">
              Shorten Links in <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-600">Real-Time</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 w-full bg-orange-100 -z-10" 
                />
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto"
          >
            Experience the future of link management. A lightweight, database-free URL shortener designed for speed, privacy, and simplicity.
          </motion.p>

          {/* Tool Input */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 20 }}
            className="mt-12 rounded-3xl border border-neutral-200 bg-white p-3 shadow-2xl shadow-orange-900/5 sm:p-5"
          >
            <form onSubmit={handleShorten} className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  placeholder="Paste your long URL here..."
                  className="w-full rounded-2xl border-0 bg-neutral-100 px-6 py-4 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-600 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="rounded-2xl bg-orange-600 px-10 py-4 font-bold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700"
              >
                Shorten Now
              </motion.button>
            </form>

            <AnimatePresence mode="wait">
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-sm font-semibold text-red-600 flex items-center justify-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  {error}
                </motion.p>
              )}

              {shortUrl && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="mt-8 overflow-hidden rounded-2xl border border-orange-100 bg-orange-50/50 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-black uppercase tracking-widest text-orange-600">Generated Link</p>
                    <div className="h-px flex-1 bg-orange-200 mx-4" />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <span className="break-all font-mono text-base font-medium text-neutral-800 bg-white px-4 py-2 rounded-lg border border-orange-100 shadow-sm">
                      {shortUrl}
                    </span>
                    <div className="flex shrink-0 gap-3">
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-neutral-700 shadow-sm ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 transition-colors"
                      >
                        {copied ? <CheckCircle2 size={18} className="text-green-600" /> : <Copy size={18} />}
                        {copied ? 'Copied!' : 'Copy Link'}
                      </motion.button>
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-neutral-800 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Visit
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base font-bold leading-7 text-orange-600 uppercase tracking-widest"
            >
              The Modern Standard
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl"
            >
              Stateless. Fast. Secure.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                { title: 'Fast Processing', icon: Zap, desc: 'URLs are encoded and decoded in real-time without any database queries, ensuring sub-millisecond processing.' },
                { title: 'Secure & Private', icon: Shield, desc: 'We don\'t store your URLs or track your visitors. Your data remains yours, encoded directly into the link.' },
                { title: 'Mobile Responsive', icon: Smartphone, desc: 'Designed to work perfectly on any device, from desktops to smartphones, with a clean and intuitive UI.' }
              ].map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col group"
                >
                  <dt className="flex items-center gap-x-4 text-lg font-bold leading-7 text-neutral-900">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                    <p className="flex-auto">{feature.desc}</p>
                  </dd>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-neutral-900">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-orange-600 text-white">
                  <Link2 size={14} />
                </div>
                <span>ShortenReal</span>
              </Link>
              <p className="mt-4 text-sm text-neutral-500">
                The world&apos;s simplest URL shortener. No database, no tracking, just links.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Product</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                <li><Link href="/about" className="hover:text-orange-600">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                <li><Link href="/privacy" className="hover:text-orange-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-orange-600">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2"><Mail size={14} /> support@shortenreal.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} ShortenReal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
