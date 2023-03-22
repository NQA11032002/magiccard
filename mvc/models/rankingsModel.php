<?php
class rankingsModel extends Database
{
    public function loadRankingPersonally($page = null, $totalPage = null)
    {
        $query = "SELECT users.id,users.name,Sum(items.power) as power, users.level, sever.name as sever, image
        FROM `users`
        left JOIN items_equiment_weared as wear on wear.id_user = users.id
        left join items on wear.id_item = items.id
        left join sever on users.id_sever = sever.id
        group by(users.id)
        order by Sum(items.power) desc";

        if ($page != null && $totalPage != null) {
            $curentPage = $page * $totalPage;
            $query .= " limit  $curentPage , $totalPage ";
        }

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    public function loadRankingLucky($page = null, $totalPage = null)
    {
        $query = "SELECT users.id,users.name,COUNT(h.id_user) as total, users.level, sever.name as sever
        FROM history_rotation_luck as h
        LEFT JOIN users on h.id_user = users.id
        JOIN sever on users.id_sever = sever.id
        GROUP BY (h.id_user)
        order by COUNT(h.id_user) desc";

        if ($page != null && $totalPage != null) {
            $curentPage = $page * $totalPage;
            $query .= " limit  $curentPage , $totalPage ";
        }

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }
}
