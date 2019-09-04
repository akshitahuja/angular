<?php
require_once('header-allow.php');
session_start();
// $_SESSION['user_id'] = 12;
		// $_SESSION['username'] = 'as';
		// echo $_SESSION['user_id'];
// print_r($_SESSION);
// die;
if(isset($_SESSION['user_id']) && !empty($_SESSION['user_id']) && isset($_SESSION['username']) && !empty($_SESSION['username'])) {
	$data = array('success' => true, 'new' => 123);
	echo json_encode($data);
	exit;
}
else {
	$data = array('success' => false, 'errorCode' => 0001);
	echo json_encode($data);
	exit;
}