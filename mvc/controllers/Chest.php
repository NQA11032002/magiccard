<?php
class Chest extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("inventories");
    }

    //get list items in chest
    public function getItemsInChest()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id_inventory = isset($_POST["id_inventory"]) ? $_POST["id_inventory"] : null;
            $id_chest = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

            $this->model->removeItemInventory($id_user, $id_inventory);
            $result = $this->model->getItemsInChest($id_chest);

            echo $result;
        }
    }

    //insert inventory item_chest
    public function insertInventories()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;
            $amount = isset($_POST["amount"]) ? $_POST["amount"] : null;

            $this->model->insertInventories($id_user, $id_item, $amount);
        }
    }
}
