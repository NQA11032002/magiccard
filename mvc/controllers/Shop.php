<?php
class Shop extends Controller
{
    private $model;
    public function __construct()
    {
        $this->model = $this->model("shopModel");
    }

    //load sản phẩm trong shop
    public function loadShop()
    {
        $result = $this->model->loadShop();

        echo $result;
    }

    //mua item trong shop
    public function buyItemInShop()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;
        $amount = isset($_POST["amount"]) ? $_POST["amount"] : null;
        $newMyCoin = isset($_POST["newMyCoin"]) ? $_POST["newMyCoin"] : null;
        $status = 0;

        $this->model->buyItemInShop($id_user, $id_item, $amount, $status, $newMyCoin);

        if (isset($_SESSION["logined"])) {
            $this->model = $this->model("loginModel");

            $checkPass = $this->model->checkPassword($_SESSION["logined"][0]->user_name);

            $result = $this->model->login($_SESSION["logined"][0]->user_name, $checkPass[0]);
            if ($result != 0) {
                $_SESSION["logined"] = json_decode($result, false);
            }
        }
    }
}