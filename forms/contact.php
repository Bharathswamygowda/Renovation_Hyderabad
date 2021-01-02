<?php


if ( ($_POST['name']!="") && ($_POST['email']!="")){
$name = $_POST['name'];
$email = $_POST['email'];
$phonenumber = $_POST['pumber'];
$message = $_POST['message'];

$to = "bharathsgowda111@gmail.com";
$subject = "Contact us";
$message = "<p>New email is received from $name.</p>
<p>Phone Number: $phonenumber</p> <p>Message: $message</p>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <".$email.">" . "\r\n";
$sent = mail($to,$subject,$message,$headers);
if($sent){
echo "<span style='color:green; font-weight:bold;'>
Thank you for contacting us, we will get back to you shortly.
</span>";
}
else{
echo "<span style='color:red; font-weight:bold;'>
Sorry! Your form submission is failed.
</span>";
}
}
?>