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
            <video id="heade_video" muted loop autoplay src="https://volamthienha.online/kayn.mp4"></video>

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
                style="background: url('https://game.gtimg.cn/images/lol/act/a20180619godbattle/pc/bg-2.jpg') no-repeat center top !important">
               <div class="edition1_con">
                 <div class="boss_rank_wrap">


    <div class="god god1">
        
        
        
        <img src="//huyaimg.msstatic.com/avatar/1056/28/caf548daf2870b3552a5776bb0d7c8_180_135.jpg?1515373808" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">诸神之王</div>
        <div class="awake_name">
           血色秋枫
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1088/43/04e80eec072cdbfc4b9c2c4c655a1f_180_135.jpg?1546149084" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">血色-刘杀鸡</span>
            </div>
        
    </div>

    <div class="god god2">
        
            <div class="deco deco2"></div>
        
        
        
        <img src="https://huyaimg.msstatic.com/avatar/1040/f6/2d1440b6b9108823c8fd370a3720e3_180_135.jpg?1539839211" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">苍穹之神</div>
        <div class="awake_name">
           集梦会长丶逼王团团长
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1079/9e/c008b3d87b701d64bbfc7485cf1f8d_180_135.jpg?1541523775" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">集梦会长</span>
            </div>
        
    </div>

    <div class="god god3">
        
            <div class="deco deco3"></div>
        
        
        
        <img src="https://huyaimg.msstatic.com/avatar/1002/1d/72036b93c61c3be69adddef1665fd6_180_135.jpg?1555751558" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">大地之神</div>
        <div class="awake_name">
           飞翔的八戒
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1026/8c/47df28db8dfbd2c3746542d57fe7a4_180_135.jpg?1552775664" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">江小白</span>
            </div>
        
    </div>

    <div class="god god4">
        
            <div class="deco deco4"></div>
        
        
            <div class="wrap_will_awake">
                <img src="//hd.huya.com/201904activity/img/logo_will_awake_cd83958.png" class="logo_will_awake">
            </div>    
        
        
        <img src="https://huyaimg.msstatic.com/avatar/1037/2f/e631189a5afc227e27bf7422cd8de2_180_135.jpg?1545848041" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">烈阳之神</div>
        <div class="awake_name">
           漫步云端【勿念】
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1068/e0/220b4eb0c89fe08cf06f887a96c10d_180_135.jpg?1556258247" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">JV-小尾巴【念漫】</span>
            </div>
        
    </div>

    <div class="god god5">
        
            <div class="deco deco5"></div>
        
        
        
        <img src="https://huyaimg.msstatic.com/avatar/1077/b0/fcd51ca902150adebfa517439ddcf9_180_135.jpg?1545999110" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">皓月之神</div>
        <div class="awake_name">
           莎lala丶王权富贵【村】
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1073/8b/9105922b671b356743d6691a987674_180_135.jpg?1525339430" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">中国蓝、莎啦啦莎富贵</span>
            </div>
        
    </div>

    <div class="god god6">
        
            <div class="deco deco6"></div>
        
        
        
        <img src="https://huyaimg.msstatic.com/avatar/1050/e5/7d4dee3ae173a0414cb93cf5c82867_180_135.jpg?1543057035" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">不灭之神</div>
        <div class="awake_name">
           周润发叔叔-搜索9012
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1056/cc/2ae247f33b3d03046c0b41eddf8ac9_180_135.jpg?1556306409" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">小小小酷哥</span>
            </div>
        
    </div>

    <div class="god god7">
        
            <div class="deco deco7"></div>
        
        
            <div class="wrap_will_awake">
                <img src="//hd.huya.com/201904activity/img/logo_will_awake_cd83958.png" class="logo_will_awake">
            </div>    
        
        
        <img src="https://huyaimg.msstatic.com/avatar/1022/c2/5f8d2fbf890fdec869c10b88cc3b1e_180_135.jpg?1553535346" class="head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
        <div class="cup_name">生机之神</div>
        <div class="awake_name">
           Ax丶斌
        </div>
        
            <div class="look_people">
                
                <img src="https://huyaimg.msstatic.com/avatar/1048/65/eed604eee5d2d3e6d1e45c23e150e1_180_135.jpg?1548541468" class="look_head_pic" onerror="this.onerror=null;this.src='https://v-cms-img.huya.com/huya/activitypic/201904_default.png'">
                见证者
                <span class="look_name">阿肖</span>
            </div>
        
    </div>
</div>

        </div>
            </div>
          <i class="sp-demarcation-s" style="
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
            <div class="page page2"
                style="background: url('https://game.gtimg.cn/images/lol/act/a20180619godbattle/pc/bg-3.jpg') no-repeat center top !important">
                <div class="cloud2"></div>
            </div
            
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
            <video autoplay muted src="https://webdownload.wmupd.com/webdownload/client/mhxzx_202011gw_qy.mp4"
                id="tabvideo" poster=""></video>
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
                style="background: url('https://game.gtimg.cn/images/lol/act/a20180619godbattle/pc/bg-4.jpg') no-repeat center top !important">
 <?php include_once './mvc/views/VongQuay.php'?>
  
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