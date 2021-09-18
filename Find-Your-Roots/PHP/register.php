<?php
// taken from https://dzone.com/articles/ceate-a-login-system-using-html-php-and-mysql

require_once "session.php";
require_once "config.php";


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    $fullname = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST["confirm_password"]);
    $password_hash = password_hash($password, PASSWORD_BCRYPT);

    if ($query = $db->prepare("SELECT * FROM users WHERE email = ?")) {
        $error = '';
        

        $query->bind_param('s', $email);
        $query->execute();

        $query->store_result();
        if ($query->num_rows > 0) {
            $error .= '<p class="error">Email address is already registered. Try another email address.</p>';
        } else {
            if (strlen($password) < 8 ) {
                $error .= '<p class="error">Password must have at least 8 characters.</p>';
            }

            if (empty($confirm_password)) {
                $error .= '<p class="error">Enter the confirm password.</p>';
            } else {


                if (empty($error) && ($password != $confirm_password)) {
                    $error .= '<p class="error">The two passwords did not match.</p>';

                }




            }
            if (empty($error)) {
                $insertQuery = $db->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?);");
                $insertQuery->bind_param("sss", $fullname, $email, $password_hash);
                $result = $insertQuery->execute();
                if ($result) {
                    $error .= '<p class="success">Your registration was successful!</p>';
                    
                } else {
                    $error .= '<p class="error">Error! Something went wrong!</p>';
                }


            }




        }
    }
    $query->close();
    $insertQuery->close();
    
    mysqli_close($db);


}
?>


<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Create New Account</title>
        <link rel="stylesheet" href="">

</head>
<body>
    <div class="col-md-12">
        <h2>Register</h2>
        <p>Fill the form below to create an account</p>
        <?php echo $success; ?>
        <?php echo $error; ?>
        <form action="" method="post">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" class="form-control" required>
</div>

<div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" class="form-control" required>
</div>

<div class="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" required>
</div>

<div class="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" class="form-control" required>
</div>

<div class="form-group">
               
                <input type="submit" name="submit" class="btnbtn-primary" value = "submit">
</div>
<p> If you already have an account, login <a hrer="login.php">here</a>.</p>
</form>
</div>
</div>
</div>
</body>
</html>