<?php
class items extends Database
{
    public function loadItem()
    {
        $query = "SELECT * FROM items WHERE status = 1";
        $result = mysqli_query($this->con, $query);

        $arr = array();

        while ($rows = mysqli_fetch_assoc($result)) {
            $arr[] = $rows;
        }

        return json_encode($arr);
    }
}