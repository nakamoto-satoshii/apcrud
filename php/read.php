<?php
$host = 'localhost'; 
$dbname = 'apsystem'; 
$username = 'root'; 
$password = ''; 

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

        $sql = "SELECT * FROM users";
        $result = $conn->query($sql);

        $data = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        $conn->close();
      
        header('Content-Type: application/json');
       echo json_encode($data);
?>
