$(document).ready(function () {
    var music = {},
        typeSprite = "",
        types = [],
        gameData = {};
    (attackName = ""),
        (curAttack =
            {}),
        (randInt = 0),
        (enemyAttack =
            {}),
        (characters = []),
        (defendProgressInt = null),
        (defendProgressComplete = 0),
        (progressInt = null),
        (items_win = []),
        (timeHealth = 0),
        (live_characters = 3),
        (timeSkill = 3);
    (timeIntervalID = null),
        (progressComplete = 0);
    amount_health = 3;

    loadInventories();
    loadItems();
    loadWearEquipment();

    // load kho đồ
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
                        html += `<div data-id=` + obj[j].id_item + ` class="inventory_item" style='border: 1px solid #FF3366'>
                                    <img  class="img_item" src="` + obj[j].img + `" alt="">
                                    <p data-id=` + obj[j].id + ` data-amount=` + obj[j].amount + ` class='count_item'>` + obj[j].amount + `</p> 
                     <div class="user_select--equipment">
                     `;
                        if (obj[j].type_equipment != "mach" && obj[j].type_equipment != "ruong" && obj[j].id_item != 37 && obj[j].type_equipment != null) {
                            html += `<button class="weared__item" data-id_inventory="` + obj[j].id + `" data-id=` + obj[j].id_item + ` data-name=` + obj[j].name + ` 
								data-attribute_1=` + obj[j].attribute_1 + ` data-attribute_2=` + obj[j].attribute_2 + ` data-attribute_3=` + obj[j].attribute_3 + `>Đeo</button>`;
                        } else if (obj[j].type_equipment == "ruong") {
                            html += `<button class="open_chest" data-type="` + obj[j].type + `" data-id_inventory=` + obj[j].id + ` data-id=` + obj[j].id_item + ` data-name=` + obj[j].name + `>Mở</button>`;
                        }

                        html += `<button class="remove__item">Xóa</button>
                        <button class="trade__item">Bán</button>
                     </div><div class="details">
                                        <div class="detail_item">
                                            <div class="detail_item--image">
                                                <img src="` + obj[j].img + `" alt="">
                                            </div>
                                
                                            <div class="detail_item--info">
                                                <h3 class="detail_item--name">` + obj[j].name + `</h3>
                                                <p class="detail_item--attack">` + obj[j].attribute_1 + `</p>
                                                <p class="detail_item--defense">` + obj[j].attribute_2 + `</p>
                                                <p class="detail_item--blood">` + obj[j].attribute_3 + `</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    } else if (obj[j].type == "cực hiếm") {
                        html += `<div data-id=` + obj[j].id_item + ` class="inventory_item" style='border: 1px solid #FFFF00'>
                                    <img  class="img_item" src="` + obj[j].img + `" alt="">
                                    <p data-id=` + obj[j].id + ` data-amount=` + obj[j].amount + ` class='count_item'>` + obj[j].amount + `</p> 
                     <div class="user_select--equipment">`;

                        if (obj[j].type_equipment != "mach" && obj[j].type_equipment != "ruong" && obj[j].id_item != 37 && obj[j].type_equipment != null) {
                            html += `<button class="weared__item" data-id_inventory="` + obj[j].id + `" data-id=` + obj[j].id_item + ` data-name=` + obj[j].name + ` 
							data-attribute_1=` + obj[j].attribute_1 + ` data-attribute_2=` + obj[j].attribute_2 + ` data-attribute_3=` + obj[j].attribute_3 + `>Đeo</button>`;
                        } else if (obj[j].type_equipment == "ruong") {
                            html += `<button class="open_chest" data-type="` + obj[j].type + `" data-id_inventory=` + obj[j].id + ` data-id=` + obj[j].id_item + ` data-name=` + obj[j].name + `>Mở</button>`;
                        }

                        html += `<button class="remove__item">Xóa</button>
                        <button class="trade__item">Bán</button>
                     </div>


                                    <div class="details">
                                        <div class="detail_item">
                                            <div class="detail_item--image">
                                                <img src="` + obj[j].img + `" alt="">
                                            </div>
                                
                                            <div class="detail_item--info">
                                                <h3 class="detail_item--name">` + obj[j].name + `</h3>
                                                <p class="detail_item--attack">` + obj[j].attribute_1 + `</p>
                                                <p class="detail_item--defense">` + obj[j].attribute_2 + `</p>
                                                <p class="detail_item--blood">` + obj[j].attribute_3 + `</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    } else {
                        html += `<div data-id=` + obj[j].id_item + ` class="inventory_item" style='border: 1px solid 1px solid rgb(169 169 169 / 75%)'>
                                    <img  class="img_item" src="` + obj[j].img + `" alt="">
                                    <p data-id=` + obj[j].id + ` data-amount=` + obj[j].amount + ` class='count_item'>` + obj[j].amount + `</p> 

                     <div class="user_select--equipment">`;

                        if (obj[j].type_equipment != "mach" && obj[j].type_equipment != "ruong" && obj[j].id_item != 37 && obj[j].type_equipment != null) {
                            html += `<button class="weared__item" data-id_inventory="` + obj[j].id + `" data-id=` + obj[j].id_item + ` data-name=` + obj[j].name + ` 
							data-attribute_1=` + obj[j].attribute_1 + ` data-attribute_2=` + obj[j].attribute_2 + ` data-attribute_3=` + obj[j].attribute_3 + `>Đeo</button>`;
                        } else if (obj[j].type_equipment == "ruong") {
                            html += `<button class="open_chest" data-type="` + obj[j].type + `" data-id_inventory=` + obj[j].id + ` data-id=` + obj[j].id_item + ` data-name=` + obj[j].name + ` >Mở</button>`;
                        }

                        html += `<button class="remove__item">Xóa</button>
                        <button class="trade__item">Bán</button>
                     </div>

                                    <div class="details">
                                        <div class="detail_item">
                                            <div class="detail_item--image">
                                                <img src="` + obj[j].img + `" alt="">
                                            </div>
                                
                                            <div class="detail_item--info">
                                                <h3 class="detail_item--name">` + obj[j].name + `</h3>
                                                <p class="detail_item--attack">` + obj[j].attribute_1 + `</p>
                                                <p class="detail_item--defense">` + obj[j].attribute_2 + `</p>
                                                <p class="detail_item--blood">` + obj[j].attribute_3 + `</p>
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

            $('.open_chest').click(function () {
                let id_item = $(this).attr("data-id");
                let id_inventory = $(this).attr("data-id_inventory");
                let type = $(this).attr("data-type");

                $.post("./Chest/getItemsInChest", {
                    id_item: id_item,
                    id_inventory: id_inventory
                }, function (response) {
                    let obj = JSON.parse(response);

                    if (type == "ruong random") {
                        let length = obj.length;
                        let randomIndex = Math.floor(Math.random() * length);
                        let takeItem = obj[randomIndex];

                        let randomLucky_1 = Math.floor(Math.random() * 100) + 1;
                        let randomLucky_2 = Math.floor(Math.random() * 100) + 1;
                        let randomLucky_3 = Math.floor(Math.random() * 100) + 1;
                        let totalLucky = (randomLucky_1 + randomLucky_2 + randomLucky_3) * 0.1;

                        if (totalLucky == 1) {
                            while (takeItem.type == "cực hiếm") {
                                randomIndex = Math.floor(Math.random() * length);
                                takeItem = obj[randomIndex];
                            }
                        } else if (totalLucky > 1) {
                            while (takeItem.type == "cực hiếm" || takeItem.type == "hiếm") {
                                randomIndex = Math.floor(Math.random() * length);
                                takeItem = obj[randomIndex];
                            }
                        }

                        let id_item_take = takeItem.id;
                        let amount_take = takeItem.amount;

                        $.post("./Chest/insertInventories", {
                            id_item: id_item_take,
                            amount: amount_take
                        }, function (response) {
                            loadInventories();
                        })
                    } else if (type == "ruong default") {
                        obj.forEach(p => {
                            let id_item = p.id;
                            let amount_take = p.amount

                            $.post("./Chest/insertInventories", {
                                id_item: id_item,
                                amount: amount_take
                            }, function (response) {
                                loadInventories();
                            })
                        })
                    }

                })
            })

            // sửa lỗi hover chi tiết trang bị bị che khuất viền
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

            let checkShow = false;

            // hiển thị thanh chức năng trang bị
            $(".inventory_item").click(function () {
                let usser_select = document.querySelectorAll(".user_select--equipment");
                usser_select.forEach((p) => {
                    p.style.display = "none";
                });

                $(this).children(".user_select--equipment").css("display", "flex");

                $(this).children(".details").css("display", "none");
            });

            // xử lý hover bản chi tiết trang bị bị che khuất
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

                if (position.top > 800) {
                    $(this).children(".details").css("top", "-187px");
                }

                if (position.left > 600 && position.left < 700) {
                    $(this).children(".details").css("left", "80px");
                }

                if (position.left > 700 && position.left < 1023) {
                    $(this).children(".details").css("left", "35px");
                }


                if (position.left > 1023) {
                    $(this).children(".details").css("left", "-30px");
                }
            });

            // đeo trang bị
            $(".weared__item").click(function () {
                let id_equipment = $(this).attr("data-id");
                let id_inventory = $(this).attr("data-id_inventory");

                $.post("./itemsController/updateStatusEquipment", {
                    id_equipment: id_equipment,
                    id_inventory: id_inventory
                }, function (response) {
                    loadInventories();
                    loadWearEquipment();
                    $(".header-power").html("Lực chiến: " + response);
                });
            });
        });
    }

    // tháo trang bị
    $(".remove__equipment").click(function () {
        let id = $(this).attr("data-id");
        let id_item = $(this).attr("data-id_item");
        let name = $(this).attr("data-id_name");

        $.post("./itemsController/removeEquipment", {
            id: id,
            id_item: id_item
        }, function (response) {
            if (response == "") {
                response = 0;
            }

            $(".header-power").html("Lực chiến: " + response);

            if (name == "ao") {
                wearingEquipment("wear_coat", "https://i.imgur.com/6GIkC60.png");
            } else if (name == "vu khi") {
                wearingEquipment("wear_weapon", "https://i.imgur.com/hyzJCyr.png");
            } else if (name == "phi phong") {
                wearingEquipment("wear_phi_phong", "https://i.imgur.com/hyzJCyr.png");
            } else if (name == "dai") {
                wearingEquipment("wear_belt", "https://i.imgur.com/hyzJCyr.png");
            } else if (name == "nhan 1") {
                wearingEquipment("wear_jewel_1", "https://i.imgur.com/hyzJCyr.png");
            } else if (name == "nhan 2") {
                wearingEquipment("wear_jewel_2", "https://i.imgur.com/hyzJCyr.png");
            } else if (name == "day chuyen") {
                wearingEquipment("wear_jewel_3", "https://i.imgur.com/6GIkC60.png");
            } else if (name == "bi kip") {
                wearingEquipment("wear_skill", "https://i.imgur.com/QhblmnB.png");
            } else if (name == "phap bao") {
                wearingEquipment("wear_phap_bao", "https://i.imgur.com/QhblmnB.png");
            } else if (name == "mu") {
                wearingEquipment("wear_hat", "https://i.imgur.com/6GIkC60.png");
            } else if (name == "giay") {
                wearingEquipment("wear_shoese", "https://i.imgur.com/6GIkC60.png");
            } else if (name == "gang tay") {
                wearingEquipment("wear_glove", "https://i.imgur.com/6GIkC60.png");
            }

            loadWearEquipment();
            loadInventories();

            let list_remove__equipment = document.querySelectorAll(".remove__equipment");
            list_remove__equipment.forEach((p) => {
                p.style.display = "none";
            });
        });
    });

    // danh sách trang bị đang mặc
    function loadWearEquipment() {
        $.get("./itemsController/getWearEquipment", function (response) {
            let obj = JSON.parse(response);

            obj.forEach((p) => {
                if (p.type_equipment == "ao") {
                    wearingEquipment("wear_coat", p.img);
                    $(".remove_coat").attr("data-id", p.id);
                    $(".remove_coat").attr("data-id_item", p.id_item);
                    $(".remove_coat").attr("data-id_name", p.type_equipment);
                    $(".details__weared--coat__img").attr("src", p.img);
                    $(".details__weared--coat__name").html(p.name);
                    $(".details__weared--coat__attack").html(p.attribute_1);
                    $(".details__weared--coat__defense").html(p.attribute_2);
                    $(".details__weared--coat__blood").html(p.attribute_3);
                } else if (p.type_equipment == "vu khi") {
                    wearingEquipment("wear_weapon", p.img);
                    $(".remove_weapon").attr("data-id", p.id);
                    $(".remove_weapon").attr("data-id_item", p.id_item);
                    $(".remove_weapon").attr("data-id_name", p.type_equipment);

                    $(".details__weared--weapon__img").attr("src", p.img);
                    $(".details__weared--weapon__name").html(p.name);
                    $(".details__weared--weapon__attack").html(p.attribute_1);
                    $(".details__weared--weapon__defense").html(p.attribute_2);
                    $(".details__weared--weapon__blood").html(p.attribute_3);
                } else if (p.type_equipment == "phi phong") {
                    wearingEquipment("wear_phi_phong", p.img);
                    $(".remove_phi_phong").attr("data-id", p.id);
                    $(".remove_phi_phong").attr("data-id_item", p.id_item);
                    $(".remove_phi_phong").attr("data-id_name", p.type_equipment);

                    $(".details__weared--phi_phong__img").attr("src", p.img);
                    $(".details__weared--phi_phong__name").html(p.name);
                    $(".details__weared--phi_phong__attack").html(p.attribute_1);
                    $(".details__weared--phi_phong__defense").html(p.attribute_2);
                    $(".details__weared--phi_phong__blood").html(p.attribute_3);
                } else if (p.type_equipment == "dai") {
                    wearingEquipment("wear_belt", p.img);
                    $(".remove_belt").attr("data-id", p.id);
                    $(".remove_belt").attr("data-id_item", p.id_item);
                    $(".remove_belt").attr("data-id_name", p.type_equipment);

                    $(".details__weared--belt__img").attr("src", p.img);
                    $(".details__weared--belt__name").html(p.name);
                    $(".details__weared--belt__attack").html(p.attribute_1);
                    $(".details__weared--belt__defense").html(p.attribute_2);
                    $(".details__weared--belt__blood").html(p.attribute_3);
                } else if (p.type_equipment == "nhan 1") {
                    wearingEquipment("wear_jewel_1", p.img);
                    $(".remove_jewel_1").attr("data-id", p.id);
                    $(".remove_jewel_1").attr("data-id_item", p.id_item);
                    $(".remove_jewel_1").attr("data-id_name", p.type_equipment);

                    $(".details__weared--jewel_1__img").attr("src", p.img);
                    $(".details__weared--jewel_1__name").html(p.name);
                    $(".details__weared--jewel_1__attack").html(p.attribute_1);
                    $(".details__weared--jewel_1__defense").html(p.attribute_2);
                    $(".details__weared--jewel_1__blood").html(p.attribute_3);
                } else if (p.type_equipment == "nhan 2") {
                    wearingEquipment("wear_jewel_2", p.img);
                    $(".remove_jewel_2").attr("data-id", p.id);
                    $(".remove_jewel_2").attr("data-id_item", p.id_item);
                    $(".remove_jewel_2").attr("data-id_name", p.type_equipment);

                    $(".details__weared--jewel_2__img").attr("src", p.img);
                    $(".details__weared--jewel_2__name").html(p.name);
                    $(".details__weared--jewel_2__attack").html(p.attribute_1);
                    $(".details__weared--jewel_2__defense").html(p.attribute_2);
                    $(".details__weared--jewel_2__blood").html(p.attribute_3);
                } else if (p.type_equipment == "day chuyen") {
                    wearingEquipment("wear_jewel_3", p.img);
                    $(".remove_jewel_3").attr("data-id", p.id);
                    $(".remove_jewel_3").attr("data-id_item", p.id_item);
                    $(".remove_jewel_3").attr("data-id_name", p.type_equipment);

                    $(".details__weared--jewel_3__img").attr("src", p.img);
                    $(".details__weared--jewel_3__name").html(p.name);
                    $(".details__weared--jewel_3__attack").html(p.attribute_1);
                    $(".details__weared--jewel_3__defense").html(p.attribute_2);
                    $(".details__weared--jewel_3__blood").html(p.attribute_3);
                } else if (p.type_equipment == "bi kip") {
                    wearingEquipment("wear_skill", p.img);
                    $(".remove_skill").attr("data-id", p.id);
                    $(".remove_skill").attr("data-id_item", p.id_item);
                    $(".remove_skill").attr("data-id_name", p.type_equipment);

                    $(".details__weared--skill__img").attr("src", p.img);
                    $(".details__weared--skill__name").html(p.name);
                    $(".details__weared--skill__attack").html(p.attribute_1);
                    $(".details__weared--skill__defense").html(p.attribute_2);
                    $(".details__weared--skill__blood").html(p.attribute_3);
                } else if (p.type_equipment == "phap bao") {
                    wearingEquipment("wear_phap_bao", p.img);
                    $(".remove_phap_bao").attr("data-id", p.id);
                    $(".remove_phap_bao").attr("data-id_item", p.id_item);
                    $(".remove_phap_bao").attr("data-id_name", p.type_equipment);

                    $(".details__weared--phap_bao__img").attr("src", p.img);
                    $(".details__weared--phap_bao__name").html(p.name);
                    $(".details__weared--phap_bao__attack").html(p.attribute_1);
                    $(".details__weared--phap_bao__defense").html(p.attribute_2);
                    $(".details__weared--phap_bao__blood").html(p.attribute_3);
                } else if (p.type_equipment == "mu") {
                    wearingEquipment("wear_hat", p.img);
                    $(".remove_hat").attr("data-id", p.id);
                    $(".remove_hat").attr("data-id_item", p.id_item);
                    $(".remove_hat").attr("data-id_name", p.type_equipment);

                    $(".details__weared--hat__img").attr("src", p.img);
                    $(".details__weared--hat__name").html(p.name);
                    $(".details__weared--hat__attack").html(p.attribute_1);
                    $(".details__weared--hat__defense").html(p.attribute_2);
                    $(".details__weared--hat__blood").html(p.attribute_3);
                } else if (p.type_equipment == "giay") {
                    wearingEquipment("wear_shoese", p.img);
                    $(".remove_shoese").attr("data-id", p.id);
                    $(".remove_shoese").attr("data-id_item", p.id_item);
                    $(".remove_shoese").attr("data-id_name", p.type_equipment);

                    $(".details__weared--shoese__img").attr("src", p.img);
                    $(".details__weared--shoese__name").html(p.name);
                    $(".details__weared--shoese__attack").html(p.attribute_1);
                    $(".details__weared--shoese__defense").html(p.attribute_2);
                    $(".details__weared--shoese__blood").html(p.attribute_3);
                } else if (p.type_equipment == "gang tay") {
                    wearingEquipment("wear_glove", p.img);
                    $(".remove_glove").attr("data-id", p.id);
                    $(".remove_glove").attr("data-id_item", p.id_item);
                    $(".remove_glove").attr("data-id_name", p.type_equipment);

                    $(".details__weared--glove__img").attr("src", p.img);
                    $(".details__weared--glove__name").html(p.name);
                    $(".details__weared--glove__attack").html(p.attribute_1);
                    $(".details__weared--glove__defense").html(p.attribute_2);
                    $(".details__weared--glove__blood").html(p.attribute_3);
                }
            });
        });
    }

    // chọn trang bị đang mặc
    $(".wear_equipment").click(function () {
        let list_remove__equipment = document.querySelectorAll(".remove__equipment");
        list_remove__equipment.forEach((p) => {
            p.style.display = "none";
        });

        $(this).children(".remove__equipment").css("display", "block");
    });

    // public mang trang bị
    function wearingEquipment(className, src) {
        document.querySelector("." + className).src = src;
    }

    function loadItems() {
        $.get("./itemsController/show", function (response) {
            let obj = JSON.parse(response);

            obj.forEach((p) => {
                items_win.push(p);
            });
        });
    }

    // inventory

    // ///////////////////////////////////////////
    // CONTENTS
    // ///////////////////////////////////////////
    // VARIABLES
    // UTILITIES
    // RANDOM NUMBER GENERATOR
    // CHARACTER BUILD
    // ATTACK MULTIPLIER
    // SFX PLAYER
    // HP BAR ANIMATION
    // RESET
    // CHARACTER CHOICE
    // HERO ATTACK
    // ENEMY ATTACK
    // ATTACK SEQUENCE
    // MODAL CONTROLS

    // ///////////////////////////////////////////
    // VARIABLES
    // ///////////////////////////////////////////

    function buildVars() {
        // all the music for the game
        // http://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
        music = {
            opening: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3",
            battle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3",
            victory: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/csqodhnibz/108-victory-vs-wild-pokemon-.mp3",
            pikachu: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/hpjacpzwof/170-pikachu.mp3",
            charmander: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/wfwdwleyga/149-charmander.mp3",
            squirtle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/soagplijvq/152-squirtle.mp3",
            bulbasaur: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/gvqmhhryki/146-bulbasaur.mp3",
            machop: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/viaskmobgb/213-machop.mp3"
        };

        typeSprite = "http://orig15.deviantart.net/24d8/f/2011/057/3/5/ge___energy_type_icons_by_aschefield101-d3agp02.png";
        types = [
            "bug",
            "dark",
            "dragon",
            "electric",
            "fairy",
            "fighting",
            "fire",
            "flying",
            "ghost",
            "grass",
            "ground",
            "ice",
            "normal",
            "poison",
            "psychic",
            "rock",
            "steel",
            "water"
        ];

        // the data for the game in play
        gameData = {
            step: 1,
            hero: {},
            enemy: {}
        };

        // attack variables
        attackName = "";
        curAttack = {};
        randInt = 0;
        enemyAttack = {};
        defendProgressInt = null;
        defendProgressComplete = 0;
        progressInt = null;
        progressComplete = 0;

        // items_win = [
        //     {
        //         id: 1,
        //         name: "U Minh Châu",
        //         amount: 2,
        //         img: "./public/images/CJItLYI.png"
        //     },

        //     {
        //         id: 2,
        //         name: "Ấn Hệ Âm",
        //         amount: 1,
        //         img: "./public/images/douc8pT.png"
        //     },

        //     {
        //         id: 3,
        //         name: "U Minh Châu Lv 1",
        //         amount: 1,
        //         img: "./public/images/Jm1uwHO.png"
        //     },
        //     {
        //         id: 4,
        //         name: "Áo Hác Ám",
        //         amount: 1,
        //         img: "./public/images/8D5frSc.png"
        //     }, {
        //         id: 5,
        //         name: "Ngọc Tinh Anh",
        //         amount: 3,
        //         img: "./public/images/bI3xNR8.png"
        //     }, {
        //         id: 6,
        //         name: "Ngọc Tinh Thể",
        //         amount: 2,
        //         img: "./public/images/8pOg0cK.png"
        //     }, {
        //         id: 7,
        //         name: "Hộp Đá Cường Hóa",
        //         amount: 2,
        //         img: "./public/images/b2srrLF.png"
        //     }
        // ]

        // available characters
        characters = [
       {
            name: "thiên la hầu",
            type: 'bossthuy',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/CISFb7q.png",
                front: "https://i.imgur.com/4CmYWYX.gif",
                back: "https://i.imgur.com/4CmYWYX.gif"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                   img: "https://i.imgur.com/VksgTLS.png",
                   img_attack: "https://i.imgur.com/N6R6rpg.gif",
                    name: "tăng sát thương hệ âm 50% tăng 20% máu khi tham gia trận đấu",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    img: "https://i.imgur.com/uCazp4i.png",
                    img_attack: "https://i.imgur.com/nsmk2N4.gif",
                    name: "xuyên kháng giáp 10% tăng 10% sát thương cơ bản",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/Pqordoe.png",
                    img_attack: "https://i.imgur.com/8BCSmkd.gif",
                    name: "tấn công cơ bản tăng + 500 và sát thương chí mạng 10%",
                     hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/ymbOSfs.png",
                    img_attack: "https://i.imgur.com/zj1BUBe.gif",
                    name: "gây hiệu ứng giảm hồi máu 20% và tăng sát thuong hệ dương 10%",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        },{
            name: "cố thanh hàn",
            type: 'bosskim',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/xko538e.png",
                front: "https://i.imgur.com/tZykE1v.gif",
                back: "https://i.imgur.com/tZykE1v.gif"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                   img: "https://i.imgur.com/VksgTLS.png",
                   img_attack: "https://i.imgur.com/N6R6rpg.gif",
                    name: "tăng sát thương hệ âm 50% tăng 20% máu khi tham gia trận đấu",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    img: "https://i.imgur.com/uCazp4i.png",
                    img_attack: "https://i.imgur.com/nsmk2N4.gif",
                    name: "xuyên kháng giáp 10% tăng 10% sát thương cơ bản",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/Pqordoe.png",
                    img_attack: "https://i.imgur.com/8BCSmkd.gif",
                    name: "tấn công cơ bản tăng + 500 và sát thương chí mạng 10%",
                     hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/ymbOSfs.png",
                    img_attack: "https://i.imgur.com/zj1BUBe.gif",
                    name: "gây hiệu ứng giảm hồi máu 20% và tăng sát thuong hệ dương 10%",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        },{
            name: "nhạc sơn",
            type: 'bosshoa',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/ADjpK3Y.png",
                front: "https://i.imgur.com/8lnWDZW.gif",
                back: "https://i.imgur.com/8lnWDZW.gif"
            },
            hp: {
                 current: 25000,
                total: 25000
            },
            attacks: [
                {
                   img: "https://i.imgur.com/VksgTLS.png",
                   img_attack: "https://i.imgur.com/N6R6rpg.gif",
                    name: "tăng sát thương hệ âm 50% tăng 20% máu khi tham gia trận đấu",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    img: "https://i.imgur.com/uCazp4i.png",
                    img_attack: "https://i.imgur.com/nsmk2N4.gif",
                    name: "xuyên kháng giáp 10% tăng 10% sát thương cơ bản",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/Pqordoe.png",
                    img_attack: "https://i.imgur.com/8BCSmkd.gif",
                    name: "tấn công cơ bản tăng + 500 và sát thương chí mạng 10%",
                     hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/ymbOSfs.png",
                    img_attack: "https://i.imgur.com/zj1BUBe.gif",
                    name: "gây hiệu ứng giảm hồi máu 20% và tăng sát thuong hệ dương 10%",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        },{
            name: "ninh hồng trần",
            type: 'bossmoc',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/dmsSofW.png",
                front: "https://i.imgur.com/HUfOZdp.gif",
                back: "https://i.imgur.com/HUfOZdp.gif"
            },
            hp: {
                 current: 25000,
                total: 25000
            },
            attacks: [
                {
                   img: "https://i.imgur.com/VksgTLS.png",
                   img_attack: "https://i.imgur.com/N6R6rpg.gif",
                    name: "tăng sát thương hệ âm 50% tăng 20% máu khi tham gia trận đấu",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    img: "https://i.imgur.com/uCazp4i.png",
                    img_attack: "https://i.imgur.com/nsmk2N4.gif",
                    name: "xuyên kháng giáp 10% tăng 10% sát thương cơ bản",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/Pqordoe.png",
                    img_attack: "https://i.imgur.com/8BCSmkd.gif",
                    name: "tấn công cơ bản tăng + 500 và sát thương chí mạng 10%",
                     hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/ymbOSfs.png",
                    img_attack: "https://i.imgur.com/zj1BUBe.gif",
                    name: "gây hiệu ứng giảm hồi máu 20% và tăng sát thuong hệ dương 10%",
                    hp: randomNum(155000, 155000, 155000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        },
        {
            name: "linh thứu",
            type: 'am',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/PKgx9xC.png",
                front: "https://i.imgur.com/UCTSi0X.png",
                back: "https://i.imgur.com/UCTSi0X.png"
            },
            hp: {
                current: 30000,
                total: 30000
            },
            attacks: [
                {
                   img: "https://i.imgur.com/VksgTLS.png",
                   img_attack: "https://i.imgur.com/N6R6rpg.gif",
                    name: "tăng sát thương hệ âm 50% tăng 20% máu khi tham gia trận đấu",
                    hp: randomNum(19000, 18300, 18200),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    img: "https://i.imgur.com/uCazp4i.png",
                    img_attack: "https://i.imgur.com/nsmk2N4.gif",
                    name: "xuyên kháng giáp 10% tăng 10% sát thương cơ bản",
                    hp: randomNum(15495, 14475, 13455),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/Pqordoe.png",
                    img_attack: "https://i.imgur.com/8BCSmkd.gif",
                    name: "tấn công cơ bản tăng + 500 và sát thương chí mạng 10%",
                    hp: randomNum(19385, 18365, 18335),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/ymbOSfs.png",
                    img_attack: "https://i.imgur.com/zj1BUBe.gif",
                    name: "gây hiệu ứng giảm hồi máu 20% và tăng sát thuong hệ dương 10%",
                    hp: randomNum(20555, 10425, 10305),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        },
        {
            name: "thiên sơn",
            type: 'am',
           weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/zawFyWt.png",
                front: "https://i.imgur.com/ETSRssA.png",
                back: "https://i.imgur.com/ETSRssA.png",
                deranged: "https://i.imgur.com/ETSRssA.png",
                sleep: "https://i.imgur.com/ETSRssA.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng 100% xuyên giáp hệ âm",
                    hp: randomNum(9050, 9050, 9050),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "tăng lực tay cơ bản 500%",
                    hp: randomNum(15050, 14050, 13050),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "thiên sơn bách thả lộ kết liễu đối phương khi round 5",
                    hp: randomNum(9050, 8050),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng 100% sát thương chí mạng",
                    hp: randomNum(9050, 8050, 7050),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        },
        {
            name: "thiên hạ hội",
            type: 'am',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/eEdg6LI.png",
                front: "https://i.imgur.com/brkIAzW.png",
                back: "https://i.imgur.com/brkIAzW.png",
                deranged: "https://i.imgur.com/brkIAzW.png",
                sleep: "https://i.imgur.com/brkIAzW.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng cho bản thân 70% tấn công cơ bản",
                    hp: randomNum(11130, 11120, 11100),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "gây sát thương hệ dương 50% và hiệu ứng vào máu",
                    hp: randomNum(11150, 11130, 11210),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng xuyên giáp 100% và xuyên kháng giáp 10%",
                    hp: randomNum(17110, 11150, 11130),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "gây 10% sát thương hệ mộc và giảm hồi máu 50%",
                    hp: randomNum(11250, 11150, 11150),
                    avail: {
                        total: 20,
                        remaining: 20
                    }
                }
            ]
        },
        {
            name: "mật tông",
            type: 'am',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/wMsuMVE.png",
                front: "https://i.imgur.com/PWKemOB.png",
                back: "https://i.imgur.com/PWKemOB.png",
                deranged: "https://i.imgur.com/PWKemOB.png",
                sleep: "https://i.imgur.com/PWKemOB.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây 50% sát thương hệ dương + 20% hút máu",
                    hp: randomNum(11120, 1111, 11150),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 50% sát thương cơ bản + 10% hút máu ",
                    hp: randomNum(11150, 11130, 11115),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "gây 500 sát thương cơ bản hệ âm",
                    hp: randomNum(11130, 11120, 11100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng chí mạng 100% + 100% sát thương hệ âm",
                    hp: randomNum(11200, 11100, 11150),
                    avail: {
                        total: 20,
                        remaining: 20
                    }
                }
            ]
        }, {
            name: "côn luân",
            type: 'duong',
           weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/RENS9DS.png",
                front: "https://i.imgur.com/eLrklVL.png",
                back: "https://i.imgur.com/eLrklVL.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng 100% phòng thủ hệ âm gây 100% sát thương hệ âm",
                    hp: randomNum(11150, 11135, 11125),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng 100% phòng thủ hệ dương gây 100% sát thương hệ dương",
                    hp: randomNum(11140, 11125, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng 100% phòng thủ hệ thủy gây 100% sát thương hệ thủy",
                    hp: randomNum(11160, 11140, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "khi vào trận tăng 100% giáp",
                    hp: randomNum(11130, 11120, 11100),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        }, {
            name: "tiêu dao",
            type: 'duong',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/yzkubMJ.png",
                front: "https://i.imgur.com/31nHi6h.png",
                back: "https://i.imgur.com/31nHi6h.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây cho mục tiêu 90% công cơ bản sát thương hệ kim",
                    hp: randomNum(11210, 11150, 11100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "gây 100% sát thương hệ mộc + 20% tàn phế",
                    hp: randomNum(11150, 11100, 11150),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "mỗi lần tấn công gây 50% sát thương hệ thủy",
                    hp: randomNum(11130, 11120, 11100),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }, {
                    name: "tăng tỉ lệ bạo kích 100% sát thương hệ dương",
                    hp: randomNum(11300, 11200),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }
            ]
        }, {
            name: "từ hàng",
            type: 'duong',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/N7FXQj0.png",
                front: "https://i.imgur.com/PRnLagY.gif",
                back: "https://i.imgur.com/PRnLagY.gif",
                deranged: "https://i.imgur.com/PRnLagY.gif",
                sleep: "https://i.imgur.com/PRnLagY.gif"
            },
            hp: {
                current: 30000,
                total: 30000
            },
            attacks: [
                {
                    img: "https://i.imgur.com/CHrmdQw.png",
                    img_attack: "https://i.imgur.com/vtnn2dN.gif",
                    name: "sát thương hệ dương tăng 50%",
                    hp: randomNum(11000, 15000),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/J9Vy36N.png",
                    img_attack: "https://i.imgur.com/xW2aVkq.gif",
                    name: "gây sát thương hệ dương 200%",
                    hp: randomNum(11300, 11200, 11100),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    img: "https://i.imgur.com/EunrI7x.png",
                    img_attack: "https://i.imgur.com/xW2aVkq.gif",
                    name: "từ hàng vào trận đấu tăng 100% khắc chế hệ dương gây 50% nội tại sát thương",
                    hp: randomNum(11350, 11300, 11200),
                    avail: {
                        total: 25,
                        remaining: 25
                    }
                }, {
                    img: "https://i.imgur.com/wCoEzjx.png",
                    img_attack: "https://i.imgur.com/ZvVp4MU.gif",
                    name: "tăng 100% lực tay cơ bản",
                    hp: randomNum(11300, 11200, 11100),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }
            ]
        }, {
            name: "võ đang",
            type: 'duong',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/B327V0y.png",
                front: "https://i.imgur.com/d6BkOOM.png",
                back: "https://i.imgur.com/d6BkOOM.png",
                deranged: "https://i.imgur.com/d6BkOOM.png",
                sleep: "https://i.imgur.com/d6BkOOM.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng cho bản thân 100% tấn công cơ bản",
                    hp: randomNum(31350, 11250, 11150),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng 100% sát thương hệ dương",
                    hp: randomNum(11150, 11130, 11115),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng xuyên giáp 100% và xuyên kháng giáp 10%",
                    hp: randomNum(11250, 11150, 11100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "gây 10% sát thương hệ mộc và giảm hồi máu 50%",
                    hp: randomNum(11150, 13110, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        },  {
            name: "tung sơn",
            type: 'thuy',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/PwBC2tk.png",
                front: "https://i.imgur.com/7hFwDdX.png",
                back: "https://i.imgur.com/7hFwDdX.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây 30% sát thương cơ bản hệ thủy",
                    hp: randomNum(15130, 12120, 21210),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "gây 415 sát thương chuẩn + kèm theo hiệu ứng vào máu",
                    hp: randomNum(12200, 11100, 11150),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "mỗi lần tấn công tăng 10% lực tay cơ bản",
                    hp: randomNum(11130, 11120, 11110),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng vĩnh viễn 50% tấn công cơ bản",
                    hp: randomNum(11100, 11150, 11130),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        }, {
            name: "minh giáo",
            type: 'thuy',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/lwQfhr3.png",
                front: "https://i.imgur.com/x8PoB6E.png",
                back: "https://i.imgur.com/x8PoB6E.png",
                deranged: "https://i.imgur.com/x8PoB6E.png",
                sleep: "https://i.imgur.com/x8PoB6E.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "cổ mộ độc gây sát thương 100% + giảm hồi máu 50%",
                    hp: randomNum(11200, 11150, 11150),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "tăng tấn công cơ bản 10% + chí mạng 10%",
                    hp: randomNum(11280, 11200, 11100),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng xuyên giáp 10% + hút máu 5%",
                    hp: randomNum(11125, 11110, 11115),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "cổ mộ thần sát thương 100% khi đối thủ bị giảm hồi máu",
                    hp: randomNum(11130, 11120, 11110),
                    avail: {
                        total: 20,
                        remaining: 20
                    }
                }
            ]
        }, {
            name: "thần thủy cung",
            type: 'thuy',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/NP0pnbY.png",
                front: "https://i.imgur.com/6LiPEMY.png",
                back: "https://i.imgur.com/6LiPEMY.png",
                deranged: "https://i.imgur.com/6LiPEMY.png",
                sleep: "https://i.imgur.com/6LiPEMY.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây 100% sát thương hệ mộc",
                    hp: randomNum(11300, 11200, 11100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng 100% sát thương chí mạng hệ âm",
                    hp: randomNum(11150, 11130, 11110),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "gây cho đối thủ hiệu ứng giảm hồi máu 5%",
                    hp: randomNum(11300, 11200, 11100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "khi vào trận đấu tăng 50% máu",
                    hp: randomNum(11150, 11100, 11150),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }
            ]
        }, {
            name: "thiên cơ",
            type: 'thuy',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/oqi6Dep.png",
                front: "https://i.imgur.com/GeSWTre.png",
                back: "https://i.imgur.com/GeSWTre.png",
                deranged: "https://i.imgur.com/GeSWTre.png",
                sleep: "https://i.imgur.com/GeSWTre.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "có tỉ lệ 5% đóng băng đối thủ và giảm 50% giáp",
                    hp: randomNum(11300, 11200, 11100),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "giảm sát thương cơ bản đối thủ 20%",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tỉ lệ đóng băng 5% và giảm hút máu đối thủ 100%",
                    hp: randomNum(11120, 11110, 11115),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }, {
                    name: "thủy triều thiên cơ gây sát thương hệ thủy 100%",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 20,
                        remaining: 20
                    }
                }
            ]
        }, {
            name: "cái bang",
            type: 'hoa',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/oELTvGF.png",
                front: "https://i.imgur.com/w4UGRU1.png",
                back: "https://i.imgur.com/w4UGRU1.png",
                deranged: "https://i.imgur.com/w4UGRU1.png",
                sleep: "https://i.imgur.com/w4UGRU1.png"
            },
            hp: {
                current: 35000,
                total: 35000
            },
            attacks: [
                {
                    name: "tăng 100% máu khi vào trận tăng 10% sát thương hệ hỏa",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng sát thương hệ hỏa 100%",
                    hp: randomNum(11130, 11125, 11110),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "túy điệp cuồng vũ tăng 100% sát thương",
                    hp: randomNum(11100, 11150, 11130),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }, {
                    name: "tăng 100% lực tay cơ bản khi vào trận đấu",
                    hp: randomNum(11150, 11140, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        }, {
            name: "hằng sơn",
            type: 'hoa',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/YyypXoC.png",
                front: "https://i.imgur.com/NmS8IAR.png",
                back: "https://i.imgur.com/NmS8IAR.png",
                deranged: "https://i.imgur.com/NmS8IAR.png",
                sleep: "https://i.imgur.com/NmS8IAR.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây 50% sát thương hệ hỏa",
                    hp: randomNum(11250, 11200, 11100),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 10% sát thương cơ bản 50%",
                    hp: randomNum(11350, 11250, 11150),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "bản thân tăng 100% sát thương diện rộng",
                    hp: randomNum(11150, 11100, 11110),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "tăng vĩnh viễn 50% sát thương hệ hỏa khi vào trận đấu",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }
            ]
        }, {
            name: "khải linh phái",
            type: 'hoa',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/ST8BRxc.png",
                front: "https://i.imgur.com/LlNck0G.png",
                back: "https://i.imgur.com/LlNck0G.png",
                deranged: "https://i.imgur.com/LlNck0G.png",
                sleep: "https://i.imgur.com/LlNck0G.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng 100% lực tay cơ bản",
                    hp: randomNum(11150, 11135, 11120),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 100% sát thương chí mạng",
                    hp: randomNum(12135, 11125, 11510),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "gây sát thương 100% diện rộng",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    name: "tăng vĩnh viễn 50% sát thương hệ hỏa khi vào trận đấu",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        }, {
            name: "thuần dương",
            type: 'hoa',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/8NtgVqB.png",
                front: "https://i.imgur.com/hQFFkS8.png",
                back: "https://i.imgur.com/hQFFkS8.png",
                deranged: "https://i.imgur.com/hQFFkS8.png",
                sleep: "https://i.imgur.com/hQFFkS8.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng công cơ bản tăng 100%",
                    hp: randomNum(15150, 11130, 11110),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 100% lực tay cơ bản ",
                    hp: randomNum(11300, 11200, 11100),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "khi vào trận đấu tăng 50% xuyên giáp",
                    hp: randomNum(11180, 51110, 11130),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "thuần dương tăng 100% sát thương chí mạng",
                    hp: randomNum(11190, 11150, 11140),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        }, {
            name: "bá đao",
            type: 'kim',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/PMF1kr0.png",
                front: "https://i.imgur.com/s02avrC.png",
                back: "https://i.imgur.com/s02avrC.png",
                deranged: "https://i.imgur.com/s02avrC.png",
                sleep: "https://i.imgur.com/s02avrC.png"
            },
            hp: {
                current: 35000,
                total: 35000
            },
            attacks: [
                {
                    name: "chuyển hóa máu thành sát thương 50% hệ kim",
                    hp: randomNum(30000, 20000, 10000),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "chuyển hóa sát thương thành máu 10%",
                    hp: randomNum(15110, 11130, 11115),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng lực tay cơ bản 100%",
                    hp: randomNum(11130, 11120, 11110),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng giáp và xuyên giáp 10% và gây 30% sát thương toàn hệ",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 20,
                        remaining: 20
                    }
                }
            ]
        }, {
            name: "thiên sách",
            type: 'kim',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/aV56rSw.png",
                front: "https://i.imgur.com/fyIXBRO.png",
                back: "https://i.imgur.com/fyIXBRO.png",
                deranged: "https://i.imgur.com/fyIXBRO.png",
                sleep: "https://i.imgur.com/fyIXBRO.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng 50% giáp và 20% phản đòn sát thương",
                    hp: randomNum(11200, 11100, 11150),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 50% sát thương cơ bản hệ kim",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "thiên sách thương tăng 100% chí mạng có cơ hội kết liễu đối phương",
                    hp: randomNum(11130, 11115, 11110),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng sát thương cơ bản 10%",
                    hp: randomNum(11150, 11130, 11115),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        }, {
            name: "thiếu lâm",
            type: 'kim',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/stHlz4l.png",
                front: "https://i.imgur.com/W5ufg32.png",
                back: "https://i.imgur.com/W5ufg32.png",
                deranged: "https://i.imgur.com/W5ufg32.png",
                sleep: "https://i.imgur.com/W5ufg32.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "kim cang phục ma tăng 10% giáp 10% kháng phép",
                    hp: randomNum(11180, 11150, 11130),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "đạt ma phổ độ tặng 100% sát thương hệ kim",
                    hp: randomNum(11130, 11120, 11110),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "kim cang chú tăng phản đòn sát thương 40%",
                    hp: randomNum(11200, 11100, 11150),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng 30% giáp khi vào trận đấu",
                    hp: randomNum(11130, 11120, 11110),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        }, {
            name: "lục phiến",
            type: 'kim',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/m7CqvMz.png",
                front: "https://i.imgur.com/71KZ8y3.png",
                back: "https://i.imgur.com/71KZ8y3.png",
                deranged: "https://i.imgur.com/71KZ8y3.png",
                sleep: "https://i.imgur.com/71KZ8y3.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây 100% sát thương hệ âm",
                    hp: randomNum(11160, 11130, 11115),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "gây 100% sát thương hệ hỏa",
                    hp: randomNum(11180, 11150, 11130),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "gây 100% sát thương hệ thủy",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "vào trận đấu tăng 100% sát thương chí mạng",
                    hp: randomNum(11200, 11150, 11100),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        }, {
            name: "vạn thú trang",
            type: 'moc',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/UoTZku7.png",
                front: "https://i.imgur.com/QIKBo8B.png",
                back: "https://i.imgur.com/QIKBo8B.png",
                deranged: "https://i.imgur.com/QIKBo8B.png",
                sleep: "https://i.imgur.com/QIKBo8B.png"
            },
            hp: {
                current: 35000,
                total: 35000
            },
            attacks: [
                {
                    name: "tăng 100% máu khi vào trận",
                    hp: randomNum(11500, 11300, 11200),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng sát thương hệ mộc 100%",
                    hp: randomNum(11130, 11125, 11115),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tăng lực tay cơ bản 150% và mê hoặc đối phương ",
                    hp: randomNum(11150, 31110, 11120),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 100% lực tay cơ bản khi vào trận đấu",
                    hp: randomNum(11150, 11140, 11125),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }
            ]
        }, {
            name: "mặc gia",
            type: 'moc',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/GiXp2Dz.png",
                front: "https://i.imgur.com/U2OhrD4.png",
                back: "https://i.imgur.com/U2OhrD4.png",
                deranged: "https://i.imgur.com/U2OhrD4.png",
                sleep: "https://i.imgur.com/U2OhrD4.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "gây sát thương hệ mộc 100%",
                    hp: randomNum(11500, 11300, 11200),
                    avail: {
                        total: 5,
                        remaining: 5
                    }
                }, {
                    name: "tăng 100% máu khi vào trận đấu",
                    hp: randomNum(11150, 11100, 15110),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "lập tức hồi 100% máu cho đồng minh trong vòng 3s và gây 100% sát thương hệ mộc",
                    hp: randomNum(11150, 11130, 11120),
                    avail: {
                        total: 15,
                        remaining: 5
                    }
                }, {
                    name: "tăng 10% tấn công cơ bản",
                    hp: randomNum(11130, 11120, 11110),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        }, {
            name: "cửu lê",
            type: 'moc',
            weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/6btTf8l.png",
                front: "https://i.imgur.com/pECd0OM.png",
                back: "https://i.imgur.com/pECd0OM.png",
                deranged: "https://i.imgur.com/pECd0OM.png",
                sleep: "https://i.imgur.com/pECd0OM.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    img: "https://i.imgur.com/fwOQxbi.png",
                    name: "tăng sát thương hệ mộc 50%",
                    img_attack: "https://i.imgur.com/xW2aVkq.gif",
                    hp: randomNum(9000, 8930, 8820),
                    avail: {
                        total: 30,
                        remaining: 30
                    }
                }, {
                    img: "https://i.imgur.com/wGuAgAa.png",
                    name: "tăng 100% máu khi vào trận đấu",
                   img_attack: "https://i.imgur.com/xW2aVkq.gif",
                    hp: randomNum(8150, 8100, 8250),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    img: "https://i.imgur.com/nvwZNa4.png",
                    name: "hồi sinh đồng minh tăng 50% máu cho đồng minh gây 20% sát thươn diện rộng",
                   img_attack: "https://i.imgur.com/xW2aVkq.gif",
                    hp: randomNum(9200, 9100, 9100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    img: "https://i.imgur.com/Al01qiX.png",
                    name: "tăng 10% tấn công cơ bản",
                   img_attack: "https://i.imgur.com/xW2aVkq.gif",
                    hp: randomNum(9830, 9720, 8710),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }
            ]
        }, {
            name: "đoàn thị",
            type: 'moc',
             weakness: ['null'],
            resistance: ['null'],
            img: {
                default: "https://i.imgur.com/AzbZYqH.png",
                front: "https://i.imgur.com/XVc8hmK.png",
                back: "https://i.imgur.com/XVc8hmK.png"
            },
            hp: {
                current: 25000,
                total: 25000
            },
            attacks: [
                {
                    name: "tăng 50% máu khi vào trận đấu",
                    hp: randomNum(11200, 11100, 11150),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "tăng 10% hồi máu và chuyển hóa sát thương thành máu",
                    hp: randomNum(11150, 31110, 11120),
                    avail: {
                        total: 10,
                        remaining: 10
                    }
                }, {
                    name: "khi đồng minh thấp máu lập tức hồi 50% máu gây 30% sát thương",
                    hp: randomNum(11200, 11150, 11100),
                    avail: {
                        total: 15,
                        remaining: 15
                    }
                }, {
                    name: "tấn công hệ mộc tăng 30%",
                    hp: randomNum(11100, 11150, 11130),
                    avail: {
                        total: 20,
                        remaining: 20
                    }
                }
            ]
        }
    ];
}
    // ///////////////////////////////////////////
    // UTILITY
    // ///////////////////////////////////////////
    // RANDOM NUMBER GENERATOR
    // min is optional
    function randomNum(max, min) {
        // generate a random number

        // min not required
        if (min === undefined || min === "" || min === null) { // min default value
            min = 0;
        }

        // random number, yay
        return Math.floor(Math.random() * (max - min) + min);
    }

    // CHARACTER BUILD
    // build the character UI
    function populateChar(container, character) { // which img
        var facing = "front";
        if (character === "hero") {
            // we see the back of our hero
            // a real hero faces danger
            facing = "back";
        }

        // build the character
        container.append('<section class="char"><img src="' + gameData[character].img[facing] + '" alt="' + gameData[character].name + '"><aside class="data"><h2>' + gameData[character].name + '</h2><div><div class="contain-data"><img class="avtar-hero" src="' + gameData[character].img[facing] + '"></img><progress max="' + gameData[character].hp.total + '"></progress></div><p><span>' + gameData[character].hp.current + "</span>/" + gameData[character].hp.total + "</p></div></aside></section>");
    }

    // ATTACK MULTIPLIER
    // modify attack value for weaknesses & strengths
    function attackMultiplier(attacker, curAttack) {
        var defender = "enemy";
        if (attacker === "enemy") {
            defender = "hero";
        }

        if (gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0) { // weakness exists
            curAttack.hp *= 2;
        }

        if (gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0) { // weakness exists
            curAttack.hp /= 2;
        }

        curAttack.hp = Math.floor(curAttack.hp);
        return curAttack.hp;
    }

    // SFX PLAYER
    // stops music and plays sfx
    function playSound(name) { // load sfx src
        $("audio.sfx").attr("src", music[name]);
        // pause game music
        $("audio.music")[0].pause();
        // character announce yourself
        $("audio.sfx")[0].play();

        // timeout to stop music at given point
        setTimeout(function () { // pause the sfx
            $("audio.sfx")[0].pause();
            // start the music again
            // $('audio.music')[0].play();
            // reset the sfx
            $("audio.sfx")[0].currentTime = 0;
        }, 2000);
    }

    // HP BAR ANIMATION
    // stop and set health bar
    function setHP() { // stop health animation and set value
        clearInterval(defendProgressInt);
        clearInterval(progressInt);
        $(".stadium .enemy progress").val(gameData.enemy.hp.current);
        $(".stadium .hero progress").val(gameData.hero.hp.current);
    }

    // ///////////////////////////////////////////
    // RESET
    // ///////////////////////////////////////////
    function resetGame() { // set default values for game variables
        buildVars();

        // clear the stadium
        $(".hero").empty();
        $(".enemy").empty();

        // reset
        $(".attack-list li").unbind("click");
        $(".attack-list").empty();
        $(".stadium .enemy").css({ padding: "0" });
        $(".instructions p").text("Lực Chiến");
        $(".instructions h20").text("( 76.817K )");
        // set & start the opening game music
        $("audio.music").attr("src", music["opening"]);
        // $('audio.music')[0].play();

        // empty characters
        $(".characters").empty();
        $(".characters").removeClass("hidden");

        for (var i in characters) { // build the character list
            if (characters[i].name != "thiên sơn" && characters[i].name != "mật tông" && characters[i].name != "từ hàng") {
                $(".characters").append('<div class="char-container"><img src="' + characters[i].img.default + '" alt="' + characters[i].name + '"><h2>' + characters[i].name + '</h2><span class="type ' + characters[i].type + '"></span></div>');
            }
        }
    }

    resetGame();

    $(".logo").click(function () {
        resetGame();
    });

    // ///////////////////////////////////////////
    // CHARACTER CHOICE
    // ///////////////////////////////////////////
    $(".char-container").click(function () {
        // you have chosen a character
        // your chosen character name
        var name = $(this).children("h2").text().toLowerCase();
        let character_list = document.querySelector(".characters");

        switch (gameData.step // switch for the current step in the game
        ) {
            case 1:
                // step 1: choose your hero
                for (var i in characters) {
                    if (characters[i].name === name) { // find and save your chosen hero's data
                        gameData.hero = characters[i];
                    }
                }

                // remove the character from the available list
                var char = $(this).remove();
                // build my hero
                populateChar($(".stadium .hero"), "hero");

                for (var i in gameData.hero.attacks) { // populate attack list
                    $(".attack-list").append("<li><img src=" + gameData.hero.attacks[i].img + '></img><p class="attack-name"><strong  data-attack=' + gameData.hero.attacks[i].img_attack + ">" + gameData.hero.attacks[i].name + '</strong></p><p class="attack-count"><small><span>' + gameData.hero.attacks[i].avail.remaining + "</span>/" + gameData.hero.attacks[i].avail.total + "</small></p></li>");
                }

                if (amount_health > 0) {
                    $(".attack-list").append('<li class="skill_health" data-name="' + gameData.hero.name + '"><img src="https://lienquan.garena.vn/files/skill/icon/297bc5eb55eee8e7d551bc1ea2e3dde258b8e5e0f2eb1.png"></img><p class="attack-name"><strong>health</strong></p><p class="attack-count"><small><span></span>/</small></p></li>');
                }

                $(".attack-list").addClass("disabled");

                // update instructions
                $(".instructions p").text("Lực Chiến");
                // set health bar value
                $(".stadium .hero progress").val(gameData.hero.hp.current);

                // let your hero roar
                playSound(name);

                // move on to choosing an enemy
                gameData.step = 2;

                character_list.style.display = "flex";
                break;
            case 2:
                // step 2: choose your enemy
                for (var i in characters) {
                    if (characters[i].name === name) { // find and save the enemy data
                        gameData.enemy = characters[i];
                    }
                }

                // remove the enemy from the list
                var char = $(this).remove();
                // build the enemy
                populateChar($(".stadium .enemy"), "enemy");
                // pad the stadium - give them some breathing room
                $(".stadium .enemy").css({ padding: "25px 0" });

                // update instructions
                $(".instructions p").text("Lực Chiến");

                // hide the hero list
                // $('.characters').children().slideUp('500', function () {
                //     $('.characters').addClass('hidden');
                // });

                character_list.style.display = "none";

                // update enemy health bar value
                $(".stadium .enemy progress").val(gameData.enemy.hp.current);

                // the enemy whimpers in fear
                playSound(name);

                // update step to attack phase and bind click events
                gameData.step = 3;
                attackList();
                break;
        }

        let character_user = document.querySelector(".character-user");
        character_user.style.display = "none";

        let stadium = document.querySelector(".stadium");
        stadium.style.height = "650px";

        let slides = document.querySelector(".slides");
        slides.style.display = "flex";
    });

    function displayNoneSkill() {
        let my_attack = document.querySelector(".my_attack");
        my_attack.style.display = "none";

        let enemy_hp = document.querySelector(".current_hp");
        enemy_hp.textContent = curAttack.hp;
        enemy_hp.style.animation = "unset";
        enemy_hp.style.opacity = "0";

        clearTimeout(timeSkill);
    }
    // ///////////////////////////////////////////
    // HERO ATTACK
    // ///////////////////////////////////////////
    function attackEnemy(that, callback) { // attack the enemy!!!
        let hero_attack = "";
        // name of your attack
        attackName = that.children(".attack-name").children("strong").text().toLowerCase();
        hero_attack = that.children(".attack-name").children("strong")[0].getAttribute("data-attack");

        for (var i in gameData.hero.attacks) {
            if (gameData.hero.attacks[i].name === attackName) { // get chosen attack data
                curAttack = gameData.hero.attacks[i];
            }
        }

        if (attackName != "health") { // if there are attacks left

            let my_attack = document.querySelector(".my_attack");
            my_attack.setAttribute("src", hero_attack);
            my_attack.style.display = "block";

            let enemy_hp = document.querySelector(".current_hp");
            enemy_hp.textContent = curAttack.hp;
            enemy_hp.style.animation = "slide_curent_hp 2.5s linear forwards";

            // sau 3s xóa ảnh skill
            timeSkill = setTimeout(displayNoneSkill, 2000);

            if (curAttack.avail.remaining > 0) { // attack!!!
                $(".attack-list").addClass("disabled");

                $(".hero .char img").animate({
                    "margin-left": "-30px",
                    "margin-top": "10px"
                }, 50, "swing");
                $(".hero .char img").animate({
                    "margin-left": "30px",
                    "margin-top": "-10px"
                }, 50, "swing");
                $(".hero .char img").animate({
                    "margin-left": "0px",
                    "margin-top": "0px"
                }, 50, "swing");

                // attack enemy
                gameData.enemy.hp.current -= attackMultiplier("hero", curAttack);

                if (gameData.enemy.hp.current <= 0) { // Enemy is dead

                    clearModal();
                    document.querySelector(".result_battle").textContent = "Vượt Ải Thành Công";
                    document.querySelector(".result_title").textContent = "Bạn đã mạnh hơn rất nhiều rồi. Cố gắng hơn nữa nhé !";
                    let image_item = "";
                    // let inventories = document.querySelectorAll('.inventory_item');
                    let random_broken_item = Math.floor(Math.random() * 4);

                    // ngẫu nhiên rơi vật phẩm
                    if (random_broken_item > 0) {
                        document.querySelector(".result_suggest--text").textContent = "Vật phẩm nhận được:";
                        let arrItem = [];

                        for (let i = 0; i < random_broken_item; i++) {
                            let indexItem = Math.floor(Math.random() * items_win.length);
                            let item = items_win[indexItem];

                            // ty le roi do
                            // neu ty le 10 - 20% thi roi do hiem
                            // ty le 1-10% roi do cuc hiem
                            // con lai roi do thuong

                            let rate = (Math.floor(Math.random() * 10) + 1) * 0.1 * 100;

                            if (rate > 20) {
                                while (item.type === "hiếm" || item.type === "cực hiếm") {
                                    let indexItem = Math.floor(Math.random() * items_win.length);
                                    item = items_win[indexItem];
                                }
                            } else {
                                if (rate > 10) {
                                    while (item.type === "cực hiếm") {
                                        let indexItem = Math.floor(Math.random() * items_win.length);
                                        item = items_win[indexItem];
                                    }
                                }
                            }

                            let check = false;
                            let count = 0;

                            if (item.type !== "vang") {
                                count = item.amount = Math.floor(Math.random() * 4) + 1;
                            } else {
                                count = item.amount = Math.floor(Math.random() * 100) + 1;
                            }

                            if (count === 0) {
                                count = 1;
                            }

                            if (arrItem.length > 0) {
                                for (let k = 0; k < arrItem.length; k++) {
                                    if (arrItem[k].id === item.id) {
                                        arrItem[k].amount += count;
                                        check = false;
                                        break;
                                    } else {
                                        check = true;
                                    }
                                }
                            } else {
                                arrItem.push(item);
                            }

                            if (check) {
                                arrItem.push(item);
                            }
                        }
                        arrItem.forEach((p) => {
                            let id_item = p.id;
                            let type = p.type;
                            let amount = p.amount;

                            // thêm itme vào kho đồ

                            if (p.type !== "vang") {
                                $.post("./KhieuChien/insertInventories", {
                                    id_item: id_item,
                                    amount: amount
                                }, function (response) { });
                            } else {
                                $.post("./KhieuChien/updateCoin", {
                                    coin: amount
                                }, function (response) {
                                    $(".logined_coin").html("<i class='fa-solid fa-coins'></i> " + response + "");
                                });
                            }

                            if (type === "cực hiếm") {
                                image_item += `<div class='inventory_item result_item' style='position: relative; border: 1px solid #FFFF00'>
                                                    <img class="result_image" src=` + p.img + ` alt="">
                                                    <p class='count_item count_item__break'>` + p.amount + `</p>

                                                    <div class="details">
                                                        <div class="detail_item">
                                                            <div class="detail_item--image">
                                                                <img src="` + p.img + `" alt="">
                                                            </div>
                                                
                                                            <div class="detail_item--info">
                                                                <h3 class="detail_item--name">` + p.name + `</h3>
                                                                <p class="detail_item--attack">` + p.attribute_1 + `</p>
                                                                <p class="detail_item--defense">` + p.attribute_2 + `</p>
                                                                <p class="detail_item--blood">` + p.attribute_3 + `</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;
                            } else if (type === "hiếm") {
                                image_item += `<div class='inventory_item result_item' style='position: relative; border: 1px solid #FF3366'>
                                                    <img class="result_image" src=` + p.img + ` alt="">
                                                    <p class='count_item count_item__break'>` + p.amount + `</p>

                                                    <div class="details">
                                                        <div class="detail_item">
                                                            <div class="detail_item--image">
                                                                <img src="` + p.img + `" alt="">
                                                            </div>
                                                
                                                            <div class="detail_item--info">
                                                                <h3 class="detail_item--name">` + p.name + `</h3>
                                                                <p class="detail_item--attack">` + p.attribute_1 + `</p>
                                                                <p class="detail_item--defense">` + p.attribute_2 + `</p>
                                                                <p class="detail_item--blood">` + p.attribute_3 + `</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;
                            } else {
                                image_item += `<div class='inventory_item result_item' style='position: relative; border: 1px solid rgb(33 33 33 / 75%)'>
                                                    <img class="result_image" src=` + p.img + ` alt="">
                                                    <p class='count_item count_item__break'>` + p.amount + `</p>`;

                                if (type !== "vang") {
                                    image_item += `<div class="details">
										<div class="detail_item">
											<div class="detail_item--image">
												<img src="` + p.img + `" alt="">
											</div>
											<div class="detail_item--info">
												<h3 class="detail_item--name">` + p.name + `</h3>
												<p class="detail_item--attack">` + p.attribute_1 + `</p>
										<p class="detail_item--defense">` + p.attribute_2 + `</p>
										 <p class="detail_item--blood">` + p.attribute_3 + `</p>
										</div>
									</div>
								</div>`;
                                }

                                image_item += ` </div>`;
                            }
                        });
                    } else {
                        image_item = "<p>Không có vật phẩm nào rơi!</p>";
                    }

                    $(".result_images").html(image_item);

                    loadInventories();

                    $(".modal-out").slideDown("400");
                    modalControls();

                    gameData.enemy.hp.current = 0;
                    // clear the stadium of the dead
                    $(".enemy").empty();
                    // show the available characters
                    $(".characters").removeClass("hidden");
                    $(".characters").children().slideDown("500");

                    gameData.enemy = {};

                    // choose enemy
                    gameData.step = 2;
                    // unbind click for reset
                    $(".attack-list li").unbind("click");

                    let character_list = document.querySelector(".characters");
                    character_list.style.display = "flex";
                } else {
                    // enemy is still alive (Attack!!!)

                    // subtract attack
                    curAttack.avail.remaining--;

                    // interval to animate health bar
                    progressInt = setInterval(function () { // get current value of health bar
                        var val = $(".stadium .enemy progress").val();
                        val--;

                        // update health bar value
                        $(".stadium .enemy progress").val(val);

                        if (val === gameData.enemy.hp.current) { // if you've hit your target clear interval
                            clearInterval(progressInt);
                            progressComplete = 1;
                        }
                    }, 1);

                    // update health numbers
                    $(".stadium .enemy .data p span").text(gameData.enemy.hp.current);
                    that.children(".attack-count").children("small").children("span").text(curAttack.avail.remaining);

                    // wait a second to recover
                    setTimeout(function () { // now defend that attack
                        defend(that);
                    }, 1000);
                }
            }
        } else {
            if (amount_health > 0) {
                if (gameData.hero.hp.current < gameData.hero.hp.total) {
                    if (timeHealth > 0) { } else {
                        timeHealth = document.cookie = 10;

                        timeIntervalID = setInterval(myTimeHealt, 1000);

                        gameData.hero.hp.current = gameData.hero.hp.current + gameData.hero.hp.current * 0.2;
                        if (gameData.hero.hp.current >= gameData.hero.hp.total) {
                            gameData.hero.hp.current = gameData.hero.hp.total;
                        }

                        $(".stadium .hero progress").val(gameData.hero.hp.current);
                        $(".stadium .hero .data p span").text(gameData.hero.hp.current);

                        amount_health--;

                        if (amount_health == 0) {
                            let skill_health = document.querySelector(".skill_health");
                            skill_health.style.display = "none";
                        }
                    }
                }
            }
        }
    }

    function myTimeHealt() {
        timeHealth--;

        if (timeHealth == 0) {
            clearInterval(timeIntervalID);
        }
    }

    // ///////////////////////////////////////////
    // ENEMY ATTACK (DEFEND)
    // ///////////////////////////////////////////
    function defend(that) { // random attack
        randInt = randomNum(gameData.enemy.attacks.length);
        enemyAttack = gameData.enemy.attacks[randInt];

        // enemy attack animation sequence
        $(".enemy .char img").animate({
            "margin-right": "-30px",
            "margin-top": "-10px"
        }, 50, "swing");
        $(".enemy .char img").animate({
            "margin-right": "30px",
            "margin-top": "10px"
        }, 50, "swing");
        $(".enemy .char img").animate({
            "margin-right": "0px",
            "margin-top": "0px"
        }, 50, "swing");

        // attack the hero
        gameData.hero.hp.current -= attackMultiplier("enemy", enemyAttack);

        if (gameData.hero.hp.current <= 0) { // ding dong the hero's dead

            if (live_characters > 1) {
                live_characters--;
            } else if (live_characters == 1) {
                alert("Bạn đã hết tướng. Bạn có muốn chơi lại không!!!");
                location.reload();
            }

            clearModal();
            document.querySelector(".result_battle").textContent = "Khiêu Chiến Thất Bại";
            document.querySelector(".result_title").textContent = "Thực Lực Còn Kém Lắm !";
            document.querySelector(".result_suggest--text").textContent = "Gợi Ý:";
            document.querySelector(".result_suggest--text").textContent = "Vượt Ải Dương Ra Tỉ Lệ Phôi SSR và SSSR !";
            document.querySelector(".result_suggest--text").textContent = "Vượt Ải Mộc Ra Mảnh đổi dạng !";

            let result_images = document.querySelector(".result_images");

            while (result_images.firstChild) {
                result_images.removeChild(result_images.lastChild);
            }

            $(".modal-out").slideDown("400");
            modalControls();

            gameData.hero.hp.current = 0;
            // resetGame();

            buildVars();

            // clear the stadium
            $(".hero").empty();
            $(".enemy").empty();

            // reset
            $(".attack-list li").unbind("click");
            $(".attack-list").empty();
            $(".stadium .enemy").css({ padding: "0" });
            $(".instructions p").text("Lực Chiến");
            $(".instructions h20").text("( 76.817K )");
            // set & start the opening game music
            $("audio.music").attr("src", music["opening"]);
            // $('audio.music')[0].play();

            // empty characters
            // $('.characters').empty();
            // $('.characters').removeClass('hidden');

            let character_list = document.querySelector(".characters");
            character_list.style.display = "none";

            let character_user = document.querySelector(".character-user");
            character_user.style.display = "flex";

            let stadium = document.querySelector(".stadium");
            stadium.style.height = "870px";

            let slides = document.querySelector(".slides");
            slides.style.display = "none";
        } else {
            // the hero lives

            // subtract attack from enemy count
            gameData.enemy.attacks[randInt].avail.remaining--;

            // health bar animation
            defendProgressInt = setInterval(function () { // get current val of health bar
                var val = $(".stadium .hero progress").val();
                val--;

                // update health bar value
                $(".stadium .hero progress").val(val);

                if (val === gameData.hero.hp.current) { // stop the interval when target is attained
                    clearInterval(defendProgressInt);
                    defendProgressComplete = 1;
                }
            }, 1);

            // update health value
            $(".stadium .hero .data p span").text(gameData.hero.hp.current);

            setTimeout(function () {
                if (defendProgressComplete && progressComplete) {
                    $(".attack-list").removeClass("disabled");
                } else {
                    setHP();
                    $(".attack-list").removeClass("disabled");
                }
            }, 500);
        }
    }

    // ///////////////////////////////////////////
    // ATTACK SEQUENCE
    // ///////////////////////////////////////////
    function attackList() { // attack instantiation
        $(".attack-list").removeClass("disabled");

        $(".attack-list li").click(function () { // attack choice is clicked
            var doAttack = 1;

            if (gameData.step === 3) { // attack step - start attack sequence
                attackEnemy($(this));
            }
        });

        setTimeout(function () { // characters chosen - set & start the battle music
            $("audio.music").attr("src", music["battle"]);
            // $('audio.music')[0].play();
        }, 1500);
    }

    // ///////////////////////////////////////////
    // MODAL
    // ///////////////////////////////////////////
    function modalControls() {
        $(".modal-out").click(function () {
            $(this).slideUp("400");
        });
        $(".modal-in .close").click(function (e) {
            $(".modal-out").slideUp("400");
        });

        $(".modal-in").click(function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
    }

    function clearModal() {
        $(".modal-in header").empty();
        $(".modal-in section").empty();
        $(".modal-in footer").empty();
        setHP();
    }

    $("#chatboxopen").click(function (param) {
        let inventoryOpen = document.querySelector(".inventory");
        inventoryOpen.style.width = "450px";
        document.querySelector(".inventory").style.overflow = "unset";
    });

    $("#chatboxclose").click(function (param) {
        let inventoryOpen = document.querySelector(".inventory");
        inventoryOpen.style.width = "0px";
        document.querySelector(".inventory").style.overflow = "hidden";
    });

    // đổi sân đấu
    let battle_ground = document.querySelectorAll(".item-slide");
    battle_ground.forEach((p) => {
        p.addEventListener("click", function () {
            let url = p.getAttribute("data-img");
            let battle = document.querySelector(".stadium");
            battle.style.backgroundImage = "url(" + url + ")";
        });
    });

    $(".yy_btn").click(function () {
        alert("server hiện tại đang bảo trì để nâng cấp. Vui lòng quây lại sau");

        location.reload();
    });
});
