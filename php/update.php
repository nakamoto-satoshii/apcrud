<?php
$host = 'localhost';
$dbname = 'apsystem'; 
$username = 'root'; 
$password = ''; 
$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
        $name =$_POST['name'];
        $email = $_POST['email'];
        $time =$_POST['time'];
        $content = $_POST['content'];
        $id = $_POST['id'];

        $sql = "UPDATE users SET name='$name', email='$email', time='$time', content='$content' WHERE id=$id";
        if (mysqli_query($conn, $sql)) {
            echo "Update successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
?>
