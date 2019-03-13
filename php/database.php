<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>  
        <meta chartset="utf-8">
        <title>Login</title>
    </head>
    <body>
        <h1>Login</h1> 
<?php
$servername = "g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$username = "foegk7q6q65ty5l5";
$password = "k8ky5krecuy7agy1";
$dbname = "g8uqwo8ojakufyyi";
        
// Check connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
    //get the users password
    $password = $_POST["password"];
     
    //see if can find a user
    $sql = "SELECT * FROM admins WHERE username='".$_POST["username"]."';";

    //echo $sql;
    
    $res2 = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($res2) > 0) {
        
        $row = mysqli_fetch_assoc($res2);
        
        //see if there password matches the one in db
        $allowed = ($password == $row["hashed_password"]);
        
        if($allowed){
            echo "access granted!";
           
            //Create some session variables
            $_SESSION["id"] = $row["id"];
            $_SESSION["username"] = $row["username"];
            
            echo $_SESSION["id"];
            echo $_SESSION["username"];

            //go to the admin area does not work because of MAMP again T^T
            header( 'Location: admin.php' );
        }
        else{
            //send back to login page does not work because of MAMP again T^T
            header( 'Location: login_form.php' ); 
        }
    }       
}
mysqli_close($conn);       
?>
<br>
</body>
</html>