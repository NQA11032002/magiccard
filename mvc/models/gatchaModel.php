<?php
class gatchaModel extends Database
{
    public function getItemGatcha()
    {
        $query = "SELECT `id`, `name`, `type`, `type_equipment`, `attribute_1`, `attribute_2`, `attribute_3`, `amount`, `img`, `power`, `status`, `point_gatcha`
        FROM `items` WHERE status = 3 and point_gatcha = 0";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        return json_encode($arr);
    }

    public function getItemPointGatcha()
    {
        $query = "SELECT `id`, `name`, `type`, `type_equipment`, `attribute_1`, `attribute_2`, `attribute_3`, `amount`, `img`, `power`, `status`, `point_gatcha`
        FROM `items` WHERE status = 3 and point_gatcha = 1";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        return json_encode($arr);
    }

    public function getHistoryGatcha($id_user)
    {
        $query = "SELECT h.id, h.id_item, h.amount, h.created_at ,h.status, users.name as name_user, items.name as name_item, items.type
                  FROM `history_rotation_luck` as h
                  join users on h.id_user = users.id
                  join items on h.id_item = items.id
                  where h.id_user = '" . $id_user . "'
                  order by(h.id) desc";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        return json_encode($arr);
    }

    public function addItemToHistory($id_user, $id_item, $amount, $created_at, $status)
    {
        $query = "INSERT INTO `history_rotation_luck`( `id_user`, `id_item`, `amount`,`created_at`, `status`)
        VALUES ('" . $id_user . "','" . $id_item . "','" . $amount . "', '" . $created_at . "' ,'" . $status . "')";

        mysqli_query($this->con, $query);

    }

    public function getTicketLucky($id_user)
    {

        $query = "SELECT sum(inven.amount) as amount, inven.id
                    FROM `inventories` as inven
                    join items on inven.id_item = items.id
                    WHERE inven.id_user = '" . $id_user . "' and inven.status = 0 and items.name like '%Vé Quay%'
                    GROUP BY inven.id_item";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        return json_encode($arr);
    }

    public function removeTicket($id_user, $id_inventory)
    {
        $query = "DELETE FROM `inventories` WHERE id_user = '" . $id_user . "' and id = '" . $id_inventory . "'";
        mysqli_query($this->con, $query);
    }

    public function insertLuckyPoint($id_user, $id_item)
    {
        $query = "INSERT INTO `history_point_lucky`(`id`, `id_user`, `id_item`)
                  VALUES ('[value-1]','" . $id_user . "','" . $id_item . "')";

        mysqli_query($this->con, $query);
    }

    public function getHistoryLuckyPoint($id_user, $id_item)
    {
        $query = "SELECT * FROM `history_point_lucky` WHERE id_user = '" . $id_user . "' and id_item = '" . $id_item . "'";

        $result = mysqli_query($this->con, $query);
        $arr = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        return json_encode($arr);
    }
}
