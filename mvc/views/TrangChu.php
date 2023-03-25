<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="format-detection" content="telephone=no" />
    <link rel="Shortcut Icon" href="https://mhxzx.games.wanmei.com/favicon.ico" />
    <link rel="bookmark" href="https://mhxzx.games.wanmei.com/favicon.ico" />
    <link href="https://mhxzx.games.wanmei.com/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link rel="bookmark" href="https://mhxzx.games.wanmei.com/favicon.ico" />
    <title>Võ Lâm Thiên Hạ</title>

    <link rel="stylesheet" type="text/css" href="https://static.games.wanmei.com/public/style/swiper-4.5.0.min.css">
    <link rel="stylesheet" type="text/css" href="https://static.games.wanmei.com/public/style/animate.min.css" />
    <link rel="stylesheet" type="text/css" href="https://mhxzx.wanmei.com/style/cover20220601.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="https://mhxzx.games.wanmei.com/style/coveryy20210409.css" />
    <link rel="stylesheet" type="text/css" href="./public/css/vongquay.css">
    <link rel="stylesheet" type="text/css" href="./public/css/responsive.css">
    <link rel="stylesheet" type="text/css" href="./public/css/home.css" />
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

    <!--
    <script type="text/javascript"
        src="https://static.games.wanmei.com/public/js/isMobile.js"></script> -->
</head>

<body>

    <div class="container">
            <?php
if (isset($_SESSION["logined"])) {?>
    <a class="btn btn-logout logout">Đăng xuất</a>

    <?php } else {?>
    <label for="label_login" class="btn-login">
    <a class="btn">Đăng Nhập</a>
    </label>

    <?php }
?>
        <input type="checkbox" hidden name="" id="label_login">
        <label for="label_login" class="label_login"></label>
        <input type="checkbox" hidden name="" id="label_register">
        <label for="label_register" class="label_register"></label>
        <input type="checkbox" hidden name="" id="label_forget">
        <label for="label_forget" class="label_forget"></label>

        <?php include_once './mvc/views/DangKy.php';?>
        <?php include_once './mvc/views/DangNhap.php';?>
        <?php include_once './mvc/views/QuenMatKhau.php';?>
        <?php include_once './mvc/views/Guild.php';?>
        <?php include_once './mvc/views/pvp.php';?>
        <?php include_once './mvc/views/KinhMach.php';?>

        <div class="page top">
            <div class="logo"></div>
            <!-- <img src="https://mhxzx.wanmei.com/images/cover20220601/slogan.png" class="slogan0601" /> -->
            <img src="" class="layer2" />
            <i class="sp-demarcation-b" style="
    position: absolute;
    left: 50%;
    background-position: -708px 0;
    width: 1920px;
    height: 206px;
    margin-left: -960px;
    bottom: -110px;
    background-image: url(//game.gtimg.cn/images/lol/act/a20180619godbattle/pc_sprite.png);
    background-size: 2628px 1965px;
    background-repeat: no-repeat;
    -webkit-animation: prevent .1s linear forwards;
    animation: prevent .1s linear forwards;
    z-index: 3;
"></i>
            <img src="" class="cover_layer" />
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

        </div>
        <div class="content">
            <div class="page page1"
                style="background: url('https://i.imgur.com/kE6DEvi.jpg') no-repeat center top !important">
                <div class="edition1_con">
                    <?php include_once './mvc/views/VongQuay.php'?>

                </div>
            </div>
            <div class="page page2"
                style="background: url('https://game.gtimg.cn/images/lol/act/a20180619godbattle/pc/bg-3.jpg') no-repeat center top !important">
                <div class="cloud2"></div>
            </div <div class="title-inte">
        </div>
        <div class="rankings">
            <div class="tab-rankins">
            </div>
            <ul class="rank_tab">
                <li class="">
                    <a class="rank_tab__item ranking__guid" rel="rank_type=getGuildRanking">
                        BANG HỘI
                    </a>
                </li>
                <li class="">
                    <a class="rank_tab__item ranking__personally" rel="rank_type=getUserRanking">
                        CÁ NHÂN
                    </a>
                </li>
                <li class="">
                    <a class="rank_tab__item off " rel="rank_type=getUserRanking">
                        Vòng Quay
                    </a>
                </li>
                <li class="">
                    <a class="rank_tab__item off " rel="rank_type=getUserRanking">
                        Đồng Hành
                    </a>
                </li>
                <li class="">
                    <a class="rank_tab__item off " rel="rank_type=getUserRanking">
                        Vượt Ải
                    </a>
                </li>
                </li>
                <li class="">
                    <a class="rank_tab__item off " rel="rank_type=getUserRanking">
                        PVP
                    </a>
                </li>
            </ul>
            <div class="rankings_table">

            </div>

            <div class="paginations">

            </div>
        </div>

        <div class="videotab">

        </div>
        <video autoplay muted src="https://webdownload.wmupd.com/webdownload/client/mhxzx_202011gw_qy.mp4" id="tabvideo"
            poster=""></video>
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
    </div>
    </div>
    </div>


    </div>
    </div>
    </div>

    </div>
    </div>
    </div>
    <!-- 加入新服玩家群 -->
    <div class="pop" id="pop_join">
        <div class="pop_join_cont">
            <a class="pop_close"></a>
            <img src="https://mhxzx.wanmei.com/images/cover20220601/pop_code.png" class="pop_code" />
        </div>
    </div>
    <script type="text/javascript" src="https://static.games.wanmei.com/public/js/jq_183.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>

    <script type="text/javascript" src="https://static.games.laohu.com/_s/public/login_blv2.js"></script>
    <script type="text/javascript" src="https://static.games.laohu.com/_s/public/islogin.js"></script>

    <!--<script type="text/javascript" src="https://cstatic.games.wanmei.com/captchas/ai/js/wanmeiCaptcha.min.js"></script>-->
    <script type="text/javascript" src="https://static.games.wanmei.com/public/js/clipboard.min.js"></script>

    <script type="text/javascript" src="https://static.games.wanmei.com/public/js/jQueryRotate.2.2.js"></script>
    <script type="text/javascript" src="https://static.games.wanmei.com/public/js/swiper-4.5.0.min.js"></script>

    <script type="text/javascript" src="https://mhxzx.wanmei.com/js/cover20220601zhang.js?v=2"></script>
    <script type="text/javascript" src="https://static.games.wanmei.com/public/js/stat.js"></script>
    <script type="text/javascript"
        src="https://static.games.wanmei.com/public/commonData/gamesData/gameDownload/mhxzx-gameDownload.js?v=3">
    </script>
    <script type="text/javascript" src="https://task.games.wanmei.com/game/838/index.js">
    </script>
    <script type="text/javascript" src="https://mhxzx.wanmei.com/hot/download/js/downDesktop.js"></script>
    <script type="text/javascript" src="https://mhxzx.wanmei.com/js/commondownload0625.js"></script>
    <script type="text/javascript" src="https://mhxzx.wanmei.com/js/webSite_footer_qqlink0624.js"></script>
    <script type="text/javascript" src="https://static.games.wanmei.com/public/js/jquery.parallax.js"></script>
    <script type="text/javascript" src="https://mhxzx.wanmei.com/hot/download/js/downSearchData.js"></script>
    <script>
    $('.top').parallax();
    var swiper_n1 = new Swiper('.swiperVersion1', {
        pagination: {
            el: '.swiper-pagination-version1',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-version1',
            prevEl: '.swiper-button-prev-version1',
        }
    });

    $(".edition_nav a").on('click', function(params) {
        if (!$(this).attr("data-type") && !$(this).attr('href')) {
            alert("敬请期待！");
            return
        }
        if (typeof($(this).attr("data-type")) == "undefined") {
            return
        }
        $(this).addClass('on').siblings('a').removeClass('on')
        $('.edition_con .con').hide()

        $('.edition_con').find('.' + $(this).attr("data-type")).show()
        swiper_n1.update()
        // swiper_n2.update()
        //swiper_n3.update()
    })

    var swiper = new Swiper('.swiperVersion', {
        pagination: {
            el: '.swiper-pagination-version',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-version',
            prevEl: '.swiper-button-prev-version',
        },
    });

    var searchId = "360pz";
    $(".ewm_down").attr("src", dataDownload_search[searchId].qrcode);
    $(".btn_down_ios").attr("href", dataDownload_search[searchId].ios);
    $(".btn_down_android").attr("href", dataDownload_search[searchId].pcandroid);
    $(".ht2").attr("href", dataDownload_search[searchId].pcdesktop);
    </script>

    <script type="text/javascript" src="./public/js/account.js"> </script>
    <script type="text/javascript" src="./public/js/script.js"></script>
    <script type="text/javascript" src="./public/js/forgot.js"></script>
    <script type="text/javascript" src="./public/js/music.js"></script>
    <script type="text/javascript" src="./public/js/rankings.js"></script>
    <script type="text/javascript" src="./public/js/shop.js"></script>
    <script type="text/javascript" src="./public/js/gatcha.js"></script>
    <script type="text/javascript" src="./public/js/guild.js"></script>
    <script type="text/javascript" src="./public/js/meridian.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
</body>

</html>