$(document).ready(function () {
    let arrayItemLuck = [];
    let timeOutLucky = null;
    let itemLuckFinal = [];
    let totalTicket = 0;
    let timeOutClick = null;

    loadItemGatcha();
    loadHistoryGatcha();
    loadTicketLucky();

    // Vong quay gatcha
    function loadItemGatcha() {
        $.post('./Gatcha/loadItemGatcha', function (data) {
            var count = 1;
            var obj = JSON.parse(data);
            var itemGatchaHTML = '';
            let quantity_gatcha = ``;
            let quantity = 400;

            obj.forEach(element => {
                itemGatchaHTML +=
                    "<span class='p" + count + "'  style='background:url(" + element.img + ")' data-id='" + element.id + "' data-amount ='" + element.amount + "' data-type ='" + element.type + "''>" + "</span>";
                count++;
                arrayItemLuck.push(element);

                if (element.point_gatcha == 1) {
                    quantity_gatcha += `<div class="lottery__quantity--item" data-content=` + quantity + ` data-id=` + element.id + ` data-amount=` + element.amount + `>
                                            <img class="lottery__quantity--image" src="`+ element.img + `" alt="">
                                        </div>`
                    quantity -= 100;
                }

            })
            $('.box-gatcha').html(itemGatchaHTML);
            $('.lottery__quantity--items').html(quantity_gatcha);
        });
    }

    $('.btn_lottery').click(function () {
        let id_inventory = $(this).attr("data-id");
        var startLocal = 0;
        var checkStop = 0;
        var speed = 100;
        var locationItem = Math.floor(Math.random() * arrayItemLuck.length);
        var locationStop = arrayItemLuck.length * 2 + locationItem - 1;
        let rate = (Math.floor(Math.random() * 100) + 1);

        if (totalTicket > 0) {
            wheel(speed, locationItem, startLocal, checkStop, locationStop, rate);

            //xóa vé quay
            $.post('./Gatcha/removeTicket', { id_inventory: id_inventory }, function (data) {
                loadTicketLucky();
            })

            $('.btn_lottery').attr('disabled', 'disabled');

            timeOutClick = setTimeout(function () {
                $('.btn_lottery').attr('disabled', false);
                clearTimeout(timeOutClick);
            }, 6000);
        }
        else {
        }
    })


    function wheel(speed, locationItem, startLocal, checkStop, locationStop, rate) {
        itemLuckFinal.shift()

        timeOutLucky = setTimeout(function () {
            $('.p' + startLocal + '').addClass('active').siblings().removeClass('active');

            // console.log(a);
            if (startLocal == arrayItemLuck.length) {
                startLocal = 0;
            }

            let item = arrayItemLuck[startLocal];

            if (checkStop < locationStop) {
                startLocal++;
                checkStop++;

                if (rate > 3) {
                    //nếu rate trên 3 ra đồ hiếm hoặc cực hiếm thì tăng vị trí kết thúc lên
                    if (item.type === "hiếm" || item.type === "cực hiếm") {
                        locationStop++;
                    }
                } else {
                    //nếu rate dưới 1 mà trên 10 ra đồ cực hiếm thì tăng vị trí kết thúc lên
                    if (rate > 1) {
                        if (item.type === "cực hiếm") {
                            locationStop++;
                        }
                    }
                }

                //xóa time out mỗi khi quay
                clearTimeout(timeOutLucky);
                wheel(speed, locationItem, startLocal, checkStop, locationStop, rate);

                itemLuckFinal.push(item);

                return item;
            }
            else {
                //thêm itme vào kho đồ
                if (itemLuckFinal.length > 0) {
                    $.post(
                        "./KhieuChien/insertInventories",
                        {
                            id_item: itemLuckFinal[0].id,
                            amount: itemLuckFinal[0].amount
                        },
                        function (response) { }
                    );

                    //thêm vào lịch sử quay
                    $.post(
                        "./Gatcha/addItemToHistory",
                        {
                            id_item: itemLuckFinal[0].id,
                            amount: itemLuckFinal[0].amount
                        },
                        function (response) {
                            loadHistoryGatcha()
                            loadInventories();
                        }
                    );
                }
            }
        }, speed);
    }

    //load kho đồ
    function loadInventories() {
        $.get("./KhieuChien/loadInventories", function (response) {
            let obj = JSON.parse(response);
            let html = "";
            let inventories = document.querySelector(".inventories__main");

            if (inventories.hasChildNodes()) {
                while (inventories.firstChild) {
                    inventories.removeChild(inventories.lastChild);
                }
            }

            // thêm vật phẩm vào kho
            for (let j = 0; j < Number(44 + obj.length); j++) {
                if (obj[j] != null) {
                    if (obj[j].type == "hiếm") {
                        html +=
                            `<div data-id=` +
                            obj[j].id_item +
                            ` class="inventory_item" style='border: 1px solid #FF3366'>
                                    <img  class="img_item" src="` +
                            obj[j].img +
                            `" alt="">
                                    <p data-id=` +
                            obj[j].id +
                            ` data-amount=` +
                            obj[j].amount +
                            ` class='count_item'>` +
                            obj[j].amount +
                            `</p> 
                     <div class="user_select--equipment">
                     `;
                        if (obj[j].type_equipment != null) {
                            html +=
                                `<button class="weared__item" data-id=` +
                                obj[j].id_item +
                                ` data-name=` +
                                obj[j].name +
                                ` 
								data-attribute_1=` +
                                obj[j].attribute_1 +
                                ` data-attribute_2=` +
                                obj[j].attribute_2 +
                                ` data-attribute_3=` +
                                obj[j].attribute_3 +
                                `>Đeo</button>`;
                        }

                        html +=
                            `<button class="remove__item">Xóa</button>
                        <button class="trade__item">Bán</button>
                     </div><div class="details">
                                        <div class="detail_item">
                                            <div class="detail_item--image">
                                                <img src="` +
                            obj[j].img +
                            `" alt="">
                                            </div>
                                
                                            <div class="detail_item--info">
                                                <h3 class="detail_item--name">` +
                            obj[j].name +
                            `</h3>
                                                <p class="detail_item--attack">` +
                            obj[j].attribute_1 +
                            `</p>
                                                <p class="detail_item--defense">` +
                            obj[j].attribute_2 +
                            `</p>
                                                <p class="detail_item--blood">` +
                            obj[j].attribute_3 +
                            `</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    } else if (obj[j].type == "cực hiếm") {
                        html +=
                            `<div data-id=` +
                            obj[j].id_item +
                            ` class="inventory_item" style='border: 1px solid #FFFF00'>
                                    <img  class="img_item" src="` +
                            obj[j].img +
                            `" alt="">
                                    <p data-id=` +
                            obj[j].id +
                            ` data-amount=` +
                            obj[j].amount +
                            ` class='count_item'>` +
                            obj[j].amount +
                            `</p> 
                     <div class="user_select--equipment">`;

                        if (obj[j].type_equipment != null) {
                            html +=
                                `<button class="weared__item" data-id=` +
                                obj[j].id_item +
                                ` data-name=` +
                                obj[j].name +
                                ` 
							data-attribute_1=` +
                                obj[j].attribute_1 +
                                ` data-attribute_2=` +
                                obj[j].attribute_2 +
                                ` data-attribute_3=` +
                                obj[j].attribute_3 +
                                `>Đeo</button>`;
                        }
                        html +=
                            `<button class="remove__item">Xóa</button>
                        <button class="trade__item">Bán</button>
                     </div>


                                    <div class="details">
                                        <div class="detail_item">
                                            <div class="detail_item--image">
                                                <img src="` +
                            obj[j].img +
                            `" alt="">
                                            </div>
                                
                                            <div class="detail_item--info">
                                                <h3 class="detail_item--name">` +
                            obj[j].name +
                            `</h3>
                                                <p class="detail_item--attack">` +
                            obj[j].attribute_1 +
                            `</p>
                                                <p class="detail_item--defense">` +
                            obj[j].attribute_2 +
                            `</p>
                                                <p class="detail_item--blood">` +
                            obj[j].attribute_3 +
                            `</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    } else {
                        html +=
                            `<div data-id=` +
                            obj[j].id_item +
                            ` class="inventory_item" style='border: 1px solid 1px solid rgb(169 169 169 / 75%)'>
                                    <img  class="img_item" src="` +
                            obj[j].img +
                            `" alt="">
                                    <p data-id=` +
                            obj[j].id +
                            ` data-amount=` +
                            obj[j].amount +
                            ` class='count_item'>` +
                            obj[j].amount +
                            `</p> 

                     <div class="user_select--equipment">`;

                        if (obj[j].type_equipment != null) {
                            html +=
                                `<button class="weared__item" data-id=` +
                                obj[j].id_item +
                                ` data-name=` +
                                obj[j].name +
                                ` 
							data-attribute_1=` +
                                obj[j].attribute_1 +
                                ` data-attribute_2=` +
                                obj[j].attribute_2 +
                                ` data-attribute_3=` +
                                obj[j].attribute_3 +
                                `>Đeo</button>`;
                        }

                        html +=
                            `<button class="remove__item">Xóa</button>
                        <button class="trade__item">Bán</button>
                     </div>

                                    <div class="details">
                                        <div class="detail_item">
                                            <div class="detail_item--image">
                                                <img src="` +
                            obj[j].img +
                            `" alt="">
                                            </div>
                                
                                            <div class="detail_item--info">
                                                <h3 class="detail_item--name">` +
                            obj[j].name +
                            `</h3>
                                                <p class="detail_item--attack">` +
                            obj[j].attribute_1 +
                            `</p>
                                                <p class="detail_item--defense">` +
                            obj[j].attribute_2 +
                            `</p>
                                                <p class="detail_item--blood">` +
                            obj[j].attribute_3 +
                            `</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    }
                } else {
                    html += `<div class="inventory_item"></div>`;
                }
            }
            $(".inventories__main").html(html);

            let checkShow = false;

            //sửa lỗi hover chi tiết trang bị bị che khuất viền
            let detail_inventory = document.querySelectorAll(".details");

            if (detail_inventory.length > 0) {
                for (let i = 0; i < detail_inventory.length; i += 8) {
                    if (detail_inventory.length > 40) {
                        if (i > detail_inventory.length - 8) {
                            detail_inventory[i].style.left = "83px";
                            detail_inventory[i].style.top = "-130px";
                        }
                    } else {
                        detail_inventory[i].style.left = "83px";
                    }
                }
            }

            //xử lý hover bản chi tiết trang bị bị che khuất
            $(".inventory_item").hover(function () {
                let details = document.querySelectorAll(".details");
                details.forEach((p) => {
                    p.style.display = "none";
                });

                if (checkShow == false) {
                    $(this).children(".details").css("display", "block");
                }

                let position = $(this).position();

                if (position.top > 300) {
                    $(this).children(".details").css("top", "-200px");
                }

                if (position.left > 900) {
                    $(this).children(".details").css("left", "-27px");
                }
            });

        })
    }

    // Lich su gatcha
    function loadHistoryGatcha() {
        $.post('./Gatcha/getHistoryGatcha', function (data) {
            let obj = JSON.parse(data);
            let itemGatchaHTML = ``;
            let total_gatcha = obj.length;

            obj.forEach(element => {
                itemGatchaHTML += ` <div class="lottery__history">
                                        <p class="history__date">Thời gian: `+ element.created_at + `</p>
                                        <p class="history__name">"`+ element.name_user + `"-Nhận được vật phẩm:`;

                if (element.type === "thường") {
                    itemGatchaHTML += `<span>[` + element.name_item + `]</span>`;
                }
                else if (element.type === "hiếm") {
                    itemGatchaHTML += `<span style='color: #FF3366'>[` + element.name_item + `]</span>`;
                }
                else if (element.type === "cực hiếm") {
                    itemGatchaHTML += `<span style='color: #FFFF00'>[` + element.name_item + `]</span>`;
                }
                itemGatchaHTML += `</p>
                                    </div>`;

            })
            $('.lottery__histories--container').html(itemGatchaHTML);
            $('.total__quantity').html("Tổng: " + total_gatcha);

            //kiểm tra mốc quay
            let arrLucky = document.querySelectorAll('.lottery__quantity--item');

            arrLucky.forEach(p => {
                let totalLucky = p.getAttribute("data-content")
                let id_item_check = p.getAttribute("data-id")

                if (Number(totalLucky) <= Number(total_gatcha)) {
                    $.post("./Gatcha/getHistoryLuckyPoint", { id_item: id_item_check }, function (response) {
                        let check_histories = JSON.parse(response);

                        if (check_histories.length > 0) {
                            p.classList.remove("active_lucky")
                            p.classList.add("actived_lucky")
                        }
                        else {
                            p.classList.add("active_lucky")
                            p.classList.remove("actived_lucky")
                        }
                    })

                }
            })

            //thêm trang bị nhận theo mốc
            $('.lottery__quantity--item').click(function () {
                let id_item = $(this).attr("data-id");
                let amount = $(this).attr("data-amount");

                if ($(this).hasClass('active_lucky')) {
                    $.post("./Gatcha/getHistoryLuckyPoint", { id_item: id_item }, function (response) {
                        let lucky_length = JSON.parse(response);

                        if (lucky_length.length == 0) {
                            $.post("./Gatcha/insertLuckyPoint", { id_item: id_item }, function (response) { })

                            $.post("./KhieuChien/insertInventories",
                                {
                                    id_item: id_item,
                                    amount: amount
                                },
                                function (response) {
                                    loadInventories();
                                }
                            );

                            loadHistoryGatcha();
                        }
                    })
                }

            })
        });
    }

    //load ticket vòng quay
    function loadTicketLucky() {
        $.post('./Gatcha/getTicketLucky', function (data) {
            let obj = JSON.parse(data);
            if (obj.length > 0) {
                totalTicket = obj[0].amount;
                $('.ticket__lucky').html(obj[0].amount);
                $('.btn_lottery').attr("data-id", obj[0].id);
            }
            else {
                totalTicket = 0;
                $('.ticket__lucky').html(0);
            }
        })
    }
});
