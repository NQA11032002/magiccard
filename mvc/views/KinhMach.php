<input type="checkbox" hidden name="" id="cb_meridian">
<label for="cb_meridian" class="label_meridian"></label>

<section class="meridians">
    <div class="meridians__container">
        <div class="meridian_left position-relative">
            <div class="meridian_item position-absolute meridian_left-1__container">
                <img src="" alt="" class="meridian_left-1">
                <p class="category_meridian-wear--1 category_meridian-wear  position-absolute"></p>
                <p class="level_meridian-wear--1 level_meridian-wear position-absolute"></p>

                <div class="inventory_meridians--item-function take-off_meridians">
                    <button class="take-of--meridian-child">Tháo</button>
                </div>
            </div>

            <div class="meridian_item position-absolute meridian_left-2__container">
                <img src="" alt="" class="meridian_left-2">
                <p class="category_meridian-wear--2 category_meridian-wear position-absolute"></p>
                <p class="level_meridian-wear--2 level_meridian-wear position-absolute"></p>

                <div class="inventory_meridians--item-function take-off_meridians">
                    <button class="take-of--meridian-child">Tháo</button>
                </div>
            </div>

            <div class="meridian_item position-absolute meridian_left-3__container">
                <img src="" alt="" class="meridian_left-3">
                <p class="category_meridian-wear--3 category_meridian-wear position-absolute"></p>
                <p class="level_meridian-wear--3 level_meridian-wear position-absolute"></p>

                <div class="inventory_meridians--item-function take-off_meridians">
                    <button class="take-of--meridian-child">Tháo</button>
                </div>
            </div>
        </div>

        <div class="meridian_center">
            <img src="<?php echo $_SESSION["logined"][0]->image_inventory ?>" alt="" class="meridian_center-character">
        </div>

        <div class="meridian_right position-relative">
            <div class="meridian_item position-absolute meridian_right-1__container">
                <img src="" alt="" class="meridian_right-1">
                <p class="category_meridian-wear--4 category_meridian-wear position-absolute"></p>
                <p class="level_meridian-wear--4 level_meridian-wear position-absolute"></p>

                <div class="inventory_meridians--item-function take-off_meridians">
                    <button class="take-of--meridian-child">Tháo</button>
                </div>
            </div>

            <div class="meridian_item position-absolute meridian_right-2__container">
                <img src="" alt="" class="meridian_right-2">
                <p class="category_meridian-wear--5 category_meridian-wear position-absolute"></p>
                <p class="level_meridian-wear--5 level_meridian-wear position-absolute"></p>

                <div class="inventory_meridians--item-function take-off_meridians">
                    <button class="take-of--meridian-child">Tháo</button>
                </div>
            </div>

            <div class="meridian_item position-absolute meridian_right-3__container">
                <img src="" alt="" class="meridian_right-3">
                <p class="category_meridian-wear--6 category_meridian-wear position-absolute"></p>
                <p class="level_meridian-wear--6 level_meridian-wear position-absolute"></p>

                <div class="inventory_meridians--item-function take-off_meridians">
                    <button class="take-of--meridian-child">Tháo</button>
                </div>
            </div>
        </div>
    </div>

    <div class="inventory_meridians d-flex flex-column">
        <div class="inventories_meridians">
            <h1 class="h1 text-center title_meridian">Kho Kinh Mạch</h1>

            <div class="inventory_meridians__container">

            </div>
        </div>

        <div class="inventory_meridians--create-item">
            <h1 class="h1 text-center title_meridian">Ghép Kinh Mạch</h1>

            <div class="create-meridians">
                <div
                    class="meridian__item-result meridian__item--create d-flex justify-content-center align-items-center">
                    <img src="" alt="" class="meridian-result--image">
                </div>

                <div class="container__meridian--item d-flex justify-content-center align-items-center">
                    <div class="meridian__item--create meridian__item-1">
                        <img src="" alt="" class="meridian-image-1 takeoff--meridian">
                    </div>

                    <div>
                        <i class="fa-solid fa-plus create_item--icon"></i>
                    </div>

                    <div class="meridian__item-2 meridian__item--create">
                        <img src="" alt="" class="meridian-image-2 takeoff--meridian">
                    </div>
                </div>

                <P class="status__create--meridian text-center"></P>

                <div class="d-flex justify-content-center">
                    <button type="" class="create-meridian btn">Ghép đồ</button>
                </div>
            </div>
        </div>
    </div>
</section>