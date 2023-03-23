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
    }

    //remove item wear meridian get out inventory
    public function takeOfMeridian()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id = isset($_POST["id"]) ? $_POST["id"] : null;
            $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

            $result = $this->model->takeOfMeridian($id_user, $id, $id_item);
            echo $result;
        }
    }
}
