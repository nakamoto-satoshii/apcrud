<?php
$host = 'localhost'; 
$dbname = 'apsystem'; 
$username = 'root'; 
$password = ''; 

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$data = json_decode(file_get_contents("php://input"));

if(isset($data->value)) {
    $id = $data->value;

    $sql = "SELECT * FROM users WHERE id = $id";
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

} else {
    // Handle case where no data is received
    echo "No data received from JavaScript.";
}
       
?>
