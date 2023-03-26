$(document).ready(function () {
    getInventory_Meridian();
    getWearMeridian();
    setEventTakOffMeridian();

    // get list inventory meridian
    function getInventory_Meridian() {
        $.post("./Meridian/getInventory_Meridian", function (response) {
            let obj = JSON.parse(response);
            let html = ``;
            obj.forEach(element => {
                let category = element.type.slice(-1);

                html += `<div class="inventory_meridians--item position-relative position-relative" data-id="` + element.id + `">
                            <img class="position-absolute meridian_item--image" src="` + element.img + `" alt="">
                            <p class="category_meridian--inventory position-absolute ">[Bậc: ` + category + `]</p>
                            <p class="level_meridian--inventory position-absolute ">[LV: ` + element.level_meridian + `]</p>
                            <div class="inventory_meridians--item-function">
                                <button class='wear--meridian' data-id="` + element.id + `" data-id_item="` + element.id_item + `">Đeo</button>
                                <button class='create--meridian' data-image="`+ element.img + `" data-type="` + element.type + `" data-level_meridian="` + element.level_meridian + `" data-id="` + element.id + `" data-id_item="` + element.id_item + `">Ghép</button>
                            </div>
                        </div>`;
            });

            $('.inventory_meridians__container').html(html);

            setEventMeridian();

            $('.wear--meridian').click(function () {
                let id = $(this).attr("data-id");
                let id_item = $(this).attr("data-id_item");

                $.post("./Meridian/updateStatusMeridianToWear", {
                    id: id,
                    id_item: id_item
                }, function (response) {
                    getInventory_Meridian();
                    getWearMeridian();
                    $(".header-power").html("Lực chiến: " + response);
                })
            })

            $('.create--meridian').click(function () {
                let id_item = $(this).attr("data-id_item");
                let type = $(this).attr("data-type");
                let level_meridian = $(this).attr("data-level_meridian");
                let image = $(this).attr("data-image");

                let create_1 = $('.meridian-image-1').attr("src");

                if (level_meridian < 16) {
                    if (create_1 == '') {
                        $('.meridian-image-1').attr("src", image);
                        $('.meridian-image-1').attr("data-id", id_item);
                        $('.meridian-image-1').attr("data-type", type);
                        $('.meridian-image-1').attr("data-level_meridian", level_meridian);
                    } else {
                        if ($('.meridian-image-1').attr("data-type") === type && $('.meridian-image-1').attr("data-level_meridian") === level_meridian) {
                            $('.meridian-image-2').attr("data-type", type);
                            $('.meridian-image-2').attr("src", image);
                            $('.meridian-image-2').attr("data-id", id_item);
                            $('.meridian-image-2').attr("data-level_meridian", level_meridian);

                            $.post("./Meridian/loadMeridianByLevel", { type: type, level_meridian: level_meridian }, function (response) {
                                let obj = JSON.parse(response);

                                obj.forEach(e => {
                                    $('.meridian-result--image').attr("data-id", e.id);
                                    $('.meridian-result--image').attr("src", image);
                                })
                            })
                        }
                    }
                }
            })
        })
    }

    //click create item meridian 
    $('.create-meridian').click(function () {
        let level = $('.meridian-result--image').attr("data-level_meridian");
        let id_item = $('.meridian-result--image').attr("data-id");

        $.post("./Meridian/createMeridianIntoInventory", { level: level, id_item: id_item }, function (response) {
            getInventory_Meridian();
            $('.status__create--meridian').html("Ghép đồ thành công");
        })
    })

    //takeoff meridian create
    $('.takeoff--meridian').click(function () {
        $(this).attr("src", '');
        $(this).attr("data-id", null);
        $(this).attr("data-type", null);
        $(this).attr("data-level_meridian", null);
        $('.meridian-result--image').attr("data-id", null);
        $('.meridian-result--image').attr("src", '');
    })

    // set event click take off item meridian
    function setEventTakOffMeridian() {
        let arrMeridian = document.querySelectorAll('.meridian_item');

        arrMeridian.forEach(p => {
            p.addEventListener("click", function () {

                let id = p.getAttribute("data-id");
                let id_item = p.getAttribute("data-id_item");
                let child = p.lastElementChild;

                child.classList.toggle("active_take-of");
                child.lastElementChild.setAttribute("data-id", id);
                child.lastElementChild.setAttribute("data-id_item", id_item);
            })
        })
    }

    $('.take-of--meridian-child').click(function () {
        let id = $(this).attr("data-id");
        let id_item = $(this).attr("data-id_item");
        $.post("./Meridian/takeOfMeridian", {
            id: id,
            id_item: id_item
        }, function (response) {
            getInventory_Meridian();
            getWearMeridian();
            $(".header-power").html("Lực chiến: " + response);
        })
    })

    // set event click for item meridian in inventory
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

    // get equipment meridian was wear
    function getWearMeridian() {
        $.post("./Meridian/getWearMeridian", function (response) {
            let obj = JSON.parse(response);

            $('.meridian_left-1').attr("src", "");
            $('.meridian_left-2').attr("src", "");
            $('.meridian_left-3').attr("src", "");
            $('.meridian_right-1').attr("src", "");
            $('.meridian_right-2').attr("src", "");
            $('.meridian_right-3').attr("src", "");

            $('.category_meridian-wear--1').html('')
            $('.level_meridian-wear--1').html('');
            $('.category_meridian-wear--2').html('')
            $('.level_meridian-wear--2').html('');
            $('.category_meridian-wear--3').html('')
            $('.level_meridian-wear--3').html('');
            $('.category_meridian-wear--4').html('')
            $('.level_meridian-wear--4').html('');
            $('.category_meridian-wear--5').html('')
            $('.level_meridian-wear--5').html('');
            $('.category_meridian-wear--6').html('')
            $('.level_meridian-wear--6').html('');
            obj.forEach(element => {
                if (element.type == "mạch 1") {
                    $('.meridian_left-1').attr("src", element.img);
                    $('.meridian_left-1__container').attr("data-id", element.id);
                    $('.meridian_left-1__container').attr("data-id_item", element.id_item);
                    $('.category_meridian-wear--1').html('[Bậc: ' + element.type.slice(-1) + ']')
                    $('.level_meridian-wear--1').html('[LV: ' + element.level_meridian + ']');
                }

                if (element.type == "mạch 2") {
                    $('.meridian_left-2').attr("src", element.img);
                    $('.meridian_left-2__container').attr("data-id", element.id);
                    $('.meridian_left-2__container').attr("data-id_item", element.id_item);
                    $('.category_meridian-wear--2').html('[Bậc: ' + element.type.slice(-1) + ']')
                    $('.level_meridian-wear--2').html('[LV: ' + element.level_meridian + ']');
                }

                if (element.type == "mạch 3") {
                    $('.meridian_left-3').attr("src", element.img);
                    $('.meridian_left-3__container').attr("data-id", element.id);
                    $('.meridian_left-3__container').attr("data-id_item", element.id_item);
                    $('.category_meridian-wear--3').html('[Bậc: ' + element.type.slice(-1) + ']')
                    $('.level_meridian-wear--3').html('[LV: ' + element.level_meridian + ']');
                }
                if (element.type == "mạch 4") {
                    $('.meridian_right-1').attr("src", element.img);
                    $('.meridian_right-1__container').attr("data-id", element.id);
                    $('.meridian_right-1__container').attr("data-id_item", element.id_item);
                    $('.category_meridian-wear--4').html('[Bậc: ' + element.type.slice(-1) + ']')
                    $('.level_meridian-wear--4').html('[LV: ' + element.level_meridian + ']');
                }
                if (element.type == "mạch 5") {
                    $('.meridian_right-2').attr("src", element.img);
                    $('.meridian_right-2__container').attr("data-id", element.id);
                    $('.meridian_right-2__container').attr("data-id_item", element.id_item);
                    $('.category_meridian-wear--5').html('[Bậc: ' + element.type.slice(-1) + ']')
                    $('.level_meridian-wear--5').html('[LV: ' + element.level_meridian + ']');
                }

                if (element.type == "mạch 6") {
                    $('.meridian_right-3').attr("src", element.img);
                    $('.meridian_right-3__container').attr("data-id", element.id);
                    $('.meridian_right-3__container').attr("data-id_item", element.id_item);
                    $('.category_meridian-wear--6').html('[Bậc: ' + element.type.slice(-1) + ']')
                    $('.level_meridian-wear--6').html('[LV: ' + element.level_meridian + ']');
                }
            })
        })
    }
})
