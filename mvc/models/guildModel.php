<?php
class guildModel extends Database
{
    //get list member of guild
    public function getListGuild($id_guild)
    {
        $query = "SELECT u.user_name, sum(items.power) as power, g.role 
            from guild as g 
            join users as u on g.id_user = u.id 
            left JOIN items_equiment_weared as w on w.id_user = g.id_user 
            left join items on w.id_item = items.id 
            WHERE g.id_guild = '" . $id_guild . "' 
            GROUP BY(g.id_user)";

        $result = mysqli_query($this->con, $query);
        $arr = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        return json_encode($arr);
    }

    //get guild with account login 
    public function getGuild($id_user)
    {
        $query = "SELECT id FROM guilds WHERE id_user = '" . $id_user . "'";
        $result = mysqli_query($this->con, $query);
        $id = mysqli_fetch_array($result);

        return $id;
    }
}