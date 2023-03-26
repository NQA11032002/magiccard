<?php

class Database
{
    public $con;
    protected $severname = "localhost";
    protected $username = "root";
    protected $password = "";
    protected $dbname = "magiccard";
    public function __construct()
    {
        $this->con = mysqli_connect($this->severname, $this->username, $this->password);
        mysqli_select_db($this->con, $this->dbname);
        mysqli_query($this->con, "Set names 'utf8'");
    }
}
