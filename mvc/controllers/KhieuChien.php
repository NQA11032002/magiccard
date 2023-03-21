<?php
class KhieuChien extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("inventories");
    }

    public function show()
    {
        $this->view('KhieuChien');
    }

    public function loadInventories()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;

        $result = $this->model->loadInventories($id_user);

        echo $result;
    }

    //thêm kho đồ
    public function insertInventories()
    {
        $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;
        $amount = isset($_POST["amount"]) ? $_POST["amount"] : null;
        $id_usser = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $this->model->insertInventories($id_usser, $id_item, $amount);
    }

    //update coin khi rơi vàng
    public function updateCoin()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $preCoin = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->coin : 0;
        $newCoin = isset($_POST["coin"]) ? $_POST["coin"] : null;
        $totalCoin = (int) ($preCoin + $newCoin);

        $this->model->updateCoin($id_user, $totalCoin);

        if (isset($_SESSION["logined"])) {
            $this->model = $this->model("loginModel");

            $checkPass = $this->model->checkPassword($_SESSION["logined"][0]->user_name);

            $result = $this->model->login($_SESSION["logined"][0]->user_name, $checkPass[0]);
            if ($result != 0) {
                $_SESSION["logined"] = json_decode($result, false);

                echo $_SESSION["logined"][0]->coin;
            }
        }
    }
}
