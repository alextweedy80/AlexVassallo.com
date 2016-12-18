<?php

require_once('class.phpmailer.php');

$mail = new PHPMailer();

$mail->IsSMTP();                       // telling the class to use SMTP

$mail->SMTPDebug = 0;                  
// 0 = no output, 1 = errors and messages, 2 = messages only.

$mail->SMTPAuth = true;                // enable SMTP authentication 
$mail->SMTPSecure = "ssl";              // sets the prefix to the servier
$mail->Host = "server230.web-hosting.com";        // sets Gmail as the SMTP server
$mail->Port = 465;                     // set the SMTP port for the GMAIL 

$mail->Username = "hello@alexvassallo.com";  // Gmail username
$mail->Password = "s5kJu6RM0hOM1CDL";      // Gmail password

$mail->CharSet = 'windows-1250';
$mail->SetFrom ('test@test.com', 'first last');
$mail->Subject = "AlexVassallo.com response";
$mail->ContentType = 'text/plain'; 
$mail->IsHTML(false);

$mail->Body = $params['msg']; 
// you may also use $mail->Body = file_get_contents('your_mail_template.html');

$mail->AddAddress ('hello@alexvassallo.com', 'AlexVassallo.com');     
// you may also use this format $mail->AddAddress ($recipient);

if(!$mail->Send()) 
{
        $error_message = "Mailer Error: " . $mail->ErrorInfo;
} else 
{
        $error_message = "Successfully sent!";
}
?>

