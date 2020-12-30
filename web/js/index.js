/*加载完毕事件 在改事件中 写的js代码去获取dom元素 就一定不会出现找不到的问题*/
window.onload=function(){
    /*滚动效果*/
    yzsScroll();
    /*倒计时效果*/
    cutDownTime();
    /*轮播图效果*/
    banner();
    left_scroll();
    $(".gouwu").click(function() {
        var url1 =location.href.slice(0,location.href.indexOf('moblie/')+7);
        window.location.href =url1+"cart.html?";
    })
    //登录获取参数
    var name = location.href.substr(location.href.indexOf('?')+1);
    console.log(location.href.substr(location.href.indexOf('?')+1));
    var a=/^[a-zA-Z0-9]{3,8}$/
    var b=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    var c=/^1[34578][0-9]{9}/;
    if(a.test(name)||b.test(name)||c.test(name)){
        name=name.substring(0,3)
        console.log(name);
        $(".header_login").html(name);
        $(".yin").hide();
    }
}
/*滚动效果*/
function yzsScroll(){
    var navDom=document.querySelector('.jd_nav');
    var maxDistance=navDom.offsetTop+navDom.offsetHeight;
    var headerDom=document.querySelector('.jd_header');
    headerDom.style.backgroundColor='rgba(201,21,35,0)';
    /*注册onscroll事件*/
    window.onscroll=function(){
        var scrollDistance=window.document.body.scrollTop;
        var percent =scrollDistance/maxDistance;
        if(percent>1){
            percent=1;
        }
        headerDom.style.backgroundColor='rgba(201,21,35,'+percent+')';
    }
}
/*倒计时效果*/
function cutDownTime(){
    var totalHour=4;
    /*时间转化秒*/
    var totalSec=totalHour*60*60+1;
    var hour =document.querySelectorAll('.hour span');
    var minute =document.querySelectorAll('.minute span');
    var second =document.querySelectorAll('.second span');
    var timer = setInterval(function(){
        if(totalSec<=0){
            clearInterval(timer);
            alert("活动已经结束");
            return;
        }
        totalSec--
        var hourTime=Math.floor(totalSec/3600);
        var minuteTime=Math.floor(totalSec%3600/60);
        var secondTime=totalSec%60;
        hour[0].innerHTML=Math.floor(hourTime/10);
        hour[1].innerHTML=hourTime%10;
        minute[0].innerHTML=Math.floor(minuteTime/10);
        minute[1].innerHTML=minuteTime%10;
        second[0].innerHTML=Math.floor(secondTime/10);
        second[1].innerHTML=secondTime%10;
    },1000);
}

/*轮播图效果*/
function banner(){
    var width=document.body.offsetWidth;
    var moveUl=document.querySelector('.banner_images');
    var indexLi=document.querySelectorAll('.banner_index li');
    var index=1;
    var startTransition=function(){
        moveUl.style.transition="all .3s";
    }
    var endTransition=function(){
        moveUl.style.transition="";
    }
    var setTransform=function(distance){
        moveUl.style.transform='translate3D('+distance+'px,0,0)';
    }
    var timeId=setInterval(function(){
        index++;
        startTransition();
        setTransform(index*width*-1);
    },2000);
    moveUl.addEventListener('webkitTransitionEnd',function(){
        if(index>8){
            index=1;
            endTransition();
            setTransform(index*width*-1);
        }else if(index<1){
            index=8;
            endTransition();
            setTransform(index*width*-1);
        }
        /*添加和删除索引样式*/
        for(var i=0;i<indexLi.length;i++){
            indexLi[i].className='';
        };
        indexLi[index-1].className="current";
    });
    moveUl.addEventListener('transitionEnd',function(){
        if(index>8){
            index=1;
        }
        /*添加和删除索引样式*/
        for(var i=0;i<indexLi.length;i++){
            indexLi[i].className='';
        };
        indexLi[index-1].className="current";
    });
    /*定义变量 记录开始X*/
    var startX=0;
    /*记录移动值*/
    var moveX=0;
    /*记录*/
    var distanceX=0;
    //触摸开始
    moveUl.addEventListener('touchstart',function(event){
        clearInterval(timeId);
        endTransition();
        startX=event.touches[0].clientX;

    });
    //触摸中
    moveUl.addEventListener('touchmove',function(event){
        moveX=event.touches[0].clientX-startX;
        setTransform(moveX+index*-1*width);
    });
    //触摸结束
    moveUl.addEventListener('touchend',function(event){
        var maxDistance=width/2;
        if(Math.abs(moveX)>maxDistance){
            if(moveX>0){
                index--;
            }else{
                index++;
            }
            startTransition();
            setTransform(index*width*-1);
        }else{
            startTransition();
            setTransform(index*width*-1);
        }
        //重启定时器
        timeId=setInterval(function(){
            index++;
            startTransition();
            setTransform(index*width*-1);

        },2000)
    });
}

function left_scroll(){
    var moveprod=document.querySelector('.seckul');
    var windWidth=document.querySelector('.content_bottom').offsetWidth;
    var ulWidth=moveprod.offsetWidth;
    var minDistance=windWidth-ulWidth;
    var maxDistance=0;

    var startX1=0;
    var moveX1=0;
    var distanceX1=0;
    var delayDistance=50;
    var yzs_transition=function(time){
        moveprod.style.transition='all .'+time+'s';
    }
    var yzs_translate=function(dist){
        moveprod.style.transform='translateX('+dist+'px)';
    }
    //触摸开始
    moveprod.addEventListener('touchstart',function(event){
        startX1=event.touches[0].clientX;
    });
    //触摸中
    moveprod.addEventListener('touchmove',function(event){
        moveX1=event.touches[0].clientX-startX1;
        if((moveX1+distanceX1)>(maxDistance+delayDistance)){
            moveX1=0;
            distanceX1=maxDistance+delayDistance;
        }else if((moveX1+distanceX1)<(minDistance-delayDistance)){
            moveX1=0;
            distanceX1=minDistance-delayDistance;
        }
        yzs_transition(3);
        yzs_translate(moveX1+distanceX1);
    });
    //触摸结束
    moveprod.addEventListener('touchend',function(event){
        distanceX1+=moveX1;
        if(distanceX1>maxDistance){
            distanceX1=maxDistance;
        }else if(distanceX1<minDistance){
            distanceX1=minDistance;
        }
        yzs_transition(4);
        yzs_translate(distanceX1);
    });
}