<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - Realtime URL Shortener</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; font-family: 'Inter', sans-serif; }
        .card { border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 40px; }
        .btn-primary { background-color: #f97316; border: none; padding: 12px 30px; }
        .btn-primary:hover { background-color: #ea580c; }
        .nav-link:hover { color: #f97316 !important; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.php">Shorten<span class="text-orange" style="color:#f97316">Real</span></a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="about.php">About</a>
                <a class="nav-link" href="contact.php">Contact</a>
                <a class="nav-link" href="privacy.php">Privacy</a>
                <a class="nav-link" href="terms.php">Terms</a>
            </div>
        </div>
    </nav>

    <main class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <h1 class="fw-bold mb-4">Privacy Policy</h1>
                    <p class="text-muted small mb-4">Last Updated: March 29, 2026</p>
                    <div class="text-muted lh-lg">
                        <p>At ShortenReal, your privacy is our top priority. Our entire business model is built around <strong>not collecting data</strong>. This Privacy Policy explains how we handle information (or rather, how we don't handle it).</p>
                        
                        <h2 class="h5 fw-bold text-dark mt-4">1. Data Collection</h2>
                        <p>ShortenReal does not store any URLs you shorten in a database. The long URL is encoded into a Base64 string and included directly in the short link. We do not store your IP address, browser information, or location data.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">2. Cookies</h2>
                        <p>We do not use tracking cookies. We may use essential session cookies to ensure the functionality of the website, but these do not track your behavior across other sites.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">3. Third-Party Services</h2>
                        <p>We do not share your data with third parties because we don't have your data to share. However, when you click a shortened link, you will be redirected to the original destination URL, which may have its own privacy policy.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">4. Security</h2>
                        <p>We use HTTPS to encrypt data in transit between your browser and our servers. Since we don't store your data, there is no database for attackers to breach.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">5. Changes to This Policy</h2>
                        <p>We may update this policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="py-4 border-top bg-light text-center">
        <p class="text-muted small mb-0">&copy; <?php echo date('Y'); ?> ShortenReal. All rights reserved.</p>
    </footer>
</body>
</html>
