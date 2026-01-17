<?php
/**
 * LRA Consulting - Contact Form Handler
 * Submits inquiries to info@lraconsulting.net
 */

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recipient email
    $to = "info@lraconsulting.net";
    
    // Sanitize and validate inputs
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $company = strip_tags(trim($_POST["company"]));
    $interest = strip_tags(trim($_POST["interest"]));
    $message = trim($_POST["message"]);

    // Basic validation
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete all required fields correctly."]);
        exit;
    }

    // Email Subject
    $subject = "LRA Strategic Briefing: $interest from $name";

    // Email Content
    $email_content = "Strategic Inquiry Details:\n\n";
    $email_content .= "Principal Name: $name\n";
    $email_content .= "Direct Email: $email\n";
    $email_content .= "Phone Number: $phone\n";
    $email_content .= "Organization: $company\n";
    $email_content .= "Strategic Interest: $interest\n\n";
    $email_content .= "Challenge Brief:\n$message\n\n";
    $email_content .= "---\nInquiry sent from LRA Consulting Website Portal.";

    // Email Headers
    $headers = "From: LRA Web Portal <noreply@lraconsulting.net>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Your inquiry has been submitted successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Internal server error. We were unable to deliver your message at this time."]);
    }

} else {
    // Not a POST request
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>