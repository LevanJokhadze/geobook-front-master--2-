<?php
require_once("../../Lib/Dbh.php");

class LoginModel
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
            return $row;
        } else {
            return false;
        }
    }
}
