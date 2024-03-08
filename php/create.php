<?php
$host = 'localhost'; 
$dbname = 'apsystem'; 
$username = 'root'; 
$password = '';

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
        $name = $_POST['name'];
        $email = $_POST['email'];
        $content =$_POST['content'];   
        $time =$_POST['time'];
        
        $sql = "INSERT INTO users (name, email, time,content) VALUES ('$name','$email','$time','$content')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
?>
