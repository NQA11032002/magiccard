<?php
class shopModel extends Database
{
    //lấy danh sách item shop
    public function loadShop()
    {
        $query = "SELECT i.id, i.name, i.type, i.type_equipment, i.attribute_1, i.attribute_2, i.attribute_3, i.img, i.power, s.price FROM `shop` as s join items as i on s.id_item = i.id WHERE i.status = 2";

        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }

    //mua item trong shop
    public function buyItemInShop($id_user, $id_item, $amount, $status, $coin)
    {
        $query = "INSERT INTO `inventories`(`id_user`, `id_item`, `amount`, `status`)
        VALUES ('" . $id_user . "','" . $id_item . "','" . $amount . "','" . $status . "')";

        mysqli_query($this->con, $query);

        //cập nhật lại coin cho tài khoản
        $update = "UPDATE `users` SET `coin`='" . $coin . "' WHERE id = '" . $id_user . "'";

        mysqli_query($this->con, $update);
    }
}
