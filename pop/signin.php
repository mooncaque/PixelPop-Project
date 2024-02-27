<?php
session_start();

$email = $_POST["email"];
$password = $_POST["password"];

$conn = new mysqli('localhost', 'root', '', 'actfast');

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

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        if ($password === $row["password"]) {
            if ($row["role"] === "ADMIN") { 
                $_SESSION["user"] = $row;
                $_SESSION["loggedin"] = true; 
                header("Location: admingetaway.html"); 
                exit();
            } else {
                $_SESSION["user"] = $row;
                $_SESSION["loggedin"] = true; 
                header("Location: index.php"); 
                exit();
            }
        } else {
            echo "<script>alert('Invalid password'); window.location.href='signin.html';</script>";
            exit();
        }
    } else {
        header("Location: usernotfound.html"); 
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>
