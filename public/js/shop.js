$(document).ready(function () {
	$('.close__shop').click(function () {
		location.reload();
	})
	$('.cbShop').click(function () {
		location.reload();
	})

	//lấy danh sách item trong shop
	loadShop();

	function loadShop() {
		$.post("./Shop/loadShop", function (responsive) {
			let obj = JSON.parse(responsive);
			let html = ``;

			obj.forEach((element) => {
				let desc = "";

				if (element.attribute_1 != null) {
					desc = element.attribute_1;
				}

				if (element.attribute_2 != null) {
					desc += " " + element.attribute_2;
				}

				if (element.attribute_2 != null) {
					desc += " " + element.attribute_2;
				}

				html += `<div class="shop__item" data-id="` + element.id + `" data-price="` + element.price + `" data-img="` + element.img + `" data-name="` + element.name + `" data-desc="` + desc + `">
                            <div class="shop__item--image">
                                <img src="`+ element.img + `" alt="">
                            </div>

                            <div class="shop__item--name">
                                <h4>`+ element.name + `</h4>
                                <p><img src="https://i.imgur.com/dABpJD3.png"><span class="price_item">`+ element.price + `</span></p>
                            </div>
                        </div>`;
			});

			$('.shop__items--left').html(html);

			$('.shop__item').click(function () {
				$('.shop__information').css("display", "flex");
				$('.shop__description').css("display", "block");

				let id = $(this).attr("data-id");
				let price = $(this).attr("data-price");
				let img = $(this).attr("data-img");
				let name = $(this).attr("data-name");
				let desc = $(this).attr("data-desc");

				$('.id_item_buy').val(id);
				$('.total').val(price);
				$('.price_item').val(price);
				$('.item__image').attr("src", img);
				$('.name_buy').html(name);
				$('.item__description').html(desc);

				$('.amount__item').val(1);

				let myCoin = document.querySelector('.myCoin');
				let buy = document.querySelector('.buy__item');

				if (Number(price) > Number(myCoin.value)) {
					myCoin.style.color = "#FF0000";
					buy.style.display = "none";
				}
				else {
					myCoin.style.color = "#000";
					buy.style.display = "block";
				}
			})
		});
	}

	//tăng số lượng
	$('.increase__item').click(function () {
		let currentAmount = $('.amount__item').val();
		let currentPrice = $('.price_item').val();

		if (currentAmount < 100) {
			currentAmount++;
		}

		let newAmount = document.querySelector('.amount__item');
		let total = document.querySelector('.total');
		newAmount.value = currentAmount;
		total.value = currentPrice * currentAmount;

		let myCoin = document.querySelector('.myCoin');
		let buy = document.querySelector('.buy__item');

		if (Number(total.value) > Number(myCoin.value)) {
			myCoin.style.color = "#FF0000";
			buy.style.display = "none";
		}
		else {
			myCoin.style.color = "#000";
		}
	})

	//giảm số lượng
	$('.reduce__item').click(function () {
		let currentAmount = $('.amount__item').val();
		let currentPrice = $('.price_item').val();

		if (currentAmount > 0) {
			currentAmount--;
		}

		let newAmount = document.querySelector('.amount__item');
		let total = document.querySelector('.total');
		newAmount.value = currentAmount;
		total.value = currentPrice * currentAmount;

		let myCoin = document.querySelector('.myCoin');
		let buy = document.querySelector('.buy__item');

		if (Number(total.value) <= Number(myCoin.value)) {
			myCoin.style.color = "#000";
			buy.style.display = "block";
		}
	})


	//mua đồ 
	$('.buy__item').click(function () {
		let id_item = $('.id_item_buy').val();
		let amount = $('.amount__item').val();

		let myCoin = $('.myCoin').val();
		let price = $('.total').val();
		let total = Number(myCoin) - Number(price);
		$('.myCoin').val(total);
		let newMyCoin = $('.myCoin').val();


		$.post('./Shop/buyItemInShop', { id_item: id_item, amount: amount, newMyCoin: newMyCoin }, function (responsive) {

			let buy = document.querySelector('.buy__item');

			if (Number(newMyCoin) < Number(price)) {
				$('.myCoin').css("color", "#FF0000");
				buy.style.display = "none";
			}
			else {
				$('.myCoin').css("color", "#000");
				buy.style.display = "block";
			}

			$('.logined_coin').html(`<img src="https://i.imgur.com/dABpJD3.png">` + newMyCoin);
		})
	})
});
