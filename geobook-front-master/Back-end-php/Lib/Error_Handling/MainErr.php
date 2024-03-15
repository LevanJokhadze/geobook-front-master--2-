<?php
require_once("../../MVC/Models/LoginModel.php");
require_once("../../MVC/Models/RegisterModel.php");
class MainErr
{
    public $response = [
        "status" => "",
        "message" => ""
    ];
    private $logModel;
    private $regModel;
    public function __construct()
    {
        $this->logModel = new LoginModel();
        $this->regModel = new RegisterModel();
        $this->response['status'] = "success";
        $this->response['message'] = "No Errors Found";
    }

    public function emptyCheck($datas)
    {
        foreach ($datas as $key => $data) {
            if (empty($data)) {
                $failPoint = "Empty " . $key;
                return [
                    "status" => false,
                    "fail" => $failPoint
                ];
                break;
            }
        }
        return [
            "status" => true
        ];
    }

    public function passwordValidation($a, $b)
    {
        $maxSize = 24;
        $minSize = 6;

        // Password match
        if ($a !== $b) {
            return [
                "status" => false,
                "fail" => "Passwords Do Not Match"
            ];
        }

        // Password max limit
        if (strlen($a) > $maxSize) {
            return [
                "status" => false,
                "fail" => "Password Length Must Be Maximum " . $maxSize . " Characters"
            ];
        }

        // Password min limit
        if (strlen($a) < $minSize) {
            return [
                "status" => false,
                "fail" => "Password Length Must Be Minimum " . $minSize . " Characters"
            ];
        }

        return [
            "status" => true
        ];
    }

    public function emailValidator($email)
    {

        if (!preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $email)) {
            return [
                "status" => false,
                "fail" => "Email Is Not Valid"
            ];
        }

        return [
            "status" => true
        ];
    }

    public function userValidator($input)
    {
        $row = $this->logModel->findUser($input);
        $this->hash = $row->pwd;
        if (!$row) {
            return [
                "status" => false,
                "fail" => "User Does Not Exists!"
            ];
        }

        return [
            "status" => true
        ];
    }

    private $hash;
    public function passwordCheck($a)
    {
        if (!password_verify($a, $this->hash)) {
            return [
                "status" => false,
                "fail" => "Wrong Password"
            ];
        }

        return [
            "status" => true
        ];
    }
}
