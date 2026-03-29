<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Realtime URL Shortener</title>
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
                    <h1 class="fw-bold mb-4">Contact Us</h1>
                    <p class="text-muted mb-5">Have a question, feedback, or just want to say hi? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
                    
                    <form action="#" method="POST">
                        <div class="mb-3">
                            <label for="name" class="form-label fw-bold">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label fw-bold">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="form-label fw-bold">Message</label>
                            <textarea class="form-control" id="message" rows="4" placeholder="How can we help?" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Send Message</button>
                    </form>
                    
                    <div class="mt-5 pt-4 border-top text-center">
                        <p class="text-muted small">Email Support: support@shortenreal.com</p>
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
