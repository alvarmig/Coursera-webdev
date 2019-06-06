<?php
	$user_name=$_POST['name'];
	$user_email=$_POST['email'];
	$user_message=$_POST['message'];

	$to_email="alvarado.mavm@gmail.com";

	$subject="Resquest sent from www.miguelalvarado.com";

	$message="Name: ".$user_name."\r\n";
	$message.="Email: ".$user_email."\r\n";
	$message.="Message: ".$user_message."\r\n";

	$from_email="From: algo@alvarado.com";

	mail($to_email,$subject,$message,$from_email);

	header("Location:../index.php?i=ok#contact-section");
?>