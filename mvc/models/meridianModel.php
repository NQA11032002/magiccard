<?php
class meridianModel extends Database
{
    public function getInventory_Meridian($id_user)
    {
        $query = "SELECT i.id, items.img, i.id_item, i.status, items.name FROM `inventories` as i left join items on i.id_item = items.id WHERE id_user = '" . $id_user . "' and items.type_equipment like 'mach' and i.status = 0";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    public function getWearMeridian($id_user)
    {
        $query = "SELECT i.id, items.img, i.id_item, items.name, items.type FROM `items_equiment_weared` as i left join items on i.id_item = items.id WHERE id_user = '" . $id_user . "' and items.type_equipment like 'mach'";

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
        $check = "SELECT * FROM `items_equiment_weared` WHERE id_user = '" . $id_user . "' and id_item = '" . $id_item . "'";

        $result_check = mysqli_query($this->con, $check);
        $count = mysqli_num_rows($result_check);

        if ($count <= 0) {
            $query = "UPDATE `inventories` SET `status`=1 WHERE id_user = '" . $id_user . "' and id = '" . $id_inventory . "'";
            mysqli_query($this->con, $query);

            $insert = "INSERT INTO `items_equiment_weared` (`id_user`, `id_item`) VALUES ('" . $id_user . "','" . $id_item . "')";
            mysqli_query($this->con, $insert);
        }
    }

    public function takeOfMeridian($id_user, $id, $id_item)
    {
        $query = "DELETE FROM `items_equiment_weared` WHERE id = '" . $id . "' and id_user = '" . $id_user . "'";
        mysqli_query($this->con, $query);

        $update = "UPDATE `inventories` SET `status`=0 WHERE id_user = '" . $id_user . "' and id_item = '" . $id_item . "'";
        mysqli_query($this->con, $update);
    }
}
