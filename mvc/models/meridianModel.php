<?php
class meridianModel extends Database
{
    public function getInventory_Meridian($id_user)
    {
        $query = "SELECT i.id, items.img, i.id_item, i.status, items.name, items.level_meridian, items.type  FROM `inventories` as i left join items on i.id_item = items.id WHERE id_user = '" . $id_user . "' and items.type_equipment like 'mach' and i.status = 0";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    public function getWearMeridian($id_user)
    {
        $query = "SELECT i.id, items.img, i.id_item, items.name, items.type, items.level_meridian FROM `items_equiment_weared` as i left join items on i.id_item = items.id WHERE id_user = '" . $id_user . "' and items.type_equipment like 'mach'";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    //update status wear meridian
    public function updateStatusMeridianToWear($id_user, $id_inventory, $id_item)
    {
        //lấy thể loại đồ mang
        $item = "SELECT * FROM `items` WHERE id = '" . $id_item . "'";
        $result_item = mysqli_query($this->con, $item);

        while ($row_item = mysqli_fetch_row($result_item)) {
            $type_equipment = $row_item;
        }

        //lấy tất cả danh sách đồ đã mang theo thể loại đồ mang
        $type_wear = "SELECT * FROM `items_equiment_weared` as w join items as i on w.id_item = i.id
                        WHERE id_user = '" . $id_user . "' and i.type like '" . $type_equipment[2] . "'";

        $result_wear = mysqli_query($this->con, $type_wear);
        $count_wear = mysqli_num_rows($result_wear);

        //xóa tất cả đồ đã mang theo thể loại
        //cập nhật lại trạng thái trong kho đồ
        if ($count_wear > 0) {
            while ($row = mysqli_fetch_array($result_wear)) {
                $delete_wear = "DELETE FROM `items_equiment_weared` WHERE id_user = '" . $id_user . "' and id_item = '" . $row["id_item"] . "'";
                mysqli_query($this->con, $delete_wear);

                $query = "UPDATE `inventories` SET `status`=0 WHERE id_user = '" . $id_user . "' and id_item = '" . $row["id_item"] . "'";
                mysqli_query($this->con, $query);
            }
        }

        $query = "UPDATE `inventories` SET `status`=1 WHERE id_user = '" . $id_user . "' and id = '" . $id_inventory . "'";
        mysqli_query($this->con, $query);

        $insert = "INSERT INTO `items_equiment_weared` (`id_user`, `id_item`) VALUES ('" . $id_user . "','" . $id_item . "')";
        mysqli_query($this->con, $insert);
        // $check = "SELECT * FROM `items_equiment_weared` WHERE id_user = '" . $id_user . "' and id_item = '" . $id_item . "'";

        // $result_check = mysqli_query($this->con, $check);
        // $count = mysqli_num_rows($result_check);

        // if ($count <= 0) {
        //     $query = "UPDATE `inventories` SET `status`=1 WHERE id_user = '" . $id_user . "' and id = '" . $id_inventory . "'";
        //     mysqli_query($this->con, $query);

        //     $insert = "INSERT INTO `items_equiment_weared` (`id_user`, `id_item`) VALUES ('" . $id_user . "','" . $id_item . "')";
        //     mysqli_query($this->con, $insert);
        // }
    }

    public function takeOfMeridian($id_user, $id, $id_item)
    {
        $query = "DELETE FROM `items_equiment_weared` WHERE id = '" . $id . "' and id_user = '" . $id_user . "'";
        mysqli_query($this->con, $query);

        $update = "UPDATE `inventories` SET `status`=0 WHERE id_user = '" . $id_user . "' and id_item = '" . $id_item . "'";
        mysqli_query($this->con, $update);
    }

    //load meridian by level create
    public function loadMeridianByLevel($type, $level_meridian)
    {
        $query = "SELECT * FROM `items` WHERE type = '" . $type . "' and level_meridian = '" . $level_meridian . "'";
        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    //create item meridian success into inventories
    public function createMeridianIntoInventory($id_user, $id_item)
    {
        $query = "INSERT INTO `inventories`(`id_user`, `id_item`, `amount`, `status`)
                  VALUES ('" . $id_user . "','" . $id_item . "',1,0)";

        mysqli_query($this->con, $query);
    }
}
