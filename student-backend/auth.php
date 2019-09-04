<?php
require_once('header-allow.php');
session_start();

if(isset($_SESSION['user_id']) && !empty($_SESSION['user_id']) && isset($_SESSION['username']) && !empty($_SESSION['username'])) {
	$data = array('success' => true);
	echo json_encode($data);
	exit;
}
else {
	$data = array('success' => false, 'errorCode' => 0001);
	echo json_encode($data);
	exit;
}