'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
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
            <span>Link<span className="text-orange-600">ABD</span></span>
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
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">About LinkABD</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
          <p>
            LinkABD was born out of a simple idea: Why do we need massive databases just to shorten a link? 
            Most URL shorteners track your every move, store your data indefinitely, and require complex backends.
          </p>
          <p>
            We decided to do things differently. By using <strong>Base64 encoding</strong>, we transform your long 
            URLs into a compact string that is stored directly within the short link itself. This means:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Zero Database:</strong> We don&apos;t store a single byte of your URL data.</li>
            <li><strong>Instant Redirection:</strong> No database lookups mean faster redirects.</li>
            <li><strong>Privacy First:</strong> We don&apos;t track who clicks your links or where they come from.</li>
            <li><strong>Stateless Architecture:</strong> The system is lightweight and infinitely scalable.</li>
          </ul>
          <p className="pt-4 border-t border-neutral-200">
            Our mission is to provide a transparent, secure, and incredibly fast tool for the modern web. 
            Whether you&apos;re sharing a long research paper link or a complex tracking URL, LinkABD makes it 
            clean and manageable without the baggage of traditional services.
          </p>
        </div>
      </motion.main>
    </div>
  );
}
