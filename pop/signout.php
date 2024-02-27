<?php
session_start();

// Clear all sessions
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to the sign-in
header("Location: signin.html");
exit();
?>
