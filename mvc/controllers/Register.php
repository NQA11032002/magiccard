<?php
class Register extends Controller
{
    private $model;
    public function __construct()
    {
        $this->model = $this->model("registerModel");
    }

    //Đăng ký tài khoản
    public function postRegister()
    {
        $user_name = isset($_POST["user_name"]) ? $_POST["user_name"] : null;
        $password = isset($_POST["password"]) ? $_POST["password"] : null;
        $name = isset($_POST["name"]) ? $_POST["name"] : null;
        $coin = isset($_POST["coin"]) ? $_POST["coin"] : null;
        $id_sever = 1;

        $this->model->postRegister($name, $user_name, $password, $coin, $id_sever);
    }

    //kiểm tra tên
    public function checkName()
    {
        $name = isset($_POST["name"]) ? $_POST["name"] : null;
        $result = $this->model->checkName($name);

        echo $result;
    }

    //kiểm tra tài khoản
    public function checkAccount()
    {
        $user_name = isset($_POST["user_name"]) ? $_POST["user_name"] : null;
        $result = $this->model->checkAccount($user_name);

        echo $result;
    }
}
