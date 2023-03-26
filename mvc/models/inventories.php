<?php
class inventories extends Database
{
    public function loadInventories($id_user)
    {
        $query = "SELECT sum(inven.amount) as amount, items.type_equipment, inven.status , inven.id, inven.id_item,
                        items.name, items.type, items.attribute_1, items.attribute_2, items.attribute_3, items.img
                  FROM `inventories` as inven
                  join items on inven.id_item = items.id
                  WHERE inven.id_user = '" . $id_user . "' and inven.status = 0 and (items.type_equipment != 'mach' or items.type_equipment IS NULL)
                  GROUP BY inven.id_item";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    //thêm item vào kho
    public function insertInventories($id_user, $id_item, $amount)
    {
        $query = "INSERT INTO `inventories`(`id_user`,`id_item`,`amount`, `status`)
        VALUES ('" . $id_user . "','" . $id_item . "','" . $amount . "', 0)";

        mysqli_query($this->con, $query);
    }

    //tổng số lượng item
    public function totalItem($id_user)
    {
        $query = "SELECT sum(inven.amount) as amount
                  FROM `inventories` as inven
                  WHERE id_user = '" . $id_user . "'";

        $result = mysqli_query($this->con, $query);

        return mysqli_fetch_array($result)[0];
    }

    //update status equipment
    public function updateStatusEquipment($id_user, $id_item, $id_inventory)
    {
        //lấy thể loại đồ mang
        $item = "SELECT * FROM `items` WHERE id = '" . $id_item . "'";
        $result_item = mysqli_query($this->con, $item);

        while ($row_item = mysqli_fetch_row($result_item)) {
            $type_equipment = $row_item;
        }

        //lấy tất cả danh sách đồ đã mang theo thể loại đồ mang
        $type_wear = "SELECT * FROM `items_equiment_weared` as w join items as i on w.id_item = i.id
                        WHERE id_user = '" . $id_user . "' and i.type_equipment like '" . $type_equipment[3] . "'";

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

        // //update trạng thái ẩn trang bị mặc
        // $query = "UPDATE `inventories` SET `status`=1 WHERE id_user = '" . $id_user . "' and id = '" . $id_inventory . "'";
        // mysqli_query($this->con, $query);

        // //thêm vào bảng đã mặc
        // $insert = "INSERT INTO `items_equiment_weared`(`id_user`, `id_item`) VALUES ('" . $id_user . "','" . $id_item . "')";
        // mysqli_query($this->con, $insert);
    }

    //lấy danh sách trang bị đã mặc
    public function getWearEquipment($id_user)
    {
        $query = "SELECT w.id,w.id_item, items.name, items.type, items.attribute_1, items.attribute_2, items.attribute_3, items.img, items.type_equipment
                  FROM `items_equiment_weared` as w join items on w.id_item = items.id
                  WHERE id_user = '" . $id_user . "'
                  GROUP BY w.id_item";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    //gỡ trang bị
    public function removeEquipment($id_user, $id, $id_item)
    {
        $query = "DELETE FROM `items_equiment_weared` WHERE id = '" . $id . "'";
        mysqli_query($this->con, $query);

        $update = "UPDATE `inventories` SET `status`=0
                   WHERE id_user = '" . $id_user . "' and id_item = '" . $id_item . "'";

        mysqli_query($this->con, $update);
    }

    //update coin cho tài khoản
    public function updateCoin($id_user, $coin)
    {
        $query = "UPDATE `users` SET `coin`='" . $coin . "' WHERE id = '" . $id_user . "'";
        mysqli_query($this->con, $query);
    }

    //get list items in chest
    public function getItemsInChest($id_chest)
    {
        $query = "SELECT c.amount, i.id, i.name, i.type, i.attribute_1, i.attribute_2, i.attribute_3, i.img, i.type_equipment FROM `items_chest` as c join items as i on c.id_item = i.id WHERE c.id_chest = '" . $id_chest . "'";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    //remove item in inventory
    public function removeItemInventory($id_user, $id_inventory)
    {
        $query = "DELETE FROM `inventories` WHERE id_user = '" . $id_user . "' and id = '" . $id_inventory . "'";
        mysqli_query($this->con, $query);
    }
}
