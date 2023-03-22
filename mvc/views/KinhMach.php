<input type="checkbox" hidden name="" id="cb_meridian">
<label for="cb_meridian" class="label_meridian"></label>

<section class="meridians">
    <div class="meridians__container">
        <div class="meridian_left position-relative">
            <div class="meridian_item position-absolute meridian_left-1__container">
                <img src="" alt="" class="meridian_left-1">
            </div>

            <div class="meridian_item position-absolute meridian_left-2__container">
                <img src="" alt="" class="meridian_left-2">
            </div>

            <div class="meridian_item position-absolute meridian_left-3__container">
                <img src="" alt="" class="meridian_left-3">
            </div>
        </div>

        <div class="meridian_center">
            <img src="<?php echo $_SESSION["logined"][0]->image_inventory ?>" alt="" class="meridian_center-character">
        </div>

        <div class="meridian_right position-relative">
            <div class="meridian_item position-absolute meridian_right-1__container">
                <img src="" alt="" class="meridian_right-1">
            </div>

            <div class="meridian_item position-absolute meridian_right-2__container">
                <img src="" alt="" class="meridian_right-2">
            </div>

            <div class="meridian_item position-absolute meridian_right-3__container">
                <img src="" alt="" class="meridian_right-3">
            </div>
        </div>
    </div>

    <div class="inventory_meridians">
        <h1 class="h1 text-center title_meridian">Kho kinh mạch</h1>
        <div class="inventory_meridians__container">

        </div>
    </div>
</section>