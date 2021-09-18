<?php

session_start();

if (!isset($_SESSION["userid"]) || $_SESSION["userid"] !== true) {
    header("location: login.php");
    exit;
}
?>
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Welcome <?php echo $_SESSION["name"]; ?></title>
        <link rel="stylesheet"
        href="">

</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Welcome! <strong><?php echo $_SESSION["name"]; ?>
</strong>. Welcome to the demo site.</h1>
</div>
<p>
    <a href="logout.php" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> Log Out </a>
</p>
</div>
</div>
</body>
</html>