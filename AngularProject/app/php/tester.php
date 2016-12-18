<?php
// process.php

date_default_timezone_set('Etc/UTC');
require 'PHPMailer/PHPMailerAutoload.php';


$dataBad = false;
$data = Array();
$params = json_decode(file_get_contents('php://input'),true);
$name = $params['name'];
$email = $params['email'];
$msg = $params['msg'];

if (empty($name)) {
  $data['message'] = 'Error: Please check name';
  $dataBad = true;

}
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  $data['message'] = 'Error: Invalid character in name';
  $dataBad = true;
}

if (empty($email)) {
  $data['message'] = 'Error: Email is missing';
  $dataBad = true;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $data['message'] = 'Error: Invalid email address'; 
  $dataBad = true;
}

if (empty($msg)) {
  $data['message'] = 'Error: Message is missing';
  $dataBad = true;
}

if ($dataBad) {

  $data['success'] = false;
  
} else {

  // if there are no errors, return a message
  

  $mail = new PHPMailer;
  
  //Tell PHPMailer to use SMTP
  $mail->isSMTP();

  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
  $mail->SMTPDebug = 0;

  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';

  //Set the hostname of the mail server
  $mail->Host = 'server230.web-hosting.com';


  //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
  $mail->Port = 465;

  //Set the encryption system to use - ssl (deprecated) or tls
  $mail->SMTPSecure = 'ssl';

  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;

  //Username to use for SMTP authentication - use full email address for gmail
  $mail->Username = "hello@alexvassallo.com";

  //Password to use for SMTP authentication
  $mail->Password = "ZkHVBQhIQVnrZk6l";


  //Read an HTML message body from an external file, convert referenced images to embedded,
  //convert HTML into a basic plain-text alternative body
  $mail->CharSet = 'windows-1250';
  $mail->AddAddress ('alex@alexvassallo.com', 'AlexVassallo.com');
  //$mail->AddAddress ('rleecharlie@gmail.com', 'AlexVassallo.com');
  
  $mail->addReplyTo ($email, $name);
  $mail->SetFrom ('hello@alexvassallo.com', $name);
 
 $mail->Subject = "AlexVassallo.com response";
  $mail->ContentType = 'text/plain'; 
  $mail->IsHTML(false);

  $mail->Body = 'test'; 
  
  
    if(!$mail->Send()) {
            $data['message'] = "SMTP Error: " . $mail->ErrorInfo;
            $data['success'] = false;
    } else {
            $data['message'] = "Successfully sent!";
            $data['success'] = true;
    }
}

echo json_encode($data);
?>