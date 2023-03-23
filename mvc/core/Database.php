<?php

class Database
{
    public $con;
    protected $severname = "localhost";
    protected $username = "u711343983_vlth1";
    protected $password = "Haokim123!@#";
    protected $dbname = "u711343983_vlth";
    public function __construct()
    {
        $this->con = mysqli_connect($this->severname, $this->username, $this->password);
        mysqli_select_db($this->con, $this->dbname);
        mysqli_query($this->con, "Set names 'utf8'");
    }
}
