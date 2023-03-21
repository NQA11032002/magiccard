<?php
class Guild extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("guildModel");
    }

    public function index()
    {
    }

    //get list member of guild
    public function getListGuild()
    {
        if (isset($_SESSION["logined"])) {
            $id_user = $_SESSION["logined"][0]->id;
            $id_guild = $this->model->getGuild($id_user)["id"];
            $result = $this->model->getListGuild($id_guild);

            var_dump($result);
        }
    }
}