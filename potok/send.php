<?php
	$name = $_POST['popup-name'];
	$phone = $_POST['popup-phone'];

	$name = htmlspecialchars($name);
	$phone = htmlspecialchars($phone);

	$name = urldecode($name);
	$phone = urldecode($phone);

	$name = trim($name);
	$phone = trim($phone);

	//
	//
	//
	// Параметры письма
	//
	$to = 'berdichevskayaya@gmail.com';

	// содержание письма
	$subject = "Заявка с сайта";
	$message = '
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html style="width:100%;font-family:arial,helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="x-apple-disable-message-reformatting">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="format-detection" content="telephone=no">
			<title>Заявка с сайта</title>
			<!--[if (mso 16)]>
				<style type="text/css">
				a {text-decoration: none;}
				</style>
				<![endif]--> 
			<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
			<style type="text/css">
				@media only screen and (max-width:600px) {.st-br { padding-left:10px!important; padding-right:10px!important } p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:28px!important; text-align:center; line-height:120%!important } h2 { font-size:24px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:28px!important; text-align:center } h2 a { font-size:24px!important; text-align:center } h3 a { font-size:20px!important; text-align:center } *[class="gmail-fix"] { display:none!important } }
			</style>
		</head>
		<body style="width:100%;font-family:arial, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
		<p>Имя: <span>'. $name .'</span></p>
		<p>Телефон: <span>'. $phone .'</span></p>
		</body>
	</html>
	';

	// устанавливаем тип сообщения Content-type, если хотим
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "Content-type: text/html; charset=utf-8 \r\n";

	// дополнительные данные
	$headers .= "From: hgh.acrolic.com <info@acrolic.com>\r\n"; // от кого

    if(mail($to, $subject, $message, $headers)) {
		echo '1';
	}
	else {
		echo '0';
	}
?>