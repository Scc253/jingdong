$(function() {
    //定时器
    $(document).ready(function() {
        countdown();
        setInterval(countdown, 1000);
    });

    function countdown() {
        var nowtime = +new Date();
        var inputtime = +new Date('2021-01-25 24:00:00');
        var times = (inputtime - nowtime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        $(".hour").html(h);
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        $(".minute").html(m);
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        $(".second").html(s);
    };
    //登录获取参数
    var name = location.href.substr(location.href.indexOf('?')+1);
    console.log(location.href.substr(location.href.indexOf('?')+1));
    var a=/^[a-zA-Z0-9]{3,8}$/
    var b=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    var c=/^1[34578][0-9]{9}/;
    if(a.test(name)||b.test(name)||c.test(name)){
        console.log(name);
        $(".name").html(name);
        $(".yin").hide();
    }
    //tob选项卡
    $("#navi li").mouseover(function() {
        $(".content").show();
        var index = $(this).index();
        $(".content>div").eq(index).show().siblings().hide();
    })
    $("#navi li").mouseout(function() {
        $(".content").hide();
    })

    $(".news-t a").click(function() {
        var index = $(this).index();
        $(".news-b ul").eq(index).show().siblings().hide();
        $(".redline").eq(index).show().siblings('.redline').hide();
    })
    $(".content").mouseover(function() {
        $(this).show();
    });
    $(".content").mouseout(function() {
        $(this).hide();
    });
    //轮播图
    for(var i = 0; i < $(".t-img li").length; i++) {
        $(".circle").append("<li></li>");
    }
    $(".circle li").eq(3).addClass("current");

    var index=3;
    $(".circle li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    });

    var time = setInterval(move,2000);
    function move() {
        index++;
        if (index==$(".t-img li").length){
            index=0
        }
        $(".circle li").eq(index).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    };
    $(".grid-col2-t").hover(function () {
        clearInterval(time);
    },
    function () {
        time=setInterval(move,2000);
    });
    $(".arrow-r").click(function () {
       move();
    });
    function moveL() {
        index--;
        if (index==-1){
            index=$(".t-img li").length-1;
        }
        $(".circle li").eq(index).addClass("current").siblings().removeClass("current");
        $(".t-img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }
    $(".arrow-l").click(function () {
        moveL();
    });
    //侧边导航
    $(".fixedtool li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".fixedtool .a0").click(function() {
        din.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });
    $(".fixedtool .a1").click(function() {
        miao.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });
    $(".fixedtool .a2").click(function() {
        hao.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });
    $(".fixedtool .a3").click(function() {
        din1.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });
    $(".fixedtool .a4").click(function() {
        din2.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });
    $(".fixedtool .a5").click(function() {
        din3.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });
    $(".fixedtool .a6").click(function() {
        din4.scrollIntoView(
            {
                behavior:'smooth',
                block:'start'
            }
        );
    });

});