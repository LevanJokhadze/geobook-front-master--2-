<?php
session_start();
require_once("../Models/LoginModel.php");
require("../../Lib/Error_Handling/MainErr.php");


// Enable CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Credentials: true');


class Login
{
    private $jsonData;
    private $logModel;
    public $message;
    private $errorHandling;

    public function __construct()
    {
        $this->logModel = new LoginModel();
        $this->jsonData = json_decode(file_get_contents('php://input'), true);
        $this->errorHandling = new MainErr();

        $this->message = [
            "status" => 'success',
            "message" => "Log In Succesful"
        ];
    }

    private function validateInput($data)
    {
        return $data;
    }


    public function loginUser()
    {
        // Validate and sanitize input data
        $email = $this->validateInput($this->jsonData['email']);
        $password = $this->validateInput($this->jsonData['password']);

        $data = [
            "email" => $email,
            "password" => $password
        ];

        // Error handlers.
        $emptyCheck = $this->errorHandling->emptyCheck($data);
        $passwordValidator = [];
        $emailValidator = [];


        // Only validate password and email if they are not empty
        if (empty($emptyCheck['fail'])) {
            $emailValidator = $this->errorHandling->emailValidator($data['email']);
            $userValidator = $this->errorHandling->userValidator($data['email']);
            $passwordCheck = $this->errorHandling->passwordCheck($data['password']);
        }

        // Collect error messages.
        $errors = [];
        if (!empty($emptyCheck['fail'])) {
            $errors[] = $emptyCheck['fail'];
        }
        if (!empty($emailValidator['fail'])) {
            $errors[] = $emailValidator['fail'];
        }
        if (!empty($userValidator['fail'])) {
            $errors[] = $userValidator['fail'];
        }
        if (!empty($passwordCheck['fail'])) {
            $errors[] = $passwordCheck['fail'];
        }


        // Check for errors.
        if (!empty($errors)) {
            $this->message['status'] = "error";
            $this->message['message'] = implode("\n, ", $errors);
        } else {
            $row = $this->logModel->findUser($data['email']);
            $this->createSession($row);
        }



        // Assume registration is successful for demonstration purposes
        $response = ['status' => $this->message['status'], 'message' => $this->message['message']];

        // Send the JSON response
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function createSession($data)
    {
        $_SESSION['id'] = $data->id;
        $_SESSION['company'] = $data->company;
        $_SESSION['email'] = $data->email;
        $_SESSION['address'] = $data->address;
        $_SESSION['date'] = $data->date;
    }
}

// Create an instance of the Register class and run the registration logic
$register = new Login();
$register->loginUser();
