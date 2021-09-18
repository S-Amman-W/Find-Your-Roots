<?php

define('DatabaseServer', 'localhost'); //DB server
define('DatabaseUsename', 'root'); //DB username
define('DatabasePassword', ''); //DB password
define('DatabaseName', 'demo') //DB name

$db = mysqli_connect(DatabaseServer, DatabaseUsername, DatabasePassword, DatabaseName);

// error if can't connect
if ($db == false) {
    die("Connection Error!".mysqli_connect_error());
}

?>