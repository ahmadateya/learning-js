<?php
// Create Connection
$conn = mysqli_connect('localhost:8080', 'root', '123456', 'AJAX Test');

$query = 'SELECT * FROM users';

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);
