<input type="checkbox" hidden id="cbShop">
<label for="cbShop" class="cbShop"></label>

<section class="shop__container">
    <div class="shops__row">
        <div class="shop__header">
            <h1 class="shop__title">SHOP MUA ĐỒ</h1>

            <label for="cbShop" class="close__shop">
                <i class="fa-solid fa-xmark"></i>
            </label>
        </div>

        <div class="shop__items">
            <div class="shop__items--left">

            </div>

            <div class="shop__items--right">
                <div class="shop__images">
                    <img class="item__image" src=""></img>
                    <h3 class="name_buy"></h3>
                </div>

                <div class="shop__description">
                    <h4>Miêu tả</h4>
                    <p class="item__description"></p>
                </div>

                <div class="shop__information">
                    <input type="text" class="id_item_buy" hidden>
                    <input type="number" class="price_item" hidden value="1">

                    <div class="shop__amount">
                        <p>Số lượng</p>
                        <div class="container__amount">
                            <i class="fa-solid fa-minus reduce__item"></i>
                            <input type="number" min=0 class="amount__item" value="1" max="99">
                            <i class="fa-solid fa-plus increase__item"></i>
                        </div>
                    </div>

                    <div class="shop__price">
                        <p><img src="https://i.imgur.com/dABpJD3.png"> Tổng</p>
                        <input type="text" class="total" value="1">
                    </div>

                    <div class="shop__total">
                        <p><img src="https://i.imgur.com/dABpJD3.png"> Có</p>
                        <input type="text" class="myCoin" value="<?php echo $_SESSION["logined"][0]->coin ?>">
                    </div>

                    <button class="buy__item">Mua</button>
                </div>
            </div>
        </div>
    </div>
</section>