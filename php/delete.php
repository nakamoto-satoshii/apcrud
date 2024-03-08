<?php
$host = 'localhost'; 
$dbname = 'apsystem'; 
$username = 'root'; 
$password = '';

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
       $id = $_POST['id']; 
        $sql = "DELETE FROM users WHERE id = $id";
        if (mysqli_query($conn, $sql)) {
            echo "Deleted Successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
?>
