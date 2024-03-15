<?php
require("../Models/RegisterModel.php");
require("../../Lib/Error_Handling/MainErr.php");
// Enable CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Credentials: true');


class Register
{
    private $jsonData;
    private $regModel;
    public $message;
    private $errorHandling;
    public function __construct()
    {
        $this->regModel = new RegisterModel();
        $this->errorHandling = new MainErr();
        $this->jsonData = json_decode(file_get_contents('php://input'), true);
        $this->message = [
            "status" => 'success',
            "message" => "Registered Succesful"
        ];
    }

    private function validateInput($data)
    {
        if (empty($data)) {
            return false;
        }

        return $data;
    }

    public function registerUser()
    {
        // Validate and sanitize input data
        $company = $this->validateInput($this->jsonData['company']);
        $email = $this->validateInput($this->jsonData['email']);
        $password = $this->validateInput($this->jsonData['password']);
        $rePassword = $this->validateInput($this->jsonData['rePassword']);
        $address = $this->validateInput($this->jsonData['address']);

        // Hash Password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Data for validation
        $validateData = [
            "Company" => $company,
            "Email" => $email,
            "Password" => $password,
            "Repeat Password" => $rePassword,
            "Address" => $address
        ];

        // Data for Model
        $data = [
            "company" => $company,
            "email" => $email,
            "password" => $hashedPassword,
            "address" => $address
        ];

        // Error handlers.
        $emptyCheck = $this->errorHandling->emptyCheck($validateData);
        $passwordValidator = [];
        $emailValidator = [];

        // Only validate password and email if they are not empty
        if (empty($emptyCheck['fail'])) {
            $passwordValidator = $this->errorHandling->passwordValidation($validateData['Password'], $validateData['Repeat Password']);
            $emailValidator = $this->errorHandling->emailValidator($validateData['Email']);
        }

        // Collect error messages.
        $errors = [];
        if (!empty($emptyCheck['fail'])) {
            $errors[] = $emptyCheck['fail'];
        }
        if (!empty($emailValidator['fail'])) {
            $errors[] = $emailValidator['fail'];
        }
        if (!empty($passwordValidator['fail'])) {
            $errors[] = $passwordValidator['fail'];
        }

        // Check for errors.
        if (!empty($errors)) {
            $this->message['status'] = "error";
            $this->message['message'] = implode("\n, ", $errors);
        } else {
            if (!$this->regModel->findUser($data['email'])) {
                $this->regModel->registerUser($data);
            } else {
                $this->message['status'] = "error";
                $this->message['message'] = "User Already Exists!";
            }
        }


        // Send data to React
        $response = ['status' => $this->message['status'], 'message' => $this->message['message']];

        // Send the JSON response
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}

// Create an instance of the Register class and run the registration logic
$register = new Register();
$register->registerUser();
