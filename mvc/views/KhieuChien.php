<?php
if (isset($_SESSION["logined"])) {?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Võ Lâm Thiên Hạ</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" href="./public/css/style.css">
    <link rel="stylesheet" href="./public/css/items.css">
    <link rel="stylesheet" href="http://l-lin.github.io/font-awesome-animation/dist/font-awesome-animation.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

    <link rel="stylesheet" type="text/css" href="https://mhxzx.games.wanmei.com/style/coveryy20210409.css" />
    <link rel="stylesheet" type="text/css" href="./public/css/responsive.css">
    <link rel="stylesheet" type="text/css" href="./public/css/login.css">
    <link rel="stylesheet" type="text/css" href="./public/css/register.css">
    <link rel="stylesheet" type="text/css" href="./public/css/header.css">
    <link rel="stylesheet" type="text/css" href="./public/css/items.css">
    <link rel="stylesheet" type="text/css" href="./public/css/khodo.css">
    <link rel="stylesheet" type="text/css" href="./public/css/forget.css">
    <link rel="stylesheet" type="text/css" href="./public/css/shop.css">
    <link rel="stylesheet" type="text/css" href="./public/css/guild.css">
    <link rel="stylesheet" type="text/css" href="./public/css/pvp.css">
    <link rel="stylesheet" type="text/css" href="./public/css/meridian.css">
</head>

<body>
    <div class="container">

        <?php include_once './mvc/views/DangKy.php';?>
        <?php include_once './mvc/views/DangNhap.php';?>
        <?php include_once './mvc/views/QuenMatKhau.php';?>
        <?php include_once './mvc/views/pvp.php';?>

            <div class="logo"></div>
            <!-- <img src="https://mhxzx.wanmei.com/images/cover20220601/slogan.png" class="slogan0601" /> -->
      
            <?php include_once './mvc/views/block/header.php';?>
            <?php include_once './mvc/views/KhoDo.php';?>
            <?php include_once './mvc/views/Shop.php';?>
            <video id="heade_video" muted loop autoplay src="https://volamthienha.online/video2.mp4"></video>

            <!--  <div class="slogan0923-1"></div> -->
            <div class="topcover"></div>


            <?php
if (isset($_SESSION["logined"])) {?>
            <label class="login">
            </label>
            <?php } else {?>
            <label for="label_login" class="login">
            </label>
            <?php }
?>

         <div class="content">
              <i class="sp-demarcation-d" style="
    position: absolute;
    left: 50%;
    margin-left: -960px;
    z-index: 3;
    background-position: -608px -1200px;
    width: 1920px;
    height: 116px;
    background-image: url(//game.gtimg.cn/images/lol/act/a20180619godbattle/pc_sprite.png);
    background-size: 2628px 1965px;
    background-repeat: no-repeat;
    margin-top: -50px;
"></i>
            <div class="page page1"
                style="background: url('https://i.imgur.com/kE6DEvi.jpg') no-repeat center top !important">
        <section class="stadium">
                <img class=" my_attack" src="" alt="">
                <p class="current_hp"></p>
                <section class="enemy"></section>
                <section class="hero"></section>
            </section>
             <div class="slides">
                <img class="item-slide" src="https://i.imgur.com/JMCAaHG.png" data-img="https://i.imgur.com/PehDxZK.jpg"
                    src="https://i.imgur.com/JMCAaHG.png"></img>
                <img class="item-slide" data-img="./public/images/xZfYGCp.jpeg"
                    src="https://i.imgur.com/gXAzOdG.png"></img>
                <img class="item-slide" data-img="./public/images/A0OW5b1.jpeg"
                    src="https://i.imgur.com/tON519O.png"></img>
                <img class="item-slide" data-img="./public/images/j86FONA.jpeg"
                    src="https://i.imgur.com/QpFOI1G.png"></img>
                <img class="item-slide" data-img="https://i.imgur.com/0DLKrAS.jpg"
                    src="https://i.imgur.com/zQ2UDGT.png"></img>
            </div>

            <ul class="attack-list"></ul>

            <section class="character-user">
    <div class="char-container"><img src="https://i.imgur.com/PKgx9xC.png" alt="https://i.imgur.com/PKgx9xC.png"><h2>linh thứu</h2><span class="type am"></span></div>
    <div class="char-container"><img src="https://i.imgur.com/LanoVDv.png" alt="https://i.imgur.com/LanoVDv.png"><h2>cửu lê</h2><span class="type moc"></span></div>
    <div class="char-container"><img src="https://i.imgur.com/dViuekk.png" alt="https://i.imgur.com/dViuekk.png"><h2>từ hàng</h2><span class="type duong"></span></div>
                                    </section>

            <section class="characters"></section>      
              </div>
            </div>
     <i class="sp-demarcation-d" style="
    position: absolute;
    left: 50%;
    margin-left: -960px;
    z-index: 3;
    background-position: -608px -1200px;
    width: 1920px;
    height: 116px;
    background-image: url(//game.gtimg.cn/images/lol/act/a20180619godbattle/pc_sprite.png);
    background-size: 2628px 1965px;
    background-repeat: no-repeat;
    margin-top: -50px;
"></i>
        <div class="page page3"
            style="background: url('https://i.imgur.com/OwJd5Ph.png') no-repeat center top !important">

        </div>
    </div>

    <!-- play âm nhạc -->
    <label class="music">
        <audio hidden class="my_audio" controls>
            <source src="./music/Kiem-Hiep-Tinh-Bich-Phuong.mp3">
        </audio>
        <img class="play_audio" src="https://jianghu.res.netease.com/pc/fab/20220413134824/img/btn-music-h_49253eb.png"
            alt="">
        <img class="pause_audio" src="	https://jianghu.res.netease.com/pc/fab/20220413134824/img/btn-music_27ae903.png"
            alt="">
    </label>

    <main>
        </div>
        <header></header>


    </main>


    <div class="audio">
        <audio class="sfx"></audio>
        <audio class="music" loop></audio>
    </div>

    <div class="modal-out">
        <div class="modal-in">
            <div class="modal-in_container">
                <h1 class="result_battle"></h1>
                <p class="result_title"></p>

                <div class="result_suggest">
                    <p class="result_suggest--text" style="font-weight: bolder;"></p>
                </div>

                <div class="result_images">
                </div>
            </div>
        </div>
    </div>



    <!-- partial -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'>
    </script>
    <script src="./script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="./public/js/script.js"></script>
    <script type="text/javascript" src="./public/js/music.js"></script>
    <script type="text/javascript" src="./public/js/shop.js"></script>

</body>

</html>
<?php } else {
    header("location: ./TrangChu");
}?>