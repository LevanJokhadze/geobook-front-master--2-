<?php
require_once("../Models/BookingModel.php");
class Booking
{
    private $bookingModel;
    private $data;

    public function __construct()
    {
        $this->data = [
            "company" => "LTD",
            "author" => "LJokhadze2@seu.edu.ge",
            "year" => '2024',
            "month" => "03",
            "day" => "15",
            "start" => "04:00",
            "end" => "05:00"
        ];
        $this->bookingModel = new BookingModel();
    }

    public function bookTime()
    {
        if (!empty($this->data)) {
            $this->bookingModel->book($this->data);
        }
    }
}

$init = new Booking();
$init->bookTime();
