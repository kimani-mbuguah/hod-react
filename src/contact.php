<?php $name = $_POST['name'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['comments'];
$formcontent="From: $name \n Message: $message";
$recipient = "kimanimbuguah@gmail.com";
$subject = "Message From The Website";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>