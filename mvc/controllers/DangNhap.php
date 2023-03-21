<?php
class DangNhap extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("loginModel");

        if (isset($_SESSION["logined"])) {
            $checkPass = $this->model->checkPassword($_SESSION["logined"][0]->user_name);

            $result = $this->model->login($_SESSION["logined"][0]->user_name, $checkPass[0]);
            if ($result != 0) {
                $_SESSION["logined"] = json_decode($result, false);
            }
        }
    }

    //đăng nhập
    public function login()
    {
        $user_name = isset($_POST["user_name"]) ? $_POST["user_name"] : null;
        $password = isset($_POST["password"]) ? $_POST["password"] : null;

        $checkPass = $this->model->checkPassword($user_name);

        if ($password == $checkPass[0]) {
            $result = $this->model->login($user_name, $checkPass[0]);
            if ($result != 0) {
                $_SESSION["logined"] = json_decode($result, false);
                echo 1;
                return;
            }
        }

        echo 0;
    }

    //đăng xuất
    public function logout()
    {
        if (isset($_SESSION["logined"])) {
            unset($_SESSION['logined']);
        }
    }
}
