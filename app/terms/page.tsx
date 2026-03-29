'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Terms() {
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
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Last Updated: March 29, 2026</p>
          <p>
            By using LinkABD, you agree to the following terms and conditions. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-bold text-neutral-900 pt-4">1. Acceptable Use</h2>
          <p>
            You agree not to use LinkABD for any illegal or unauthorized purpose. This includes, 
            but is not limited to, sharing links to malware, phishing sites, or content that violates 
            intellectual property rights.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">2. No Warranty</h2>
          <p>
            LinkABD is provided &quot;as is&quot; without any warranties, express or implied. We do not 
            guarantee that the service will be uninterrupted or error-free. Since we do not store 
            URLs, if a link is lost or the encoding is corrupted, we cannot recover it.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">3. Limitation of Liability</h2>
          <p>
            LinkABD shall not be liable for any indirect, incidental, special, or consequential 
            damages resulting from the use or inability to use the service.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">4. Termination</h2>
          <p>
            We reserve the right to block specific URLs or domains from being shortened if they 
            are found to violate our terms of service.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 pt-4">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the 
            jurisdiction in which the service operator resides.
          </p>
        </div>
      </motion.main>
    </div>
  );
}
