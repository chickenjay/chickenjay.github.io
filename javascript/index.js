const GAME_DATA = { //Swiper里的文字介绍数据
    single: [{
        name: "       ",
        des: "                                                                                            ",
        url: "                         "
    }, //第一个为占位符
    {
        name: "木星",
        des: "木星是质量最大的一颗，它的质量甚至达到了其余行星加起来的2.5倍之多，体积也非常大，是地球的1313倍，所以晚上就算不用望远镜也可以看见它，同时它也是太阳系中自转最快的。木星有多达66颗自然卫星，由于卫星的作用，木星的运动也在变慢，同时卫星也在逐渐远离木星。",
        url: "https://baike.baidu.com/item/%E6%9C%A8%E6%98%9F/222105?fr=aladdin"
    },
    {
        name: "土星",
        des: "土星是第二大行星，在古代被叫做镇星，在八大行星里它是是密度最小的，可以漂浮在水上。土星是一个扁球体，这也是他自转很快还有流质地表的原因。土星有两个非常明显的光环，比木星的明亮许多，但是实际上这些光环是由无数微小物体构成的。",
        url: "https://baike.baidu.com/item/%E5%9C%9F%E6%98%9F/136354"
    },
    {
        name: "天王星",
        des: "天王星是最冷的，也是第三大的，和海王星比起来它体积较大但质量较小。它又岩石和各种各样的冰构成，大气层为蓝色，它有27颗自然卫星，其中有两颗还未命名，这些卫星命名并不是和其他天体一样用古神话任务命名，而是用莎士比亚和罗马教皇的著作中的人物来命名。",
        url: "https://baike.baidu.com/item/%E5%A4%A9%E7%8E%8B%E6%98%9F/21805"
    },
    {
        name: "海王星",
        des: "海王星是第四大天体，海王星是被人们用公式算出来才发现的一颗行星，如果对海王星早一些年或者晚一些年搜寻，那么人们将没有办法在算出来是位置找到它，因为他的轨迹被另一颗行星影响了，海王星也有光环，但是只能观察到非常暗淡并且模糊的一个弧，而不是完整的圆环",
        url: "https://baike.baidu.com/item/%E6%B5%B7%E7%8E%8B%E6%98%9F/30351"
    },
    {
        name: "火星",
        des: "是太阳系里的第七大的行星，在古代又叫荧火，因为它是红色的，闪闪发亮，并且亮度经常不同，每天在天空中的运动也十分不同，让人感到迷惑，所以也叫荧惑。它是目前太阳系里人类除了地球最好的住所，有不少飞行器对其进行过探索，但是火星表面温度要比地球寒冷非常多",
        url: "https://baike.baidu.com/item/%E7%81%AB%E6%98%9F/5627"
    },
    {
        name: "金星",
        des: "金星是这八大行星里面第六大的行星，但是是温度最高的行星，中国古代称之为太白金星，黎明之时现于东方日出，称之启明；日落之时现于西方月初，称之长庚。金星的自转很慢，并且它是倒转的，但是它的自转周期又和轨道周期同步，不知是共鸣还是巧合，除了太阳和月亮它就是夜晚天上最亮的星星了。",
        url: "https://baike.baidu.com/item/%E9%87%91%E6%98%9F/19410"
    }
  
    ],
    online: [{
        name: "",
        des: ""
    },
    {

        name: "水星",
        des: "水星是最接近太阳的行星，是八个星球里面最小且最轻的一个行星，和太阳同起同落，古代称他为辰星，水星的大小甚至比木星的卫星还要小。水星的昼夜温差也是在其他几个行星里面最大的，与之相比，金星表面的温度要高一点，但是稳定很多。",
        url: "https://baike.baidu.com/item/%E6%B0%B4%E6%98%9F/135917"
   
    },
    {
        name: "地球",
        des: "地球大家都很熟悉了，是人类的母星，也是第五大行星，是密度最大的。地球唯一的天然卫星是月亮，除了水星和金星，其他的行星都有它们独特的天然卫星，月球的重力只有地球的六分之一，49个月球差不多才有一个地球重，与月球的交互让地球转每隔100年会慢两毫秒。",
        url: "https://baike.baidu.com/item/%E5%9C%B0%E7%90%83/6431"
    },
    {
        name: "月球",
        des: "月球（英文名：Moon，拉丁文：Luna）是围绕地球旋转的球形天体，同时也是地球的天然卫星。在汉语中被俗称为月或月亮，古时又称为太阴、玄兔、婵娟、玉盘。",
        url: "https://baike.baidu.com/item/%E6%9C%88%E7%90%83/30767"
    },
    {
        name: "冥王星",
        des: "冥王星（ Pluto，小行星编号为134340，天文符号为♇）是柯伊伯带中的矮行星。冥王星是被发现的第一颗柯伊伯带天体，第一颗类冥天体，是太阳系内已知体积最大、质量第二大的矮行星。",
        url: "https://baike.baidu.com/item/%E5%86%A5%E7%8E%8B%E6%98%9F/137498"
    }
    ]
}
top = ['210vh', 'calc(210vh + 253px)', 'calc(210vh + 506px)', 'calc(210vh)', 'calc(210vh + 253px)', 'calc(210vh + 506px)'];

left = ['234px', '144px', '218px'];

function pow(x, n) {
    let ret = 1;
    for (let i = 0; i < n; i++) {
        ret *= x;
    }
    return ret;
}

function easeInQuart(x) {
    return x * x * x * x;
}

function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
}

let animated = { s2: false, s3: false };
window.addEventListener('scroll', () => {
    let scrolled = (document.documentElement.scrollTop) / (document.documentElement.clientHeight); // 当前在第几分屏
    
    console.log(scrolled);
    let siders = document.querySelectorAll('.sider');
    let banner = document.querySelector('.banner .span.hidden');
    let video = document.querySelectorAll('.video-section video')[0];
    let img = document.querySelectorAll('.video-section img')[0];
    let s3wrapper = document.querySelectorAll('.screen.s3 .wrapper svg');
    let WHRate = 1.77777778;
    let sides = document.querySelectorAll('.sidebar .side');
    //----分页器----
    for (side of sides) {
        side.classList.remove("colored");
    }
    if (scrolled < 0.75) sides[0].classList.add("colored");
    if (scrolled > 0.75 && scrolled < 1.75) sides[1].classList.add("colored");
    if (scrolled > 1.75 && scrolled < 3.75) sides[2].classList.add("colored");
    if (scrolled > 3.75 && scrolled < 4.5) sides[3].classList.add("colored");
    if (scrolled > 4.5) sides[4].classList.add("colored");
    //----第一屏----
    if (timer != -1 && scrolled > 0.8) {
        clearInterval(timer);
        timer = -1;
        document.getElementById("bgVideo").pause();
        $("#bgVideo").css("display", "none");
    }
    if (timer == -1 && scrolled < 0.5) {
        $("#bgVideo").css("display", "block");
        document.getElementById("bgVideo").play();
    }
    //----banner附加文字----
    if (scrolled > 1.75) {
        banner.style.opacity = 1;
    } else {
        banner.style.opacity = 0;
    }
    //----页面动画----
    if (scrolled >= 0.85) {
        $(".banner").css("opacity", 1);
    } else {
        $(".banner").css("opacity", 0);
    }
    if (!animated["s2"] && scrolled > 0.6) {
        $("#warpper1,#warpper2").css("animation-play-state", "running");
        $(".skew .line").fadeIn();
        $(".screen.s2 .wrapper .btn").css("opacity", 1);
        animated["s2"] = true;
    }
    if (scrolled < 2) {
        video.style.width = "106.52vw"; // 1944 / 18.25 + 'vw';
        img.style.width = "107.56vw"; // 1963 / 18.25 + 'vw';
    }
    if (scrolled > 2 && scrolled < 3) {
        let width = 747 + 1197 * (1 - easeInOutCubic(scrolled - 2)); // 747 + (1944 - 747) * (1 - easeInOutCubic(scrolled - 2));
        video.style.width = width / 18.25 + 'vw';
        img.style.width = width * 1.01 / 18.25 + 'vw';
    }
    if (scrolled > 3) {
        video.style.width = "40.93vw"; // 747 / 18.25 + 'vw';
        img.style.width = "41.315vw"; // 754 / 18.25 + 'vw';
    }
    if (!animated["s3"] && scrolled > 2.9) {
        let i = 1;
        for (sider of siders) {
            sider.style.animation = "getin" + i + " 1s";
            sider.style.visibility = "visible";
            i++;
        }
        animated["s3"] = true;
    }
    if (scrolled < 2.5) {
        for (sider of siders) {
            sider.style.visibility = "hidden";
            sider.style.animation = "";
        }
        animated["s3"] = false;
    }
    if (scrolled < 4) {
        for (item of s3wrapper) {
            item.style.opacity = "0";
        }
    }
    if (scrolled > 3.7) {
        for (item of s3wrapper) {
            item.style.opacity = "1";
        }
        $(".imgContainer").css("opacity", 1);
        $("#b1").text("从地球");
        $("#b2").text("望向宇宙");
    }
    if (scrolled > 4.5) {
        $("#s5l1, #s5l2, #s5l3").css({
            opacity: 1,
            transform: "none"
        });
    }
})

let timer = -1;
$(document).ready(function () {
    $("#s1l1, #s1l2, #s1l3").css({
        opacity: 1,
        transform: "none"
    });
    setTimeout(() => {
        $("#bgVideo").fadeIn(1000);
        $(".promote").fadeIn(2000);
    }, 1500);
    timer = setInterval(function () {
        $(".promote").animate({
            bottom: "+=50px"
        }, {
            duration: 2000
        }).queue(function (next) {
            $(".promote").fadeOut(function () {
                $(".promote").css("bottom", "0");
            });
            next();
        }).queue(function (next) {
            $(".promote").fadeIn();
            next();
        });
    }, 10000);
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        effect: 'slide',
        observeParents: true,
        observer: true,
        slidesPerView: 3,
        loop: false,
        virtualTranslate: true,
        speed: 500,
        centeredSlides: true,
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    mySwiper.on('slideChange', function () {
        console.log(mySwiper.realIndex);
        if (status[0]) {
            if (mySwiper.realIndex > GAME_DATA.single.length) {
                $("#gameName").text(GAME_DATA.single[0].name);
                $("#gameDes").text(GAME_DATA.single[0].des);
                $("#gameSite").attr("href", GAME_DATA.single[0].url);
            } else {
                $("#gameName").text(GAME_DATA.single[mySwiper.realIndex + 1].name);
                $("#gameDes").text(GAME_DATA.single[mySwiper.realIndex + 1].des);
                $("#gameSite").attr("href", GAME_DATA.single[mySwiper.realIndex + 1].url);
            }
        } else if (status[1]) {
            if (mySwiper.realIndex > GAME_DATA.online.length) {
                $("#gameName").text(GAME_DATA.online[0].name);
                $("#gameDes").text(GAME_DATA.online[0].des);
                $("#gameSite").attr("href", GAME_DATA.online[0].url);
            } else {
                $("#gameName").text(GAME_DATA.online[mySwiper.realIndex + 1].name);
                $("#gameDes").text(GAME_DATA.online[mySwiper.realIndex + 1].des);
                $("#gameSite").attr("href", GAME_DATA.online[mySwiper.realIndex + 1].url);
            }
        }
    });
    let status = [false, false];
    let slides = document.querySelectorAll('.swiper-container .skew-fix img');
    $("#more1").click(function (e) {
        e.preventDefault();
        let line = document.querySelector('.screen.s2 .wrapper .skew');
        if (!status[0]) {
            let i = 0;
            slides.forEach(slide => {
                if (i == 0) slide.setAttribute("src", "./source/img/game/1.jpg");
				
                else if (i<7)slide.setAttribute("src", "./source/img/game/" + i+ ".jpg");
                i++;
            });
            line.style.transform = "translate(-18.5vw,0)";
            $(".swiper-container").fadeIn();
            $(".mask").css("display", "flex");
            $("#more1 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
            $("#warpper1").css({
                transform: "translate(-20%,-20%)"
            });
            $("#gameName").text(GAME_DATA.single[1].name);
            $("#gameDes").text(GAME_DATA.single[1].des);
            $("#gameSite").attr("href", GAME_DATA.single[1].url);
        } else {
            mySwiper.slideTo(0, 0);
            line.style.transform = "translate(0px,0)";
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut();
            $("#more1 svg text tspan").html("了解更多");
            $("#warpper1").css({
                transform: "none"
            });
        }
        status[0] = !status[0];
    });
    $("#more2").click(function (e) {
        e.preventDefault();
        let line = document.querySelector('.screen.s2 .wrapper .skew');
        if (!status[1]) {
            let i = GAME_DATA.single.length ;
            slides.forEach(slide => {
                if (i == 8) slide.setAttribute("src", "./source/img/game/" + (2 * i) + ".jpg");
                else slide.setAttribute("src", "./source/img/game/" + i + ".jpg");
                i++;
            });
            line.style.transform = "translate(15vw,0)";
            $(".swiper-container").fadeIn();
            $("#gameName").text(GAME_DATA.online[1].name);
            $("#gameDes").text(GAME_DATA.online[1].des);
            $("#gameSite").attr("href", GAME_DATA.online[1].url);
            $(".mask").css("display", "flex");
            $(".mask h3").css("padding-right", "15%");
            $(".swiper-container").css({
                left: "-22%",
                right: "auto"
            });
            $(".mask").css({
                left: "-100px",
                right: "auto",
                width: "50%"
            });
            $("#warpper2").css({
                transform: "translate(20%,24%)"
            });
            $("#more2 svg text tspan").html("&nbsp;&nbsp;&nbsp;&nbsp;关&nbsp;闭");
        } else {
            mySwiper.slideTo(0, 0);
            line.style.transform = "translate(0px,0)";
            $(".swiper-container").fadeOut();
            $(".mask").fadeOut(() => {
                $(".mask").css({
                    left: "auto",
                    right: "0",
                    width: "80vw"
                });
                $(".swiper-container").css({
                    left: "auto",
                    right: "0"
                });
            });
            $(".mask h3").css("padding-right", "50%");
            $("#warpper2").css({
                transform: "none"
            });
            $("#more2 svg text tspan").html("了解更多");
        }
        status[1] = !status[1];
    });
    $("#hof").click(function (e) {
        e.preventDefault();
        $("#waterflow").fadeIn();
        $(".closeBtn").fadeIn();
        $("#b1").text("宇宙");
        $("#b2").text("奇观");
        $(".sidebar, .imgContainer").css("filter", "blur(10px)");
    });
    $("#tl").click(function (e) {
        e.preventDefault();
        $("#timeline").fadeIn();
        $(".closeBtn").fadeIn();
        $("#b1").text("宇宙");
        $("#b2").text("大事记");
        $(".sidebar").css("filter", "blur(15px)");
    });
    $(".closeBtn").click(function (e) {
        e.preventDefault();
        $(".sidebar, .imgContainer").css("filter", "none");
        $("#waterflow").fadeOut();
        $("#timeline").fadeOut();
        $(".closeBtn").fadeOut();
        $("#b1").text("从地球");
        $("#b2").text("望向宇宙");
    });
    $(".sider").hover(function (e) {
        console.log(e);
        $(".text-view." + e.currentTarget.classList[1]).addClass("hover");
    }, function (e) {
        $(".text-view." + e.currentTarget.classList[1]).removeClass("hover");
    });
    $("#hof").hover(function () {
        $("#iC1 img").addClass("hover");
    }, function () {
        $("#iC1 img").removeClass("hover");
    }
    );
    $("#tl").hover(function () {
        $("#iC2 img").addClass("hover");
    }, function () {
        $("#iC2 img").removeClass("hover");
    }
    );
});