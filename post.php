<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            exit;
        }

        $recipient = "gaurav.baheti@gmail.com";

        // Set the email subject.
        $subject = "New user on StockLo!";

        // Build the email content.
        $email_content = "Email: $email\n";

        // Build the email headers.
        $email_headers = "From: <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
    }

?>