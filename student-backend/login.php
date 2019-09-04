<?php
require_once('db.php');

$fn = $_GET['fn'];
call_user_func($fn, $conn);

function validate_user($conn) {
	$data = json_decode(file_get_contents("php://input"), true);
	
	$username = htmlspecialchars(strip_tags(trim($data['username'])));
	$password = sha1(htmlspecialchars(strip_tags(trim($data['password']))));
	
	$qr = mysqli_query($conn, "SELECT user_id FROM users WHERE username = '$username' && password = '$password'");
	$res = mysqli_fetch_assoc($qr);
	
	$response = array();
	if($res) {
		session_start();
		$_SESSION['user_id'] = $res['user_id'];
		$_SESSION['username'] = $username;
		$response = array('success' => true, 'extraData' => array('user_id' => $res['user_id'], 'username' => $username));
		
	}
	else {
		$response = array('success' => false, 'msg' => 'Please check entered credentials and try again');
	}
	
	echo json_encode($response);
	exit;
}