<?php
class App
{
    //http://localhost:81/mohinh/Home/SayHi/1/2/3
    protected $controller = "TrangChu";
    protected $action = "show";
    protected $params = [];

    public function __construct()
    {
        //Array ( [0] => Home [1] => SayHi [2] => 1 [3] => 2 [4] => 3 )
        $array = $this->UrlProcess();

        //Xử lí controller
        if (!empty($array)) {
            if (file_exists("./mvc/controllers/" . $array[0] . ".php")) {
                $this->controller = $array[0];
                unset($array[0]);
            }
        }

        require_once "./mvc/controllers/" . $this->controller . ".php";
        $this->controller = new $this->controller;

        //Xử lí Action
        if (isset($array[1])) {
            if (method_exists($this->controller, $array[1])) { // Hàm kiểm tra tên hàm array[1] có chứa trong lớp controller đang chạy hay không
                $this->action = $array[1];
            }
            unset($array[1]);
        }

        //Xử lí Params
        $this->params = $array ? array_values($array) : [];

        call_user_func_array([$this->controller, $this->action], $this->params);
    }

    public function UrlProcess()
    {
        if (isset($_GET["url"])) {
            // Cắt chuỗi loại bỏ dấu cách, kí tự lạ và cắt theo dấu "/"
            return explode("/", filter_var(trim($_GET["url"], "/")));
        }
    }
}