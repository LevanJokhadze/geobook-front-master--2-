<?php
require_once("../../Lib/Dbh.php");

class RegisterModel
{
    private $dbh;
    public function __construct()
    {
        $this->dbh = new Dbh();
    }

    public function findUser($email)
    {
        $this->dbh->query('SELECT * FROM userdata WHERE email = :useremail');
        $this->dbh->bind(':useremail', $email);

        $row = $this->dbh->single();
        if ($this->dbh->rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function registerUser($data)
    {
        $this->dbh->query('INSERT INTO userdata (company, email, pwd, address) 
            VALUES (:comp, :em, :pwd, :add)');

        # Bind values
        $this->dbh->bind(':comp', $data['company']);
        $this->dbh->bind(':em', $data['email']);
        $this->dbh->bind(':pwd', $data['password']);
        $this->dbh->bind(':add', $data['address']);

        # Execute
        if ($this->dbh->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
