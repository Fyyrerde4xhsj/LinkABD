<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Realtime URL Shortener</title>
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
                    <h1 class="fw-bold mb-4">About ShortenReal</h1>
                    <div class="text-muted lh-lg">
                        <p>ShortenReal was born out of a simple idea: Why do we need massive databases just to shorten a link? Most URL shorteners track your every move, store your data indefinitely, and require complex backends.</p>
                        <p>We decided to do things differently. By using <strong>Base64 encoding</strong>, we transform your long URLs into a compact string that is stored directly within the short link itself.</p>
                        <ul class="list-unstyled mt-4">
                            <li><strong>Zero Database:</strong> We don't store a single byte of your URL data.</li>
                            <li><strong>Instant Redirection:</strong> No database lookups mean faster redirects.</li>
                            <li><strong>Privacy First:</strong> We don't track who clicks your links or where they come from.</li>
                            <li><strong>Stateless Architecture:</strong> The system is lightweight and infinitely scalable.</li>
                        </ul>
                        <p class="mt-4">Our mission is to provide a transparent, secure, and incredibly fast tool for the modern web. Whether you're sharing a long research paper link or a complex tracking URL, ShortenReal makes it clean and manageable without the baggage of traditional services.</p>
                    </div>
                    <div class="mt-5">
                        <a href="index.php" class="btn btn-primary">Back to Home</a>
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
