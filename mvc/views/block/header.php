<header class="header">
    <div class="header-container">
        <ul>
            <?php if (isset($_SESSION["logined"])) {?>

            <li class="drop-account">
                <div class="header--account">
                    <div class="header__container--image" style="
    margin-left: 0px;
">
                        <img class="header__avatar" src="<?php echo $_SESSION["logined"][0]->image ?>" alt="">
                    </div>

                    <div class="header--name">
                        <h2><?php echo $_SESSION["logined"][0]->name ?></h2>
                        <p class="header-power">Tài Phú:
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
                        <img src="https://i.imgur.com/Bl4Pzdw.png">
                    </label>
                    <label for="cbInventory">
                        <img src="https://i.imgur.com/pN479ih.png">
                    </label>
                    <label for="cbGuild">
                       <img src="https://i.imgur.com/LdkOCMc.png">
                    </label>
                    <label for="cb_pvp" class="icon_pvp">
                       <img src="https://i.imgur.com/TXEtaXq.png">
                    </label>
                    <label for="cb_meridian" class="cb_meridian">
                       <img src="https://i.imgur.com/KJxgUlj.png">
                    </label>
                   <div class="todoi">
                           <p class="header-power2">
                            <img src="https://i.imgur.com/i9s5OSC.png" style="
    width: 40px;
">Tim<br>
 <img src="https://i.imgur.com/nLPQamd.png" style="
    width: 40px;
">Misuke<br>
                           <img src="https://i.imgur.com/pKXG5WN.png" style="
    width: 40px;
">Lucifer<br>
                           <img src="https://i.imgur.com/AzqbMM9.png" style="
    width: 40px;
">Tiểu Tà Thần</p>
                     </div>
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