<?php
class Gatcha extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("gatchaModel");
    }

    public function loadItemGatcha()
    {

        $result = $this->model->getItemGatcha();

        echo $result;
    }

    public function getItemPointGatcha()
    {

        $result = $this->model->getItemPointGatcha();

        echo $result;
    }

    //lấy danh sách lịch sử quay
    public function getHistoryGatcha()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $result = $this->model->getHistoryGatcha($id_user);

        echo $result;
    }

    //thêm lich sử quay
    public function addItemToHistory()
    {
        date_default_timezone_set('Asia/Ho_Chi_Minh');

        $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;
        $amount = isset($_POST["amount"]) ? $_POST["amount"] : null;
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $status = 0;
        $created_at = date("d-m-Y");

        $this->model->addItemToHistory($id_user, $id_item, $amount, $created_at, $status);
    }

    //lấy tổng số vé quay
    public function getTicketLucky()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $result = $this->model->getTicketLucky($id_user);

        echo $result;
    }

    //xóa vé quay
    public function removeTicket()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $id_inventory = isset($_POST["id_inventory"]) ? $_POST["id_inventory"] : null;

        $this->model->removeTicket($id_user, $id_inventory);
    }

    //thêm lịch sử nhận mốc
    public function insertLuckyPoint()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

        $check = json_decode($this->model->getHistoryLuckyPoint($id_user, $id_item), false);

        if (empty($check)) {
            $this->model->insertLuckyPoint($id_user, $id_item);
        } else {
            echo $check;
        }
    }

    //lấy lịch sử nhận mốc quay
    public function getHistoryLuckyPoint()
    {
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

        $result = $this->model->getHistoryLuckyPoint($id_user, $id_item);

        echo $result;
    }
}
