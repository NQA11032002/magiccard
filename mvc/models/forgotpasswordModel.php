<?php
class forgotpasswordModel extends Database
{
    public function checkEmail($email)
    {
        $query = "SELECT * from users WHERE email = '".$email."'";

        $result = mysqli_query($this->con,$query);

        $temp = mysqli_num_rows($result) > 0 ? true : false;

        return $temp;
    }

    function recovery($email,$newPassWord)
        {
            $query = "UPDATE users SET password = '".$newPassWord."' WHERE email = '".$email."'";
            mysqli_query($this->con,$query);
        }
}