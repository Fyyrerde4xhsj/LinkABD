<?php
// redirect.php - Logic for decoding and redirecting
if (isset($_GET['u']) && !empty($_GET['u'])) {
    $encoded = $_GET['u'];
    try {
        $decoded = base64_decode($encoded);
        // Basic validation to ensure it's a URL
        if (filter_var($decoded, FILTER_VALIDATE_URL)) {
            header("Location: " . $decoded, true, 301);
            exit();
        } else {
            echo "Invalid URL format in the link.";
        }
    } catch (Exception $e) {
        echo "Failed to decode the URL.";
    }
} else {
    header("Location: index.php");
    exit();
}
?>
