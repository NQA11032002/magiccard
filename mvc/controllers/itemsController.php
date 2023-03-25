<?php
class itemsController extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("items");
    }

    public function show()
    {
        $result = $this->model->loadItem();

        echo $result;
    }

    //cập nhật trạng thái trang bị khi đeo
    public function updateStatusEquipment()
    {

        $this->model = $this->model("inventories");

        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $id_item = isset($_POST["id_equipment"]) ? $_POST["id_equipment"] : null;
        $id_inventory = isset($_POST["id_inventory"]) ? $_POST["id_inventory"] : null;

        $result = $this->model->updateStatusEquipment($id_user, $id_item, $id_inventory);

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

    //danh sách trang bị đang mặc
    public function getWearEquipment()
    {
        $this->model = $this->model("inventories");
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;

        $result = $this->model->getWearEquipment($id_user);

        echo $result;
    }

    //gỡ trang bị
    public function removeEquipment()
    {
        $this->model = $this->model("inventories");
        $id_user = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;
        $id = isset($_POST["id"]) ? $_POST["id"] : null;
        $id_item = isset($_POST["id_item"]) ? $_POST["id_item"] : null;

        $this->model->removeEquipment($id_user, $id, $id_item);

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
}
