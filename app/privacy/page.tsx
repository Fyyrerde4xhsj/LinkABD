'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Privacy() {
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
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Last Updated: March 29, 2026</p>
          <p>
            At LinkABD, your privacy is our top priority. Our entire business model is built around 
            <strong> not collecting data</strong>. This Privacy Policy explains how we handle information 
            (or rather, how we don&apos;t handle it).
          </p>
          
          <h2 className="text-2xl font-bold text-neutral-900 pt-4">1. Data Collection</h2>
          <p>
            LinkABD does not store any URLs you shorten in a database. The long URL is encoded into 
            a Base64 string and included directly in the short link. We do not store your IP address, 
            browser information, or location data.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">2. Cookies</h2>
          <p>
            We do not use tracking cookies. We may use essential session cookies to ensure the 
            functionality of the website, but these do not track your behavior across other sites.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">3. Third-Party Services</h2>
          <p>
            We do not share your data with third parties because we don&apos;t have your data to share. 
            However, when you click a shortened link, you will be redirected to the original destination 
            URL, which may have its own privacy policy.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">4. Security</h2>
          <p>
            We use HTTPS to encrypt data in transit between your browser and our servers. Since we 
            don&apos;t store your data, there is no database for attackers to breach.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">5. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be posted on this page with 
            an updated &quot;Last Updated&quot; date.
          </p>
        </div>
      </motion.main>
    </div>
  );
}
