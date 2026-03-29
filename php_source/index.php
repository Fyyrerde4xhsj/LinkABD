<?php
// index.php - Main Tool and Landing Page
$short_url = "";
if (isset($_POST['long_url']) && !empty($_POST['long_url'])) {
    $long_url = $_POST['long_url'];
    if (filter_var($long_url, FILTER_VALIDATE_URL)) {
        $encoded = base64_encode($long_url);
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $host = $_SERVER['HTTP_HOST'];
        $short_url = $protocol . "://" . $host . "/redirect.php?u=" . $encoded;
    } else {
        $error = "Please enter a valid URL.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Realtime URL Shortener - Fast & Secure</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; font-family: 'Inter', sans-serif; }
        .hero { padding: 80px 0; background: linear-gradient(135deg, #fff 0%, #fff5eb 100%); }
        .card { border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
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

    <section class="hero text-center">
        <div class="container">
            <h1 class="display-4 fw-bold mb-4">Shorten Links in <span style="color:#f97316">Real-Time</span></h1>
            <p class="lead text-muted mb-5">A lightweight, database-free URL shortener. No tracking, no storage.</p>
            
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card p-4">
                        <form method="POST" class="d-flex gap-2">
                            <input type="text" name="long_url" class="form-control form-control-lg" placeholder="Paste your long URL here..." required>
                            <button type="submit" class="btn btn-primary btn-lg">Shorten</button>
                        </form>
                        
                        <?php if (isset($error)): ?>
                            <p class="text-danger mt-3 mb-0"><?php echo $error; ?></p>
                        <?php endif; ?>

                        <?php if ($short_url): ?>
                            <div class="mt-4 p-3 bg-light rounded border border-warning-subtle text-start">
                                <p class="small fw-bold text-uppercase text-orange mb-1" style="color:#f97316">Your Short Link</p>
                                <div class="d-flex justify-content-between align-items-center gap-3">
                                    <code class="text-dark break-all"><?php echo $short_url; ?></code>
                                    <div class="d-flex gap-2">
                                        <button onclick="copyLink('<?php echo $short_url; ?>')" class="btn btn-sm btn-outline-secondary">Copy</button>
                                        <a href="<?php echo $short_url; ?>" target="_blank" class="btn btn-sm btn-primary">Open</a>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-white">
        <div class="container">
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <h3 class="h5 fw-bold">Fast Processing</h3>
                    <p class="text-muted">Instant encoding without database lookups.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="h5 fw-bold">Secure & Private</h3>
                    <p class="text-muted">We don't store your URLs or track visitors.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="h5 fw-bold">Mobile Ready</h3>
                    <p class="text-muted">Works perfectly on all devices.</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-4 border-top bg-light text-center">
        <p class="text-muted small mb-0">&copy; <?php echo date('Y'); ?> ShortenReal. All rights reserved.</p>
    </footer>

    <script>
        function copyLink(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Copied to clipboard!');
            });
        }
    </script>
</body>
</html>
