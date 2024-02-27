<?php
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Connection
$conn = new mysqli('localhost', 'root', '', 'actfast');

// Check connection
if ($conn->connect_error) {
    die('Error Connecting: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("SELECT * FROM user WHERE email = ?");
    if ($stmt === false) {
        die('Error Preparing Statement: ' . $conn->error);
    }
    
    $stmt->bind_param("s", $email);
    if ($stmt->execute() === false) {
        die('Error Executing Statement: ' . $stmt->error);
    }
    
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // User already exists, display a pop-up
        echo "<script>alert('User already exists. Please choose a different email.'); window.location.href='signup.html';</script>";
    } else {
        $stmt = $conn->prepare("INSERT INTO user (name, email, password) 
                                VALUES (?, ?, ?)");
        if ($stmt === false) {
            die('Error Preparing Statement: ' . $conn->error);
        }
        
        $stmt->bind_param("sss", $name, $email, $password);
        if ($stmt->execute() === false) {
            die('Error Executing Statement: ' . $stmt->error);
        }
        
        $stmt->close();
        $conn->close();
        
        // Redirect to successfullsignup.html
        header("Location: successfullsignup.html");
        exit();
    }
}
?>
