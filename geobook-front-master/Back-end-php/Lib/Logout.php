<?php
session_start();
// Allow requests from the React app's origin
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
class Logout
{

    public function __construct()
    {
        unset($_SESSION['id']);
        unset($_SESSION['company']);
        unset($_SESSION['email']);
        unset($_SESSION['address']);
        unset($_SESSION['date']);
        session_destroy();
    }
}

new Logout();
