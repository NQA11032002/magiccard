$(document).ready(function () {
    getGuild();

    function getGuild() {
        $.get("./Guild/getListGuild", function (response) {
            let html = ``;
            let obj = JSON.parse(response);
            let i = 1;
            obj.forEach(element => {
                let power = 0;

                if (element.power != null) {
                    power = element.power;
                }
                html += `<tr>
                            <th scope="row">`+ i++ + `</th>
                            <td class='d-flex align-items-center'>
    							<img class='ranking_img' src="`+ element.image + `"></img>
    							<p>` + element.user_name + `</p>
						    </td> 
                            <td>`+ power + `</td>
                            <td>`+ element.role + `</td>
                        </tr>`;
            });

            $('.guild_item').html(html);
        })
    }
})