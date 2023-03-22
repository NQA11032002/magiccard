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

    <div class="nav"
        style="display: block;width: 138px;background-image: url(http://eclanding-server.100bt.com/1578569890068_266363.png);transform: scale(1);position: fixed;z-index: 99;top: 400px;bottom: unset;right: 30px;height: 472px;display: block;">
        <a class="a1" data-scroll="0">Home</a>
        <a class="a2 on" data-scroll="1000">Tin Tức</a>
        <a class="a3" data-scroll="1900">Xếp Hạng</a>
        <a class="a4" data-scroll="2500">Sự Kiện</a>
        <a class="a5" data-scroll="4584">Vòng Quay</a>
    </div>
    <div class="container">
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
            <img src="https://game.gtimg.cn/images/yxzj/match/wzmnzdg/bg-nav.png" class="cover_layer" />
            <?php include_once './mvc/views/block/header.php';?>
            <?php include_once './mvc/views/KhoDo.php';?>
            <?php include_once './mvc/views/Shop.php';?>
            <video id="heade_video" muted loop autoplay src=""></video>

            <!--  <div class="slogan0923-1"></div> -->
            <div class="topcover"></div>

            <?php
if (isset($_SESSION["logined"])) {?>
            <label class="login">
                <a class="logout">Đăng xuất</a>
            </label>
            <?php } else {?>
            <label for="label_login" class="login">
                <a>Đăng Nhập</a>
            </label>
            <?php }
?>
        </div>
        <div class="content">
            <div class="page page1"
                style="background: url('https://game.gtimg.cn/images/yxzj/match/wzmnzdg/bg-intr.png') no-repeat center top !important">
                <div class="edition_con">
                    <div class="con g1" style="display: block;">
                        <div class="right scroll">
                            <div class="tit"></div>
                            <h5></h5>
                            <p></p>
                            <p style="
    margin-top: 150px;
    margin-left: 220px;
    text-align: left;
">Thời gian: Từ 00h00 ngày 25/02 - 23h59p ngày 10/03/2023.
                                Đối tượng tham gia: dành cho mọi thành viên</p>

                            </p>
                        </div>
                        <div class="left">
                            <div class="videoimg">
                                <div class="swiperVersion">
                                    <img src="https://mhxzx.games.wanmei.com/images/cover20220601/banben1.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="con g3">
                        <div class="right scroll">
                            <div class="tit"></div>
                            <h5></h5>
                            <p style="
    margin-top: 150px;
    margin-left: 220px;
    text-align: left;
">Thời gian: Từ 00h00 ngày 25/02 - 23h59p ngày 10/03/2023.
                                Đối tượng tham gia: dành cho mọi thành viên</p>
                            <p>
                            </p>
                        </div>
                        <div class="left">
                            <div class="videoimg">
                                <div class="swiperVersion">
                                    <img src="https://mhxzx.games.wanmei.com/images/cover20220601/banben4.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="con g4">
                        <div class="right scroll">
                            <div class="tit"></div>
                            <h5></h5>
                            <p style="
    margin-top: 150px;
    margin-left: 220px;
    text-align: left;
">Thời gian: Từ 00h00 ngày 25/02 - 23h59p ngày 10/03/2023.
                                Đối tượng tham gia: dành cho mọi thành viên</p>
                        </div>
                        <div class="left">
                            <div class="videoimg">
                                <div class="swiperVersion">
                                    <img src="https://mhxzx.games.wanmei.com/images/cover20220601/banben5.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="page page2"
                style="background: url('https://game.gtimg.cn/images/yxzj/match/wzmnzdg/bg-live.png') no-repeat center top !important">
                <div class="cloud2"></div>
            </div>
            <div class="title-inte"></div>
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
                        <a class="rank_tab__item ranking__lucky" rel="rank_type=getUserRanking">
                            Vòng Quay
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
            <video autoplay muted src="https://webdownload.wmupd.com/webdownload/client/mhxzx_202011gw_qy.mp4"
                id="tabvideo" poster=""></video>


        </div>
        <div class="page page3"
            style="background: url('https://game.gtimg.cn/images/yxzj/match/wzmnzdg/bg-inte.png') no-repeat center top !important">
            <!-- <div class="tit"><img src="https://mhxzx.wanmei.com/images/cover20220428/tit_wnxf.png" alt=""></div> -->
            <div class="content5">
                <div class="lottery-list">
                    <div class="item item_1" data-key="waistDrum" data-name="腰鼓">
                        <div class="num">0</div>
                        <div class="num1">Hoàng Nhan Hồng Liệt</div>
                    </div>
                    <div class="item item_2" data-key="flute" data-name="横笛">
                        <div class="num">0</div>
                        <div class="num1">Độc Cô Kiếm</div>
                    </div>
                    <div class="item item_3" data-key="harp" data-name="竖琴">
                        <div class="num">0</div>
                        <div class="num1">Dương Hy Liệt</div>
                    </div>
                    <div class="item item_4" data-key="lute" data-name="琵琶">
                        <div class="num">0</div>
                        <div class="num1">Võ Tắc Thiên</div>
                    </div>
                    <div class="item item_5" data-key="lusheng" data-name="芦笙">
                        <div class="num">0</div>
                        <div class="num1">Dương Ảnh Phong</div>
                    </div>
                    <div class="item item_6" data-key="chimes" data-name="编钟">
                        <div class="num">0</div>
                        <div class="num1">Dương Anh Sơ</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="transbox" style="display:none;">
            <span class="btnskip"></span>
            <!-- <video autoplay="autoplay" muted="" src="https://webdownload.wmupd.com/webdownload/client/mhxzx_gw_0509begin.mp4"
        id="bgvideo"></video> -->
        </div>
        <div class="sharebox">
            <div class="qrimg"></div>
        </div>
    </div>


    <div class="prompt prompt-share">
        <div class="popbox">
            <span class="close"></span>
            <img src="https://mhxzx.wanmei.com/images/cover20200612/share.png" alt="">
        </div>
    </div>
    <div class="page page4"
        style="background: url('https://game.gtimg.cn/images/yxzj/match/wzmnzdg/bg-way.png') no-repeat center bottom !important">
        <?php include_once './mvc/views/VongQuay.php'?>
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