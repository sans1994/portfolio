<?php

$obj = new stdClass();

$obj->email = "webmaster@example.com";

$obj->to = "m-dyhanie@mail.ru";
$obj->sitename = "ИСКУССТВЕННЫЕ ЕЛКИ";
$obj->pagetitle = "Новая заявка с сайта \"$obj->sitename\"";

$obj->name = trim($_POST["name"]);
$obj->tel = trim($_POST["tel"]);
$obj->select__grav = trim($_POST["select__grav"]);
$obj->address = trim($_POST["address"]);
$obj->rosename = trim($_POST["rosename"]);
$obj->summ__input = trim($_POST["summ__input"]);
$obj->utm_source = trim($_POST["utm_source"]);
$obj->utm_content = trim($_POST["utm_content"]);
$obj->utm_campaign = trim($_POST["utm_campaign"]);
$obj->utm_term = trim($_POST["utm_term"]);
$obj->utm_medium = trim($_POST["utm_term"]);


$message = "
Имя: $obj->name <br>
Телефон: $obj->tel <br>
Адрес доставки: $obj->address<br>
Название: $obj->rosename<br>
Сумма: $obj->summ__input<br>
Гирлянда: $obj->select__grav <br>
utm_source: $obj->utm_source <br>
utm_content: $obj->utm_content <br>
utm_campaign: $obj->utm_campaign <br>
utm_term: $obj->utm_term <br>
utm_medium: $obj->utm_medium <br>
";

$headers = "From: $obj->email" . "\r\n" .
    "Reply-To: $obj->email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
	"Content-type: text/html; charset=\"utf-8\"";
	
mail($obj->to, $obj->pagetitle, $message, $headers);

$json = json_encode($obj);
$ch = curl_init();
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          'Content-Type: application/json',
          "accept: application/json"
         ));
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, "30");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_PORT, "443");
        curl_setopt($ch, CURLOPT_URL,
        "https://ok.omnitell.ru/maps_get_request48a1e0d7fc154e50830f5482f80ff4bb");
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json); 

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);