<header class="header">
    <div class="header-container">
        <ul>
            <?php if (isset($_SESSION["logined"])) {?>

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
                <div class="header-shops">
                    <label for="cbShop" style="padding-right: 5px">
                        <img src="https://i.imgur.com/uHgLIWR.png">
                    </label>
                    <label for="cbInventory">
                        <img src="https://i.imgur.com/QCsQ2DS.png">
                    </label>
                    <label for="cbGuild">
                        <i class="fa-brands fa-guilded" id=""></i>
                    </label>
                    <label for="cb_pvp" class="icon_pvp">
                        <i class="fa-solid fa-trophy"></i>
                    </label>
                    <label for="cb_meridian" class="cb_meridian">
                        <i class="fa-solid fa-trophy"></i>
                    </label>
                    <div class="mucsic_container">
                        <img class="music play_audio" src="./public/images/pause.png" alt="">

                        <img class="music pause_audio" src="./public/images/play.png" alt="">
                        <audio controls class="my_audio" hidden>
                            <source src="./public/music/nhac.mp3">
                        </audio>
                    </div>
                </div>
                <p class="logined_coin">
                    <img src="https://i.imgur.com/dABpJD3.png">
                    <?php echo number_format($_SESSION["logined"][0]->coin, 0, ',', '.') ?>
                </p>
            </li>
            <?php }?>
        </ul>

        <ul>
            <li>
                <a href="./TrangChu"></a>
            </li>
            <?php if (isset($_SESSION["logined"])) {?>

            <li>
                <a href="./KhieuChien"></a>
            </li>
            <?php }?>
        </ul>
    </div>
</header>