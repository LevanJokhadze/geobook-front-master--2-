<?php
require_once("../../Lib/Dbh.php");
class BookingModel
{
    private $dbh;
    public function __construct()
    {
        $this->dbh = new Dbh();
    }

    public function book($data)
    {
        $this->dbh->query("INSERT INTO bookings (company, author, year, month, day, start, end) VALUES (:c, :a, :y, :m, :d, :s, :e)");
        $this->dbh->bind(":c", $data['company']);
        $this->dbh->bind(":a", $data['author']);
        $this->dbh->bind(":y", $data['year']);
        $this->dbh->bind(":m", $data['month']);
        $this->dbh->bind(":d", $data['day']);
        $this->dbh->bind(":s", $data['start']);
        $this->dbh->bind(":e", $data['end']);

        $this->dbh->execute();
    }
}
