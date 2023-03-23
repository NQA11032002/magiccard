<?php
class loginModel extends Database
{
    public function login($user, $password)
    {
        $query = "SELECT sum(items.power) as power,users.id, users.user_name, users.email, users.name, users.coin, users.verify_token, users.image, users.image_inventory
                  FROM users
                  LEFT JOIN items_equiment_weared as w on w.id_user = users.id
                  LEFT JOIN items on w.id_item = items.id
                  WHERE users.user_name='" . $user . "' and users.password='" . $password . "'
                  GROUP BY users.id";

        $result = mysqli_query($this->con, $query);
        $count = mysqli_num_rows($result);
        $arr = array();

        if ($count > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $arr[] = $row;
            }
            return json_encode($arr);
        }

        return 0;
    }

    //kiểm tra password
    public function checkPassword($user)
    {
        $query = "SELECT password FROM users WHERE user_name = '" . $user . "'";
        $result = mysqli_query($this->con, $query);
        $count = mysqli_num_rows($result);
        if ($count > 0) {
            return mysqli_fetch_array($result);
        }

        return 0;
    }
}