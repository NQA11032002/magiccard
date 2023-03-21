<?php
class registerModel extends Database
{
    public function postRegister($name, $user, $password, $coin, $id_sever)
    {
        $query = "INSERT INTO `users`(`user_name`, `password`, `name`, `coin`, `image`, `level`, `id_sever`)
                  VALUES ('" . $user . "','" . $password . "' ,'" . $name . "', '" . $coin . "', './public/images/avatar/1.jpg', 1 ,'" . $id_sever . "')";

        mysqli_query($this->con, $query);
    }

    //kiểm tra tên
    public function checkName($name)
    {
        $query = "SELECT * FROM `users` WHERE name LIKE '" . $name . "'";

        $result = mysqli_query($this->con, $query);
        $count = mysqli_num_rows($result);

        return $count;
    }

    //kiểm tra  tài khoản
    public function checkAccount($user_name)
    {
        $query = "SELECT * FROM `users` WHERE user_name LIKE '" . $user_name . "'";

        $result = mysqli_query($this->con, $query);
        $count = mysqli_num_rows($result);

        return $count;
    }
}
