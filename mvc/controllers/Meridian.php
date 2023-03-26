<?php
class Meridian extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("meridianModel");
    }

    public function index()
    {
    }

    //get list items meridian in inventory
    public function getInventory_Meridian()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $result = $this->model->getInventory_Meridian($id_user);

            echo $result;
        }
    }

    //get meridian was wear
    public function getWearMeridian()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $result = $this->model->getWearMeridian($id_user);

            echo $result;
        }
    }

    //update status wear meridian
    public function updateStatusMeridianToWear()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id_inventory = isset($_POST["id"]) ? $_POST["id"] : null;
            $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

            $result = $this->model->updateStatusMeridianToWear($id_user, $id_inventory, $id_item);

            echo $result;
        }

        if (isset($_SESSION["logined"])) {
            $this->model = $this->model("loginModel");

            $checkPass = $this->model->checkPassword($_SESSION["logined"][0]->user_name);

            $result = $this->model->login($_SESSION["logined"][0]->user_name, $checkPass[0]);
            if ($result != 0) {
                $_SESSION["logined"] = json_decode($result, false);
                echo $_SESSION["logined"][0]->power;
            }
        }
    }

    //remove item wear meridian get out inventory
    public function takeOfMeridian()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id = isset($_POST["id"]) ? $_POST["id"] : null;
            $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

            $result = $this->model->takeOfMeridian($id_user, $id, $id_item);
        }

        if (isset($_SESSION["logined"])) {
            $this->model = $this->model("loginModel");

            $checkPass = $this->model->checkPassword($_SESSION["logined"][0]->user_name);

            $result = $this->model->login($_SESSION["logined"][0]->user_name, $checkPass[0]);
            if ($result != 0) {
                $_SESSION["logined"] = json_decode($result, false);
                echo $_SESSION["logined"][0]->power;
            }
        }
    }

    //load item meridian by level_meridian + 1 and type
    public function loadMeridianByLevel()
    {
        $type = isset($_POST["type"]) ? $_POST["type"] : null;
        $level_meridian = isset($_POST["level_meridian"]) ? $_POST["level_meridian"] : null;

        $result = $this->model->loadMeridianByLevel($type, $level_meridian + 1);

        echo $result;
    }

    //create item meridian success into inventories
    public function createMeridianIntoInventory()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

            $this->model->createMeridianIntoInventory($id_user, $id_item);
        }
    }
}
