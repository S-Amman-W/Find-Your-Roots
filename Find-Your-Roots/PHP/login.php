<?php

require_once "config.php";
require_once "session.php";

$error = '';
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    //validate if email is empty
    if (empty($email)) {
        $error .= '<p class="error">Please enter email.</p>';
    }

    // validate if password is empty
    if(empty($password)){
        $error .= '<p class="error">Please enter your password.</p>';
    }

    if (empty($error)) {
        if($query = $db->prepare("SELECT * FROM users WHERE email = ?")) {
            $query->bind_param('s', $email);
            $query->execute();
            $row = $query->fetch();
            if ($row) {
                if (password_verify($password, $row['password'])) {
                    $_SESSION["userid"] = $row['id'];
                    $_SESSION["user"] = $row;

                    //redirect to welcome page
                    header("location: welcome.php");
                    exit;
                } else {
                    $error .= '<p class="error">Password is invalid.</p>';
                }
            } else {
                $error .= '<p class="error">No user exists with that email address.</p>';
            }
        }
        $query->close();
    }
    // close connection
    mysqli_close($db);
}
?>



<!DOCTYPE html>
<html>
    <style>
        html{ font-family: Verdana; }
     </style>
    <div class="container">
        <!-- The Options -->
        <a class="Menu" href="index.html">Menu</a>
        <a class="About" href="about.html">About</a>
        <a class="AccountandProfile" href="profile.html">Account/Profile</a>
        <a class="FamilyTree" href="familyTree.html">Family Tree</a>
        <a class="SharedInterests" href="shareInterest.html">Shared Interests</a>
        <a class="Moments" href="moments.html">Moments</a>
        <a class="LoginLogout" href="logInOut.html">Login/Logout</a><br><br>


    <head>
        <title>Find-Your-Roots</title>
        <link rel="stylesheet" href="stylesheets/main.css">
        <script src="javascripts/main.js"></script>
        <script> //just put this on js file (more clean) (this is how you comment on js)
          
        </script>
        <style>
            /*
            this is how you comment in css
            */
        </style>
    </head>
    <body>
        <div class="header">
            <h1><center>Find Your Roots: Login/Logout</center></h1>
        </div>
            <center><img src="LogoPic-FYR.png"></center>


<div class="container">
    <div class="col-md-12">
        <h2>Login</h2>
        <p>Welcome, please sign in.</p>
        <form action="" method="post">
            <div class="form-group">
                <label>Email address:</label>
                <input type="email" name="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" required>
            </div>
            <div class="form-group">
                <input type="submit" name="submit" class="btn btn-primary" value="Submit">
            </div>


            <p>Don't have an account?</p>
            <form action="/createaccsite.html"> <!-- Link to another page!!!! (this is how you write comments btw in html) --> 
                <center> <button>
                    <img src="Createaccountpic.png">
                </button> </center>
            </form>
        </form>
    </div>
</div>
</div>
    </body>
</html>