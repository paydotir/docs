###  نمونه کد PHP


:::: tabs
::: tab  send.php
``` php
<?php

include_once("functions.php");
$api = 'YOUR-API-KEY';
$amount = "مبلغ به ریال";
$mobile = "شماره موبایل";
$factorNumber = "شماره فاکتور";
$description = "توضیحات";
$redirect = 'http://YOUR-CALLBACK-URL';
$result = send($api, $amount, $redirect, $mobile, $factorNumber, $description);
$result = json_decode($result);
if($result->status) {
	$go = "https://pay.ir/pg/$result->token";
	header("Location: $go");
} else {
	echo $result->errorMessage;
}
```
:::
::: tab  verify.php
``` php
<?php

include_once("functions.php");
$api = 'YOUR-API-KEY';
$token = $_GET['token'];
$result = json_decode(verify($api,$token));
if(isset($result->status)){
	if($result->status == 1){
		echo "<h1>تراکنش با موفقیت انجام شد</h1>";
	} else {
		echo "<h1>تراکنش با خطا مواجه شد</h1>";
	}
} else {
	if($_GET['status'] == 0){
		echo "<h1>تراکنش با خطا مواجه شد</h1>";
	}
}
```
:::
::: tab  functions.php
``` php
<?php

function send($api, $amount, $redirect, $mobile = null, $factorNumber = null, $description = null) {
	return curl_post('https://pay.ir/pg/send', [
		'api'          => $api,
		'amount'       => $amount,
		'redirect'     => $redirect,
		'mobile'       => $mobile,
		'factorNumber' => $factorNumber,
		'description'  => $description,
	]);
}

function verify($api, $token) {
	return curl_post('https://pay.ir/pg/verify', [
		'api' 	=> $api,
		'token' => $token,
	]);
}

function curl_post($url, $params)
{
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Content-Type: application/json',
	]);
	$res = curl_exec($ch);
	curl_close($ch);

	return $res;
}
```
:::
::::