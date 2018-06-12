<?php
$recepient = "berdichevskayaya@gmail.com";
$sitename = "VLV-Mebel";

$name = trim($_POST["name"]);
$phone = trim($_POST["number"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient)