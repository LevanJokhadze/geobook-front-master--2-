<?php

/*
        * PDO Statements.
        * PDO Connection With DSN.
    */

class Dbh
{

    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $dbname = 'geobook';

    # Actual Connection.
    private $dbh;

    # stmt For Library.
    private $stmt;

    # Error Handling System.
    private $error;

    public function __construct()
    {


        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;
        $options = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );

        try {
            // PDO.
            $this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
        } catch (PDOException $e) {
            // Error Handling.
            $this->error = $e->getMessage();
            echo $this->error;
        }
    }

    # Prepare stmt with quary

    public function query($sql)
    {
        $this->stmt = $this->dbh->prepare($sql);
    }

    # Bind values to prepared statements

    public function bind($param, $value, $type = null)
    {
        if (is_null($type)) {
            switch (true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                case is_array($value):
                    $type = PDO::PARAM_LOB;
                    break;
                default:
                    $type = PDO::PARAM_STR;
            }
        }
        $this->stmt->bindValue($param, $value, $type);
    }

    # Execute the prepared statement

    public function execute()
    {
        return $this->stmt->execute();
    }

    # Return multyple records

    public function result()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public function resultArr()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    # Return single record

    public function single()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }

    # Get rowCount

    public function rows()
    {
        return $this->stmt->rowCount();
    }
}
