$(document).ready(function () {
    getInventory_Meridian();
    getWearMeridian();

    //get list inventory meridian
    function getInventory_Meridian() {
        $.post("./Meridian/getInventory_Meridian", function (response) {
            let obj = JSON.parse(response);

            let html = ``;
            obj.forEach(element => {
                html += `<div class="inventory_meridians--item position-relative position-relative" data-id="` + element.id + `" data-id_item="` + element.id_item + `">
                            <img class="position-absolute meridian_item--image" src="`+ element.img + `" alt="">

                            <div class="inventory_meridians--item-function">
                                <button class='wear--meridian' data-id="`+ element.id + `">Đeo</button>
                            </div>
                        </div>`
            });

            $('.inventory_meridians__container').html(html);

            setEventMeridian();

            $('.wear--meridian').click(function () {
                let id = $(this).attr("data-id");
                let id_item = $(this).attr("data-id_item");

                $.post("./Meridian/updateStatusMeridianToWear", { id: id, id_item: id_item }, function (response) {
                    console.log(response);
                    getInventory_Meridian();
                    getWearMeridian();
                })
            })
        })
    }

    //set event click for item meridian in inventory
    function setEventMeridian() {
        let arrMeridian = document.querySelectorAll('.inventory_meridians--item');

        arrMeridian.forEach(e => {
            e.addEventListener("click", function () {
                arrMeridian.forEach(p => {
                    p.classList.remove("active_meridians");
                })

                e.classList.toggle("active_meridians");
            })
        })
    }

    //get equipment meridian was wear  
    function getWearMeridian() {
        $.post("./Meridian/getWearMeridian", function (response) {
            let obj = JSON.parse(response);

            let html = ``;

            obj.forEach(element => {
                if (element.type == "mạch 1") {
                    $('.meridian_left-1').attr("src", element.img);
                }

                if (element.type == "mạch 2") {
                    $('.meridian_left-2').attr("src", element.img);
                }

                if (element.type == "mạch 3") {
                    $('.meridian_left-3').attr("src", element.img);
                }

                if (element.type == "mạch 4") {
                    $('.meridian_right-1').attr("src", element.img);
                }

                if (element.type == "mạch 5") {
                    $('.meridian_right-2').attr("src", element.img);
                }

                if (element.type == "mạch 6") {
                    $('.meridian_right-3').attr("src", element.img);
                }
            })
        })
    }
})