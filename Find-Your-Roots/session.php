<?php
// start session
session_start();

// if user already logged in -> redirect to welcome page
if (isset($_SESSION["userid"]) && $_SESSION["userid"] === true){
    header("location: index.html");
    exit;
}

/* received help from tutorial: https://dzone.com/articles/ceate-a-login-system-using-html-php-and-mysql */

?>