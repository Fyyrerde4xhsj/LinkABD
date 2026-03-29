<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service - Realtime URL Shortener</title>
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
                    <h1 class="fw-bold mb-4">Terms of Service</h1>
                    <p class="text-muted small mb-4">Last Updated: March 29, 2026</p>
                    <div class="text-muted lh-lg">
                        <p>By using ShortenReal, you agree to the following terms and conditions. Please read them carefully.</p>
                        
                        <h2 class="h5 fw-bold text-dark mt-4">1. Acceptable Use</h2>
                        <p>You agree not to use ShortenReal for any illegal or unauthorized purpose. This includes, but is not limited to, sharing links to malware, phishing sites, or content that violates intellectual property rights.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">2. No Warranty</h2>
                        <p>ShortenReal is provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted or error-free. Since we do not store URLs, if a link is lost or the encoding is corrupted, we cannot recover it.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">3. Limitation of Liability</h2>
                        <p>ShortenReal shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">4. Termination</h2>
                        <p>We reserve the right to block specific URLs or domains from being shortened if they are found to violate our terms of service.</p>

                        <h2 class="h5 fw-bold text-dark mt-4">5. Governing Law</h2>
                        <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the service operator resides.</p>
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
