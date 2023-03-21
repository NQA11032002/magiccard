$(document).ready(function () {
	var music = {},
		typeSprite = "",
		types = [],
		gameData = {};
	(attackName = ""), (curAttack = {}), (randInt = 0), (enemyAttack = {}), (characters = []), (defendProgressInt = null), (defendProgressComplete = 0), (progressInt = null), (items_win = []), (timeHealth = 0), (live_characters = 3), (timeSkill = 3);
	(timeIntervalID = null), (progressComplete = 0);
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

			let checkShow = false;

			//hiển thị thanh chức năng trang bị
			$(".inventory_item").click(function () {
				let usser_select = document.querySelectorAll(".user_select--equipment");
				usser_select.forEach((p) => {
					p.style.display = "none";
				});

				$(this).children(".user_select--equipment").css("display", "flex");

				$(this).children(".details").css("display", "none");
			});

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
                console.log(position);
				if (position.top > 300) {
					$(this).children(".details").css("top", "-200px");
				}
				
				if (position.top > 800) {
					$(this).children(".details").css("top", "-187px");
				}

				if (position.left > 600) {
					$(this).children(".details").css("left", "80px");
				}
				
				if (position.left > 1023) {
					$(this).children(".details").css("left", "-30px");
				}
			});

			//đeo trang bị
			$(".weared__item").click(function () {
				let id_equipment = $(this).attr("data-id");

				$.post("./itemsController/updateStatusEquipment", { id_equipment: id_equipment }, function (response) {
					loadInventories();
					loadWearEquipment();
					$(".header-power").html("Lực chiến: " + response);
				});
			});
		});
	}

	//tháo trang bị
	$(".remove__equipment").click(function () {
		let id = $(this).attr("data-id");
		let id_item = $(this).attr("data-id_item");
		let name = $(this).attr("data-id_name");
		$.post("./itemsController/removeEquipment", { id: id, id_item: id_item }, function (response) {
			loadInventories();
			loadWearEquipment();
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

			let list_remove__equipment = document.querySelectorAll(".remove__equipment");
			list_remove__equipment.forEach((p) => {
				p.style.display = "none";
			});
		});
	});

	//danh sách trang bị đang mặc
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

	//chọn trang bị đang mặc
	$(".wear_equipment").click(function () {
		let list_remove__equipment = document.querySelectorAll(".remove__equipment");
		list_remove__equipment.forEach((p) => {
			p.style.display = "none";
		});

		$(this).children(".remove__equipment").css("display", "block");
	});

	//public mang trang bị
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
			machop: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/viaskmobgb/213-machop.mp3",
		};

		typeSprite = "http://orig15.deviantart.net/24d8/f/2011/057/3/5/ge___energy_type_icons_by_aschefield101-d3agp02.png";
		types = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

		// the data for the game in play
		gameData = {
			step: 1,
			hero: {},
			enemy: {},
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
				name: "bro tim",
				type: "am",
				weakness: ["duong"],
				resistance: ["thuy"],
				img: {
					default: "./public/images/hEjnPfd.png",
					front: "./public/images/3PmpuoS.png",
					back: "./public/images/3PmpuoS.png",
				},
				hp: {
					current: 800000,
					total: 800000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/19c9c4d9e177ee23ea0d5a9cefafb96a583e9dfef0882.png",
						name: "tăng sát thương hệ âm 50% tăng 20% máu khi tham gia trận đấu",
						hp: randomNum(200000, 150000, 50000),
						avail: {
							total: 25,
							remaining: 25,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/b0e3537a79816da5c312de91ee82217c583e9e469712e.png",
						name: "xuyên kháng giáp 10% tăng 10% sát thương cơ bản",
						hp: randomNum(100000, 50000, 300000),
						avail: {
							total: 25,
							remaining: 25,
						},
					},
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/d16cdf12dab4f627fe439a5e8252c4f4583e9e261cfaf.png",
						name: "tấn công cơ bản tăng + 500 và sát thương chí mạng 10%",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/4ea990168ba972f3dc2b74f4eb9a2ccf583e9e6523ec9.png",
						name: "gây hiệu ứng giảm hồi máu 20% và tăng sát thuong hệ dương 10%",
						hp: randomNum(200000, 150000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "thiên sơn",
				type: "am",
				weakness: ["duong"],
				resistance: ["thuy"],
				img: {
					default: "./public/images/mcUrnPv.png",
					front: "./public/images/mcUrnPv.png",
					back: "./public/images/mcUrnPv.png",
					deranged: "./public/images/mcUrnPv.png",
					sleep: "./public/images/mcUrnPv.png",
				},
				hp: {
					current: 700000,
					total: 700000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/b3fccac3d3894113f82174d3ec963500583e9cb3ac80c.png",
						img_attack: "./public/images/skill_gif.gif",
						name: "tăng 100% xuyên giáp hệ âm",
						hp: randomNum(500000, 500000, 500000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/1ec3d200fd56cb45b716d1d5ee94a746583e9d4397bca.png",
						name: "tăng lực tay cơ bản 500%",
						img_attack: "./public/images/skill_gift_3.gif",
						hp: randomNum(500000, 500000, 500000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/c40655d6952c05bcb1e43aec3037328e583e9d0761f74.png",
						name: "thiên sơn bách thả lộ kết liễu đối phương khi round 5",
						img_attack: "./public/images/skill_gift2.gif",
						hp: randomNum(500000, 500000),
						avail: {
							total: 1,
							remaining: 1,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/0fd55b686edc386f5f1937a09de2d1f1583e9d6a7fcc5.png",
						name: "tăng 100% sát thương chí mạng",
						img_attack: "./public/images/skill_gif.gif",
						hp: randomNum(500000, 500000, 500000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "thiên hạ hội",
				type: "am",
				weakness: ["duong"],
				resistance: ["thuy"],
				img: {
					default: "./public/images/FRYLUF0.png",
					front: "./public/images/AiAf3kf.png",
					back: "./public/images/AiAf3kf.png",
					deranged: "./public/images/AiAf3kf.png",
					sleep: "./public/images/AiAf3kf.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/f37dcb80bb5fbf602aed1389bbc354e9583e9f7c3831d.png",

						name: "tăng cho bản thân 70% tấn công cơ bản",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/9e2bb847f78fd378623a06995fb0311b583ea025bce15.png",

						name: "gây sát thương hệ dương 50% và hiệu ứng vào máu",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/c6588d59c1afa5baeed5fcd2510c392d583e9ff83495c.png",

						name: "tăng xuyên giáp 100% và xuyên kháng giáp 10%",
						hp: randomNum(700000, 500000, 300000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/470890bc984393b1c7b2e54fcc0c5635583ea08f28545.png",

						name: "gây 10% sát thương hệ mộc và giảm hồi máu 50%",
						hp: randomNum(250000, 150000, 50000),
						avail: {
							total: 20,
							remaining: 20,
						},
					},
				],
			},
			{
				name: "mật tông",
				type: "am",
				weakness: ["duong"],
				resistance: ["thuy"],
				img: {
					default: "./public/images/j7hQSAn.png",
					front: "./public/images/j7hQSAn.png",
					back: "./public/images/j7hQSAn.png",
					deranged: "./public/images/j7hQSAn.png",
					sleep: "./public/images/j7hQSAn.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/ede8901cd8ad08da6e9d727aab721b30583ea19737b62.png",

						name: "gây 50% sát thương hệ dương + 20% hút máu",
						hp: randomNum(200000, 180000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/0e6e0ee90d9b39ec1d12c1e2189333575840ec769b3b4.png",

						name: "tăng 50% sát thương cơ bản + 10% hút máu ",
						hp: randomNum(500000, 300000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/8e489944300fe5bad8bad805fed38a14583ea1e805fd5.png",

						name: "gây 500 sát thương cơ bản hệ âm",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/23cc07dc227dc8e80a2f506c00ca87525840ec99405da.png",

						name: "tăng chí mạng 100% + 100% sát thương hệ âm",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 20,
							remaining: 20,
						},
					},
				],
			},
			{
				name: "côn luân",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/0OHLCJq.png",
					front: "./public/images/I107zqI.png",
					back: "./public/images/I107zqI.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/7abdce75ba41db1cd1885528a94333b9583f8f0c775cf.png",

						name: "tăng 100% phòng thủ hệ âm gây 100% sát thương hệ âm",
						hp: randomNum(500000, 350000, 250000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/d7444475377539d29711d05b3052d1ba583f8f4e92489.png",

						name: "tăng 100% phòng thủ hệ dương gây 100% sát thương hệ dương",
						hp: randomNum(400000, 350000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/3fd35932afa8ccd33d19b5d76cb7828e583f8f2b47aab.png",

						name: "tăng 100% phòng thủ hệ thủy gây 100% sát thương hệ thủy",
						hp: randomNum(600000, 400000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/87193cc0086f381baa431a3c5fa00789583f8f7254474.png",

						name: "khi vào trận tăng 100% giáp",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "tiêu dao",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/sk7lJ5g.png",
					front: "./public/images/sk7lJ5g.png",
					back: "./public/images/sk7lJ5g.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/7f606055e10fb99d854d5f19884104fd5a2a4ecca4d81.png",
						img_attack: "./public/images/skill_1.gif",
						name: "gây cho mục tiêu 90% công cơ bản sát thương hệ kim",
						hp: randomNum(200000, 150000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/87193cc0086f381baa431a3c5fa00789583f8f7254474.png",
						img_attack: "./public/images/skill_2.gif",

						name: "gây 100% sát thương hệ mộc + 20% tàn phế",
						hp: randomNum(150000, 100000, 50000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/6678d992aeba66041ec7d4980756df7d583f9bcc06a9e.png",
						img_attack: "./public/images/skill_3.gif",

						name: "mỗi lần tấn công gây 50% sát thương hệ thủy",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/7f606055e10fb99d854d5f19884104fd5a2a4ecca4d81.png",
						img_attack: "./public/images/skill_1.gif",

						name: "tăng tỉ lệ bạo kích 100% sát thương hệ dương",
						hp: randomNum(300000, 200000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
				],
			},
			{
				name: "từ hàng",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/N7FXQj0.png",
					front: "./public/images/N7FXQj0.png",
					back: "./public/images/N7FXQj0.png",
					deranged: "./public/images/N7FXQj0.png",
					sleep: "./public/images/N7FXQj0.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/c4c30e2bbb92f6451616aad727d7e4f6583f91b76395c.png",

						name: "tăng 200% máu khi vào trận đấu",
						hp: randomNum(100000, 50000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/b423b60ace8fa24f232e0ea0b93139c2583f91dbc16a2.png",

						name: "gây sát thương hệ dương 200%",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/df3478164b28aa86cd357861f3bce209583f9214701d3.png",

						name: "từ hàng vào trận đấu tăng 100% khắc chế hệ dương gây 50% nội tại sát thương",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 25,
							remaining: 25,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/a926a11ef79ed1dceb0cba3b8a492a72583f91f585a13.png",

						name: "tăng 100% lực tay cơ bản",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
				],
			},
			{
				name: "võ đang",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/x3WfIyS.png",
					front: "./public/images/Sc1F7dG.png",
					back: "./public/images/Sc1F7dG.png",
					deranged: "./public/images/Sc1F7dG.png",
					sleep: "./public/images/Sc1F7dG.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/355a060b024823d1a0877d5bd8a9b10b583f92de1ccf5.png",

						name: "tăng cho bản thân 100% tấn công cơ bản",
						hp: randomNum(350000, 250000, 150000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/54ca5724142325af1a99a4c10e8ccf72583f933d68efb.png",

						name: "tăng 100% sát thương hệ dương",
						hp: randomNum(500000, 300000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/b9dbd19218465e0481692f202ca04de3583f931c2d638.png",

						name: "tăng xuyên giáp 100% và xuyên kháng giáp 10%",
						hp: randomNum(250000, 150000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/9a917293b0324ed65ab89625da69f728583f935c54e4f.png",

						name: "gây 10% sát thương hệ mộc và giảm hồi máu 50%",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "ẩn vân tông",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/32J3cp8.png",
					front: "./public/images/40RBCN4.png",
					back: "./public/images/40RBCN4.png",
					deranged: "./public/images/40RBCN4.png",
					sleep: "./public/images/40RBCN4.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/1ff46a17c8edeb23e5a18ba72dd95b885df33f0f8a2fe.png",

						name: "tăng 100% sát thương lực tay cơ bản",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/86702ec163da19f76a810a6dc3f387d35df33f4cac283.png",

						name: "xuyên giáp 100% và gây 50% sát thương hệ kim",
						hp: randomNum(1000000, 700000, 500000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/5dd0ed7d03c4e8950b2ac677f84ac99d5df33f6c51e16.png",

						name: "tăng 40% cơ bản và 10% hút máu gây 100% sát thương hệ dương",
						hp: randomNum(1000000, 500000, 300000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/281bcee21905d1b8d61901374191c0b35df33f5b1c5e6.png",

						name: "mỗi lần giết địch + dồn 25% hút máu gây 30% sát thương toàn diện",
						hp: randomNum(300000, 250000),
						avail: {
							total: 2,
							remaining: 2,
						},
					},
				],
			},
			{
				name: "thiên long",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/jrmVm3V.png",
					front: "./public/images/ZUItpoX.png",
					back: "./public/images/ZUItpoX.png",
					deranged: "./public/images/ZUItpoX.png",
					sleep: "./public/images/ZUItpoX.png",
				},
				hp: {
					current: 1200000,
					total: 1200000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/281bcee21905d1b8d61901374191c0b35df33f5b1c5e6.png",

						name: "chuyển hóa máu thành 100% sát thương hệ âm",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/281bcee21905d1b8d61901374191c0b35df33f5b1c5e6.png",

						name: "chuyển hóa sát thương hệ dương thành 20% sát thương cơ bản",
						hp: randomNum(250000, 150000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/281bcee21905d1b8d61901374191c0b35df33f5b1c5e6.png",

						name: "tăng tấn công cơ bản 30% sát thương hệ dương",
						hp: randomNum(500000, 300000, 100000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/281bcee21905d1b8d61901374191c0b35df33f5b1c5e6.png",

						name: "gây 100% xuyên giáp + 10% giảm hồi máu + 20% sát thương toàn diện",
						hp: randomNum(800000, 400000, 200000),
						avail: {
							total: 2,
							remaining: 2,
						},
					},
				],
			},
			{
				name: "thục sơn",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/wl8x3Ps.png",
					front: "./public/images/sWyXpN2.png",
					back: "./public/images/sWyXpN2.png",
					deranged: "./public/images/sWyXpN2.png",
					sleep: "./public/images/sWyXpN2.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/c05f01160ebc39a2f5f31593c0115332583f94ab3b644.png",

						name: "gây sát thương hệ dương 10% và 50% chí mạng",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/ede6e773ba9578bbad32f60bc4535736583f94c418812.png",

						name: "tăng lực tay 100% và sát thương cơ bản cộng dồn",
						hp: randomNum(350000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/29b04043c51909a37edfefa6a8cc7661583f94de863d0.png",

						name: "gây 100% sát thương và kèm 50% xuyên giáp",
						hp: randomNum(500000, 350000, 150000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/b6a0ace14b74a33e038ff259c57c7e2f583f94fb4c0d0.png",

						name: "gây 50% sát thương hệ âm",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "câu mang",
				type: "duong",
				weakness: ["moc"],
				resistance: ["am"],
				img: {
					default: "./public/images/xWh8ucc.png",
					front: "./public/images/7Chcs8g.png",
					back: "./public/images/7Chcs8g.png",
					deranged: "./public/images/7Chcs8g.png",
					sleep: "./public/images/7Chcs8g.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						img: "https://lienquan.garena.vn/files/skill/icon/6d9085b5467e44716e7a765f728522aa583f9beede5c9.png",

						name: "tăng tấn công cơ bản hệ dương 100%",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/522f042f716be264659132a46985900b583f9c136cfab.png",

						name: "tăng 100% sát thương chí mạng 50%",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/445011d5eafb60f7618e27bc3a3299b9583f9c36bf0f2.png",

						name: "gây cho đối phương hiệu ứng giảm hồi máu và gây 90% xuyên giáp",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/8e79f7702f1972e063a7e1f2b1c257ff583f9c4f499e2.png",

						name: "tấn công cơ bản tăng 40% hệ dương",
						hp: randomNum(350000, 250000, 150000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "tung sơn",
				type: "thuy",
				weakness: ["am"],
				resistance: ["hoa"],
				img: {
					default: "./public/images/sceOUeh.png",
					front: "./public/images/xGDd20Y.png",
					back: "./public/images/xGDd20Y.png",
				},
				hp: {
					current: 500000,
					total: 500000,
				},
				attacks: [
					{
						img: "	https://lienquan.garena.vn/files/skill/icon/77c4fc2fecb4f45937a67e219fbc0f81583f9b70370fd.png",

						name: "gây 30% sát thương cơ bản hệ thủy",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/539eac97d51df1d9b8cbd53b4f504f28583f9b9606598.png",

						name: "gây 415 sát thương chuẩn + kèm theo hiệu ứng vào máu",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/6678d992aeba66041ec7d4980756df7d583f9bcc06a9e.png",

						name: "mỗi lần tấn công tăng 10% lực tay cơ bản",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						img: "https://lienquan.garena.vn/files/skill/icon/e36b5b93879dd38e763ad069e0421b80583f9bb00362b.png",

						name: "tăng vĩnh viễn 50% tấn công cơ bản",
						hp: randomNum(100000, 50000, 30000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "cổ mộ",
				type: "thuy",
				weakness: ["am"],
				resistance: ["hoa"],
				img: {
					default: "./public/images/YbrZEF4.png",
					front: "./public/images/iVwEpgh.png",
					back: "./public/images/iVwEpgh.png",
					deranged: "./public/images/iVwEpgh.png",
					sleep: "./public/images/iVwEpgh.png",
				},
				hp: {
					current: 1200000,
					total: 1200000,
				},
				attacks: [
					{
						name: "cổ mộ độc gây sát thương 100% + giảm hồi máu 50%",
						hp: randomNum(200000, 150000, 50000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						name: "tăng tấn công cơ bản 10% + chí mạng 10%",
						hp: randomNum(280000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng xuyên giáp 10% + hút máu 5%",
						hp: randomNum(250000, 100000, 50000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "cổ mộ thần sát thương 100% khi đối thủ bị giảm hồi máu",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 20,
							remaining: 20,
						},
					},
				],
			},
			{
				name: "thần thủy cung",
				type: "thuy",
				weakness: ["am"],
				resistance: ["hoa"],
				img: {
					default: "./public/images/WwLMmRI.png",
					front: "./public/images/HBzuluN.png",
					back: "./public/images/HBzuluN.png",
					deranged: "./public/images/HBzuluN.png",
					sleep: "./public/images/HBzuluN.png",
				},
				hp: {
					current: 900000,
					total: 900000,
				},
				attacks: [
					{
						name: "gây 100% sát thương hệ mộc",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "tăng 100% sát thương chí mạng hệ âm",
						hp: randomNum(500000, 300000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "gây cho đối thủ hiệu ứng giảm hồi máu 5%",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "khi vào trận đấu tăng 50% máu",
						hp: randomNum(150000, 100000, 50000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
				],
			},
			{
				name: "thiên cơ",
				type: "thuy",
				weakness: ["am"],
				resistance: ["hoa"],
				img: {
					default: "./public/images/Cd38o1y.png",
					front: "./public/images/TyuuRFP.png",
					back: "./public/images/TyuuRFP.png",
					deranged: "./public/images/TyuuRFP.png",
					sleep: "./public/images/TyuuRFP.png",
				},
				hp: {
					current: 1500000,
					total: 1500000,
				},
				attacks: [
					{
						name: "có tỉ lệ 5% đóng băng đối thủ và giảm 50% giáp",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						name: "giảm sát thương cơ bản đối thủ 20%",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tỉ lệ đóng băng 5% và giảm hút máu đối thủ 100%",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						name: "thủy triều thiên cơ gây sát thương hệ thủy 100%",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 20,
							remaining: 20,
						},
					},
				],
			},
			{
				name: "cái bang top 1",
				type: "hoa",
				weakness: ["thuy"],
				resistance: ["kim"],
				img: {
					default: "./public/images/cRQ92Kw.png",
					front: "./public/images/e0ffA3E.png",
					back: "./public/images/e0ffA3E.png",
					deranged: "./public/images/e0ffA3E.png",
					sleep: "./public/images/e0ffA3E.png",
				},
				hp: {
					current: 1200000,
					total: 1200000,
				},
				attacks: [
					{
						name: "tăng 100% máu khi vào trận tăng 10% sát thương hệ hỏa",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng sát thương hệ hỏa 100%",
						hp: randomNum(300000, 250000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "túy điệp cuồng vũ tăng 100% sát thương",
						hp: randomNum(1000000, 500000, 300000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
					{
						name: "tăng 100% lực tay cơ bản khi vào trận đấu",
						hp: randomNum(500000, 400000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "long môn",
				type: "hoa",
				weakness: ["thuy"],
				resistance: ["kim"],
				img: {
					default: "./public/images/GDwYg4P.png",
					front: "./public/images/Fmih95t.png",
					back: "./public/images/Fmih95t.png",
					deranged: "./public/images/Fmih95t.png",
					sleep: "./public/images/Fmih95t.png",
				},
				hp: {
					current: 1200000,
					total: 1200000,
				},
				attacks: [
					{
						name: "gây 50% sát thương hệ hỏa",
						hp: randomNum(250000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng 10% sát thương cơ bản 50%",
						hp: randomNum(350000, 250000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "bản thân tăng 100% sát thương diện rộng",
						hp: randomNum(150000, 100000, 50000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						name: "tăng vĩnh viễn 50% sát thương hệ hỏa khi vào trận đấu",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 5,
							remaining: 5,
						},
					},
				],
			},
			{
				name: "khải linh phái",
				type: "hoa",
				weakness: ["thuy"],
				resistance: ["kim"],
				img: {
					default: "./public/images/uu9nbCT.png",
					front: "./public/images/FXtAixq.png",
					back: "./public/images/FXtAixq.png",
					deranged: "./public/images/FXtAixq.png",
					sleep: "./public/images/FXtAixq.png",
				},
				hp: {
					current: 850000,
					total: 850000,
				},
				attacks: [
					{
						name: "tăng 100% lực tay cơ bản",
						hp: randomNum(500000, 350000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng 100% sát thương chí mạng",
						hp: randomNum(350000, 250000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "gây sát thương 100% diện rộng",
						hp: randomNum(500000, 300000, 150000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						name: "tăng vĩnh viễn 50% sát thương hệ hỏa khi vào trận đấu",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "thuần dương",
				type: "hoa",
				weakness: ["thuy"],
				resistance: ["kim"],
				img: {
					default: "./public/images/92SttJi.png",
					front: "./public/images/JbPFu8Q.png",
					back: "./public/images/JbPFu8Q.png",
					deranged: "./public/images/JbPFu8Q.png",
					sleep: "./public/images/JbPFu8Q.png",
				},
				hp: {
					current: 800000,
					total: 800000,
				},
				attacks: [
					{
						name: "tăng công cơ bản tăng 100%",
						hp: randomNum(500000, 300000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng 100% lực tay cơ bản ",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "khi vào trận đấu tăng 50% xuyên giáp",
						hp: randomNum(800000, 500000, 300000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "thuần dương tăng 100% sát thương chí mạng",
						hp: randomNum(900000, 500000, 400000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "bá đao",
				type: "kim",
				weakness: ["hoa"],
				resistance: ["moc"],
				img: {
					default: "./public/images/XYnoeUu.png",
					front: "./public/images/1C4IiZJ.png",
					back: "./public/images/1C4IiZJ.png",
					deranged: "./public/images/1C4IiZJ.png",
					sleep: "./public/images/1C4IiZJ.png",
				},
				hp: {
					current: 1700000,
					total: 1700000,
				},
				attacks: [
					{
						name: "chuyển hóa máu thành sát thương 50% hệ kim",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "chuyển hóa sát thương thành máu 10%",
						hp: randomNum(500000, 300000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng lực tay cơ bản 100%",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng giáp và xuyên giáp 10% và gây 30% sát thương toàn hệ",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 20,
							remaining: 20,
						},
					},
				],
			},
			{
				name: "thiên sách",
				type: "kim",
				weakness: ["hoa"],
				resistance: ["am"],
				img: {
					default: "./public/images/qGNteUQ.png",
					front: "./public/images/VQ8BUFl.png",
					back: "./public/images/VQ8BUFl.png",
					deranged: "./public/images/VQ8BUFl.png",
					sleep: "./public/images/VQ8BUFl.png",
				},
				hp: {
					current: 1500000,
					total: 1500000,
				},
				attacks: [
					{
						name: "tăng 50% giáp và 20% phản đòn sát thương",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng 50% sát thương cơ bản hệ kim",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "thiên sách thương tăng 100% chí mạng có cơ hội kết liễu đối phương",
						hp: randomNum(300000, 150000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "tăng sát thương cơ bản 10%",
						hp: randomNum(500000, 300000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "thiếu lâm",
				type: "kim",
				weakness: ["hoa"],
				resistance: ["am"],
				img: {
					default: "./public/images/35RLB4G.png",
					front: "./public/images/W9PZRDa.png",
					back: "./public/images/W9PZRDa.png",
					deranged: "./public/images/W9PZRDa.png",
					sleep: "./public/images/W9PZRDa.png",
				},
				hp: {
					current: 1700000,
					total: 1700000,
				},
				attacks: [
					{
						name: "kim cang phục ma tăng 10% giáp 10% kháng phép",
						hp: randomNum(800000, 500000, 300000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "đạt ma phổ độ tặng 100% sát thương hệ kim",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "kim cang chú tăng phản đòn sát thương 40%",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "tăng 30% giáp khi vào trận đấu",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "lục phiến",
				type: "kim",
				weakness: ["hoa"],
				resistance: ["am"],
				img: {
					default: "./public/images/gOGDQgh.png",
					front: "./public/images/wDFLp2I.png",
					back: "./public/images/wDFLp2I.png",
					deranged: "./public/images/wDFLp2I.png",
					sleep: "./public/images/wDFLp2I.png",
				},
				hp: {
					current: 500000,
					total: 500000,
				},
				attacks: [
					{
						name: "gây 100% sát thương hệ âm",
						hp: randomNum(600000, 300000, 150000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "gây 100% sát thương hệ hỏa",
						hp: randomNum(800000, 500000, 300000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "gây 100% sát thương hệ thủy",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "vào trận đấu tăng 100% sát thương chí mạng",
						hp: randomNum(200000, 150000, 100000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "vạn thú trang",
				type: "moc",
				weakness: ["duong"],
				resistance: ["kim"],
				img: {
					default: "./public/images/PKhBzkX.png",
					front: "./public/images/FtxsGh8.png",
					back: "./public/images/FtxsGh8.png",
					deranged: "./public/images/FtxsGh8.png",
					sleep: "./public/images/FtxsGh8.png",
				},
				hp: {
					current: 700000,
					total: 700000,
				},
				attacks: [
					{
						name: "tăng 100% máu khi vào trận",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng sát thương hệ mộc 100%",
						hp: randomNum(300000, 250000, 150000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "tăng lực tay cơ bản 150% và mê hoặc đối phương ",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng 100% lực tay cơ bản khi vào trận đấu",
						hp: randomNum(500000, 400000, 250000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
				],
			},
			{
				name: "mặc gia",
				type: "moc",
				weakness: ["duong"],
				resistance: ["kim"],
				img: {
					default: "./public/images/WFrbD2E.png",
					front: "./public/images/phMgvSC.png",
					back: "./public/images/phMgvSC.png",
					deranged: "./public/images/phMgvSC.png",
					sleep: "./public/images/phMgvSC.png",
				},
				hp: {
					current: 500000,
					total: 500000,
				},
				attacks: [
					{
						name: "gây sát thương hệ mộc 100%",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						name: "tăng 100% máu khi vào trận đấu",
						hp: randomNum(150000, 100000, 50000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "lập tức hồi 100% máu cho đồng minh trong vòng 3s và gây 100% sát thương hệ mộc",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 15,
							remaining: 5,
						},
					},
					{
						name: "tăng 10% tấn công cơ bản",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "nga my",
				type: "moc",
				weakness: ["duong"],
				resistance: ["kim"],
				img: {
					default: "./public/images/McaLP97.png",
					front: "./public/images/UDDnWP8.png",
					back: "./public/images/UDDnWP8.png",
					deranged: "./public/images/UDDnWP8.png",
					sleep: "./public/images/UDDnWP8.png",
				},
				hp: {
					current: 2000000,
					total: 2000000,
				},
				attacks: [
					{
						name: "tăng sát thương hệ mộc 50%",
						hp: randomNum(100000, 30000, 200000),
						avail: {
							total: 30,
							remaining: 30,
						},
					},
					{
						name: "tăng 100% máu khi vào trận đấu",
						hp: randomNum(150000, 100000, 50000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "hồi sinh đồng minh tăng 50% máu cho đồng minh gây 20% sát thươn diện rộng",
						hp: randomNum(200000, 100000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "tăng 10% tấn công cơ bản",
						hp: randomNum(300000, 200000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
				],
			},
			{
				name: "đoàn thị",
				type: "moc",
				weakness: ["duong"],
				resistance: ["kim"],
				img: {
					default: "./public/images/Q1vliYx.png",
					front: "./public/images/DYQJf1a.png",
					back: "./public/images/DYQJf1a.png",
				},
				hp: {
					current: 1000000,
					total: 1000000,
				},
				attacks: [
					{
						name: "tăng 50% máu khi vào trận đấu",
						hp: randomNum(200000, 100000, 50000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "tăng 10% hồi máu và chuyển hóa sát thương thành máu",
						hp: randomNum(500000, 300000, 200000),
						avail: {
							total: 10,
							remaining: 10,
						},
					},
					{
						name: "khi đồng minh thấp máu lập tức hồi 50% máu gây 30% sát thương",
						hp: randomNum(200000, 150000, 100000),
						avail: {
							total: 15,
							remaining: 15,
						},
					},
					{
						name: "tấn công hệ mộc tăng 30%",
						hp: randomNum(100000, 50000, 30000),
						avail: {
							total: 20,
							remaining: 20,
						},
					},
				],
			},
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
		if (min === undefined || min === "" || min === null) {
			// min default value
			min = 0;
		}

		// random number, yay
		return Math.floor(Math.random() * (max - min) + min);
	}

	// CHARACTER BUILD
	// build the character UI
	function populateChar(container, character) {
		// which img
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

		if (gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0) {
			// weakness exists
			curAttack.hp *= 2;
		}

		if (gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0) {
			// weakness exists
			curAttack.hp /= 2;
		}

		curAttack.hp = Math.floor(curAttack.hp);
		return curAttack.hp;
	}

	// SFX PLAYER
	// stops music and plays sfx
	function playSound(name) {
		// load sfx src
		$("audio.sfx").attr("src", music[name]);
		// pause game music
		$("audio.music")[0].pause();
		// character announce yourself
		$("audio.sfx")[0].play();

		// timeout to stop music at given point
		setTimeout(function () {
			// pause the sfx
			$("audio.sfx")[0].pause();
			// start the music again
			// $('audio.music')[0].play();
			// reset the sfx
			$("audio.sfx")[0].currentTime = 0;
		}, 2000);
	}

	// HP BAR ANIMATION
	// stop and set health bar
	function setHP() {
		// stop health animation and set value
		clearInterval(defendProgressInt);
		clearInterval(progressInt);
		$(".stadium .enemy progress").val(gameData.enemy.hp.current);
		$(".stadium .hero progress").val(gameData.hero.hp.current);
	}

	// ///////////////////////////////////////////
	// RESET
	// ///////////////////////////////////////////
	function resetGame() {
		// set default values for game variables
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

		for (var i in characters) {
			// build the character list
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

		switch (
		gameData.step // switch for the current step in the game
		) {
			case 1:
				// step 1: choose your hero
				for (var i in characters) {
					if (characters[i].name === name) {
						// find and save your chosen hero's data
						gameData.hero = characters[i];
					}
				}

				// remove the character from the available list
				var char = $(this).remove();
				// build my hero
				populateChar($(".stadium .hero"), "hero");

				for (var i in gameData.hero.attacks) {
					// populate attack list
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
					if (characters[i].name === name) {
						// find and save the enemy data
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
		stadium.style.height = "870px";

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
	function attackEnemy(that, callback) {
		// attack the enemy!!!
		let hero_attack = "";
		// name of your attack
		attackName = that.children(".attack-name").children("strong").text().toLowerCase();
		hero_attack = that.children(".attack-name").children("strong")[0].getAttribute("data-attack");

		for (var i in gameData.hero.attacks) {
			if (gameData.hero.attacks[i].name === attackName) {
				// get chosen attack data
				curAttack = gameData.hero.attacks[i];
			}
		}

		if (attackName != "health") {
			// if there are attacks left

			let my_attack = document.querySelector(".my_attack");
			my_attack.setAttribute("src", hero_attack);
			my_attack.style.display = "block";

			let enemy_hp = document.querySelector(".current_hp");
			enemy_hp.textContent = curAttack.hp;
			enemy_hp.style.animation = "slide_curent_hp 2.5s linear forwards";

			// sau 3s xóa ảnh skill
			timeSkill = setTimeout(displayNoneSkill, 2000);

			if (curAttack.avail.remaining > 0) {
				// attack!!!
				$(".attack-list").addClass("disabled");

				$(".hero .char img").animate(
					{
						"margin-left": "-30px",
						"margin-top": "10px",
					},
					50,
					"swing"
				);
				$(".hero .char img").animate(
					{
						"margin-left": "30px",
						"margin-top": "-10px",
					},
					50,
					"swing"
				);
				$(".hero .char img").animate(
					{
						"margin-left": "0px",
						"margin-top": "0px",
					},
					50,
					"swing"
				);

				// attack enemy
				gameData.enemy.hp.current -= attackMultiplier("hero", curAttack);

				if (gameData.enemy.hp.current <= 0) {
					// Enemy is dead

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
								$.post(
									"./KhieuChien/insertInventories",
									{
										id_item: id_item,
										amount: amount,
									},
									function (response) { }
								);
							} else {
								$.post(
									"./KhieuChien/updateCoin",
									{
										coin: amount,
									},
									function (response) {
										$(".logined_coin").html("<i class='fa-solid fa-coins'></i> " + response + "");
									}
								);
							}

							if (type === "cực hiếm") {
								image_item +=
									`<div class='inventory_item result_item' style='position: relative; border: 1px solid #FFFF00'>
                                                    <img class="result_image" src=` +
									p.img +
									` alt="">
                                                    <p class='count_item count_item__break'>` +
									p.amount +
									`</p>

                                                    <div class="details">
                                                        <div class="detail_item">
                                                            <div class="detail_item--image">
                                                                <img src="` +
									p.img +
									`" alt="">
                                                            </div>
                                                
                                                            <div class="detail_item--info">
                                                                <h3 class="detail_item--name">` +
									p.name +
									`</h3>
                                                                <p class="detail_item--attack">` +
									p.attribute_1 +
									`</p>
                                                                <p class="detail_item--defense">` +
									p.attribute_2 +
									`</p>
                                                                <p class="detail_item--blood">` +
									p.attribute_3 +
									`</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;
							} else if (type === "hiếm") {
								image_item +=
									`<div class='inventory_item result_item' style='position: relative; border: 1px solid #FF3366'>
                                                    <img class="result_image" src=` +
									p.img +
									` alt="">
                                                    <p class='count_item count_item__break'>` +
									p.amount +
									`</p>

                                                    <div class="details">
                                                        <div class="detail_item">
                                                            <div class="detail_item--image">
                                                                <img src="` +
									p.img +
									`" alt="">
                                                            </div>
                                                
                                                            <div class="detail_item--info">
                                                                <h3 class="detail_item--name">` +
									p.name +
									`</h3>
                                                                <p class="detail_item--attack">` +
									p.attribute_1 +
									`</p>
                                                                <p class="detail_item--defense">` +
									p.attribute_2 +
									`</p>
                                                                <p class="detail_item--blood">` +
									p.attribute_3 +
									`</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;
							} else {
								image_item +=
									`<div class='inventory_item result_item' style='position: relative; border: 1px solid rgb(33 33 33 / 75%)'>
                                                    <img class="result_image" src=` +
									p.img +
									` alt="">
                                                    <p class='count_item count_item__break'>` +
									p.amount +
									`</p>`;

								if (type !== "vang") {
									image_item +=
										`<div class="details">
										<div class="detail_item">
											<div class="detail_item--image">
												<img src="` +
										p.img +
										`" alt="">
											</div>
											<div class="detail_item--info">
												<h3 class="detail_item--name">` +
										p.name +
										`</h3>
												<p class="detail_item--attack">` +
										p.attribute_1 +
										`</p>
										<p class="detail_item--defense">` +
										p.attribute_2 +
										`</p>
										 <p class="detail_item--blood">` +
										p.attribute_3 +
										`</p>
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
					progressInt = setInterval(function () {
						// get current value of health bar
						var val = $(".stadium .enemy progress").val();
						val--;

						// update health bar value
						$(".stadium .enemy progress").val(val);

						if (val === gameData.enemy.hp.current) {
							// if you've hit your target clear interval
							clearInterval(progressInt);
							progressComplete = 1;
						}
					}, 1);

					// update health numbers
					$(".stadium .enemy .data p span").text(gameData.enemy.hp.current);
					that.children(".attack-count").children("small").children("span").text(curAttack.avail.remaining);

					// wait a second to recover
					setTimeout(function () {
						// now defend that attack
						defend(that);
					}, 1000);
				}
			}
		} else {
			if (amount_health > 0) {
				if (gameData.hero.hp.current < gameData.hero.hp.total) {
					if (timeHealth > 0) {
					} else {
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
	function defend(that) {
		// random attack
		randInt = randomNum(gameData.enemy.attacks.length);
		enemyAttack = gameData.enemy.attacks[randInt];

		// enemy attack animation sequence
		$(".enemy .char img").animate(
			{
				"margin-right": "-30px",
				"margin-top": "-10px",
			},
			50,
			"swing"
		);
		$(".enemy .char img").animate(
			{
				"margin-right": "30px",
				"margin-top": "10px",
			},
			50,
			"swing"
		);
		$(".enemy .char img").animate(
			{
				"margin-right": "0px",
				"margin-top": "0px",
			},
			50,
			"swing"
		);

		// attack the hero
		gameData.hero.hp.current -= attackMultiplier("enemy", enemyAttack);

		if (gameData.hero.hp.current <= 0) {
			// ding dong the hero's dead

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
			defendProgressInt = setInterval(function () {
				// get current val of health bar
				var val = $(".stadium .hero progress").val();
				val--;

				// update health bar value
				$(".stadium .hero progress").val(val);

				if (val === gameData.hero.hp.current) {
					// stop the interval when target is attained
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
	function attackList() {
		// attack instantiation
		$(".attack-list").removeClass("disabled");

		$(".attack-list li").click(function () {
			// attack choice is clicked
			var doAttack = 1;

			if (gameData.step === 3) {
				// attack step - start attack sequence
				attackEnemy($(this));
			}
		});

		setTimeout(function () {
			// characters chosen - set & start the battle music
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
