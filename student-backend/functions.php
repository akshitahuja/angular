<?php
require_once('auth.php');
require_once('db.php');

$fn = $_GET['fn'];
call_user_func($fn, $conn);
?>