# Software Requirement Specification (SRS)
## Project: Realtime URL Shortener Website

### 1. Introduction
The Realtime URL Shortener is a stateless, database-free web application designed for instant URL encoding and redirection. Unlike traditional shorteners that store data in a database, this system uses Base64 encoding to transform long URLs into short, shareable strings that can be decoded in real-time.

### 2. System Overview
- **Objective:** Provide a fast, lightweight, and secure URL shortening tool.
- **Key Constraint:** No database, no storage, no tracking.
- **Workflow:**
  1. User inputs a long URL.
  2. System encodes the URL using Base64.
  3. System generates a short link (e.g., `yourdomain.com/?u=aHR0cHM...`).
  4. Visitor clicks the link; the system decodes the `u` parameter and redirects.

### 3. Functional Requirements
- **URL Encoding:** Convert any valid URL into a Base64 string.
- **URL Decoding:** Extract the Base64 string from the URL parameter and decode it.
- **Redirection:** Perform a 301 (Permanent) or 302 (Found) redirect to the original URL.
- **UI Components:**
  - Hero section with a clear value proposition.
  - Input field with validation.
  - Result display with "Copy" and "Open" functionality.
- **Static Pages:** About, Contact, Privacy Policy, Terms & Conditions.

### 4. Technical Stack
- **Frontend:** HTML5, CSS3 (Tailwind/Bootstrap).
- **Backend:** PHP (for Hostinger) / Next.js (for Preview).
- **Hosting:** Hostinger Shared Hosting (PHP 7.4+).
- **Security:** HTTPS support, input sanitization.

### 5. File Structure (PHP Version)
```text
public_html/
├── index.php        # Main tool and landing page
├── redirect.php     # Logic for decoding and redirecting
├── about.php        # About page
├── contact.php      # Contact page
├── privacy.php      # Privacy Policy
├── terms.php        # Terms & Conditions
└── assets/
    ├── css/         # Custom styles
    ├── js/          # Frontend logic (Copy to clipboard)
    └── icons/       # Favicon and UI icons
```

### 6. SEO Strategy
- **Meta Title:** Realtime URL Shortener - Fast & Secure Link Shortening
- **Meta Description:** Shorten your long URLs instantly without any database. Secure, private, and fast Base64-based URL shortening.
- **Keywords:** URL shortener, link shortener, realtime shortener, no database shortener.

### 7. Deployment Guide (Hostinger)
1. Log in to Hostinger hPanel.
2. Open File Manager for your domain.
3. Upload all files from the `public_html/` directory.
4. Ensure `index.php` is in the root.
5. (Optional) Configure `.htaccess` for cleaner URLs (e.g., `domain.com/s/aHR0...`).

### 8. Deployment Guide (Vercel/Netlify)
- This version uses Next.js for modern performance.
- Simply connect your GitHub repository to Vercel or Netlify.
- The system will auto-build and deploy.
