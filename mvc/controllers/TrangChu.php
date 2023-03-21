<?php
class TrangChu extends Controller
{
    private $model;

    public function __construct()
    {
        $this->model = $this->model("inventories");
    }

    public function show()
    {
        $id_usser = isset($_SESSION["logined"]) ? $_SESSION["logined"][0]->id : null;

        if ($id_usser != null) {
            $total = $this->model->totalItem($id_usser);
        } else {
            $total = 0;
        }

        $this->view('TrangChu', [
            'total_items' => $total,
        ]);
    }

    public function loadRankingPersonally()
    {
        $pagePersonally = isset($_POST["pagePersonally"]) ? $_POST["pagePersonally"] : null;
        $totalPagePersonally = isset($_POST["totalPagePersonally"]) ? $_POST["totalPagePersonally"] : null;

        $this->model = $this->model('rankingsModel');

        $result = $this->model->loadRankingPersonally($pagePersonally, $totalPagePersonally);

        echo $result;
    }

    public function loadRankingLucky()
    {
        $pagePersonally = isset($_POST["pagePersonally"]) ? $_POST["pagePersonally"] : null;
        $totalPagePersonally = isset($_POST["totalPagePersonally"]) ? $_POST["totalPagePersonally"] : null;

        $this->model = $this->model('rankingsModel');

        $result = $this->model->loadRankingLucky($pagePersonally, $totalPagePersonally);

        echo $result;
    }
}
