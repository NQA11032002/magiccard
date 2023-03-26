<input type="checkbox" hidden name="" id="cbInventory">
<label for="cbInventory" class="label_Inventory"></label>


<section class="inventories-account">
    <div class="inventories__container">
        <div class="inventory__characters">
            <li class="drop-account">
                <div class="header--account">
                    <div class="header__container--image">
                        <img class="header__avatar" src="<?php echo $_SESSION["logined"][0]->image ?>" alt="">
                    </div>

                    <div class="header--name">
                        <h2><?php echo $_SESSION["logined"][0]->name ?><img src="https://i.imgur.com/pSk3Znh.png"></h2>
                        <p class="header-power">Lực chiến:
                            <?php if ($_SESSION["logined"][0]->power == null) {
    echo 0;
} else {
    echo $_SESSION["logined"][0]->power;
}
?>
                        <p class="header-power1">Bang Hội:
                            Ăn Chơi </p>
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div class="equipment_left">
                    <div class="wear_equipment">
                        <img class="wear_weapon" src="https://i.imgur.com/hyzJCyr.png" alt="">

                        <button class="remove__equipment remove_weapon">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--weapon__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--weapon__name">
                            </h2>
                            <p class="details__weared--attack details__weared--weapon__attack">
                            </p>
                            <p class="details__weared--defens details__weared--weapon__defense">
                            </p>
                            <p class="details__weared--blood details__weared--weapon__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_phi_phong" src="https://i.imgur.com/hyzJCyr.png" alt="">

                        <button class="remove__equipment remove_phi_phong">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--phi_phong__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--phi_phong__name">
                            </h2>
                            <p class="details__weared--attack details__weared--phi_phong__attack">
                            </p>
                            <p class="details__weared--defens details__weared--phi_phong__defense">
                            </p>
                            <p class="details__weared--blood details__weared--phi_phong__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_belt" src="https://i.imgur.com/hyzJCyr.png" alt="">
                        <button class="remove__equipment remove_belt">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--belt__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--belt__name">
                            </h2>
                            <p class="details__weared--attack details__weared--belt__attack">
                            </p>
                            <p class="details__weared--defens details__weared--belt__defense">
                            </p>
                            <p class="details__weared--blood details__weared--belt__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_jewel_1" src="https://i.imgur.com/hyzJCyr.png" alt="">
                        <button class="remove__equipment remove_jewel_1">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--jewel_1__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--jewel_1__name">
                            </h2>
                            <p class="details__weared--attack details__weared--jewel_1__attack">
                            </p>
                            <p class="details__weared--defens details__weared--jewel_1__defense">
                            </p>
                            <p class="details__weared--blood details__weared--jewel_1__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_jewel_2" src="https://i.imgur.com/hyzJCyr.png" alt="">

                        <button class="remove__equipment remove_jewel_2">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--jewel_2__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--jewel_2__name">
                            </h2>
                            <p class="details__weared--attack details__weared--jewel_2__attack">
                            </p>
                            <p class="details__weared--defens details__weared--jewel_2__defense">
                            </p>
                            <p class="details__weared--blood details__weared--jewel_2__blood">
                            </p>
                        </div>
                    </div>
                </div>

                <div class="equipment_bottom">
                    <div class="wear_equipment">
                        <img class="wear_skill" src="https://i.imgur.com/QhblmnB.png" alt="">

                        <button class="remove__equipment remove__equipment--bottom remove_skill">Tháo
                            ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--skill__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--skill__name">
                            </h2>
                            <p class="details__weared--attack details__weared--skill__attack">
                            </p>
                            <p class="details__weared--defens details__weared--skill__defense">
                            </p>
                            <p class="details__weared--blood details__weared--skill__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_phap_bao" src="https://i.imgur.com/QhblmnB.png" alt="">

                        <button class="remove__equipment remove__equipment--bottom remove_phap_bao">Tháo
                            ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--phap_bao__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--phap_bao__name">
                            </h2>
                            <p class="details__weared--attack details__weared--phap_bao__attack">
                            </p>
                            <p class="details__weared--defens details__weared--phap_bao__defense">
                            </p>
                            <p class="details__weared--blood details__weared--phap_bao__blood">
                            </p>
                        </div>
                    </div>
                </div>

                <div class="equipment_right">
                    <div class="wear_equipment">
                        <img class="wear_hat" src="https://i.imgur.com/6GIkC60.png" alt="">

                        <button class="remove__equipment remove_hat">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--hat__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--hat__name">
                            </h2>
                            <p class="details__weared--attack details__weared--hat__attack">
                            </p>
                            <p class="details__weared--defens details__weared--hat__defense">
                            </p>
                            <p class="details__weared--blood details__weared--hat__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_coat" src="https://i.imgur.com/6GIkC60.png" alt="">

                        <button class="remove__equipment remove_coat">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--coat__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--coat__name">
                            </h2>
                            <p class="details__weared--attack details__weared--coat__attack">
                            </p>
                            <p class="details__weared--defens details__weared--coat__defense">
                            </p>
                            <p class="details__weared--blood details__weared--coat__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_glove" src="https://i.imgur.com/6GIkC60.png" alt="">

                        <button class="remove__equipment remove_glove">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--glove__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--glove__name">
                            </h2>
                            <p class="details__weared--attack details__weared--glove__attack">
                            </p>
                            <p class="details__weared--defens details__weared--glove__defense">
                            </p>
                            <p class="details__weared--blood details__weared--glove__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_shoese" src="https://i.imgur.com/6GIkC60.png" alt="">

                        <button class="remove__equipment remove_shoese">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--shoese__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--shoese__name">
                            </h2>
                            <p class="details__weared--attack details__weared--shoese__attack">
                            </p>
                            <p class="details__weared--defens details__weared--shoese__defense">
                            </p>
                            <p class="details__weared--blood details__weared--shoese__blood">
                            </p>
                        </div>
                    </div>

                    <div class="wear_equipment">
                        <img class="wear_jewel_3" src="https://i.imgur.com/6GIkC60.png" alt="">

                        <button class="remove__equipment remove_jewel_3">Tháo ra</button>

                        <div class="details__weared">
                            <img class="details__weared--img details__weared--jewel_3__img" src="" alt="">
                            <h2 class="details__weared--name details__weared--weapon__name">
                            </h2>
                            <p class="details__weared--attack details__weared--weapon__attack">
                            </p>
                            <p class="details__weared--defens details__weared--weapon__defense">
                            </p>
                            <p class="details__weared--blood details__weared--weapon__blood">
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        <div class="inventory__items">

            <div class="inventories__main">

            </div>
        </div>
    </div>
</section>