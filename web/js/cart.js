$(function() {
    //加入购物车
    var Url1 = location.href.substr(location.href.indexOf('?')+1);
    var shuz =Url1.split('&');
    var name = decodeURI(shuz[0]);
    name =name.replace(/\s/g,"");
    var num1 =  decodeURI(shuz[1]);
    var src1 =  decodeURI(shuz[2])
    var src2= src1.substr(src1.indexOf('web/')+4);
    var j=-1;
    var i=0;
    if(num1=="undefined"||num1=="NaN") {
    }
    else{
        var x = document.getElementsByName("name1");
        var num = Number(num1);
        console.log(x[0].innerText);
        for (;i<5;i++) {
            var name1 = x[i].innerText.replace(/\s/g,"");
            console.log(name1);
            if (name1== name){
                j =i;
                console.log(j);
            }
        }
        if (j!=-1) {
            var y = document.getElementsByName("num1");
            num=Number(y[j].value)+num;
            console.log(num);
            y[j].value=num;

        }
        else{
            var sourceNode = document.getElementById("tou");
            var clonedNode = sourceNode.cloneNode(true);
            clonedNode.setAttribute("id", "tou" + 1); // 修改一下id 值，避免id 重复
            // sourceNode.parentNode.appendChild(clonedNode);
            // sourceNode.parentNode.insertBefore(clonedNode.localName);
            sourceNode.parentNode.insertBefore(clonedNode, sourceNode)
            $("#tou1 .item-msg").html(name);
            $("#tou1 .itxt").attr("value",num);
            $("#tou1 .img1").attr("src",src2);
        }
    }


    $(".cart-list ul").mouseover(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".cart-th input[type='checkbox']").click(function() {
        if (this.checked) {
            $(".yui3-u-3-8 input[type='checkbox']").prop("checked",true);
        }
        else {
            $(".yui3-u-3-8 input[type='checkbox']").prop("checked",false);
        }
        me_sum();
    });
    
    $(".good-checkbox").click(function() {
        me_sum();
        var flag = true;
        for (var i = 0; i < $(".good-checkbox").length; i++) {
            if (! $(".good-checkbox")[i].checked) {
                flag = false;
                break; 
            }
        }
        $(".cart-th input[type='checkbox']").prop("checked",flag);
    });
    $(document).ready(function(){  
        me_sum();
    }); 
    function me_sum() {
        var sum = 0;
        for (var i = 0; i < $(".goods-list").length; i++) {
            if ($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html() == undefined) {
                console.log($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html());
                continue;
            }
            else if (! $(".good-checkbox")[i].checked) {
                continue;
            }
            else {
                sum = sum + Number($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html());
            }
        }
        console.log(sum);
        $(".summoney span").html(sum.toFixed(2));
    };
    $(".goods-list .plus").click(function() {
        var num = $(this).siblings(".itxt").val();
        var m = $(this).siblings(".itxt").val(Number(num)+1).val();
        var sum = ($(this).parent().parent().siblings(".yui3-u-1-8").eq(1).children(".price").html() * m).toFixed(2);
        $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html(sum);
        me_sum();
    });
    $(".goods-list .mins").mouseover(function() {
        if ($(this).siblings(".itxt").val() <= 1) {
            $(this).css("cursor","not-allowed");
        }
        else {
            $(this).css("cursor","pointer");
        }
    });
    $(".goods-list .mins").click(function() {
        if ($(this).siblings(".itxt").val() <= 1) {
            $(this).css("cursor","not-allowed");
        }
        else {
            $(this).css("cursor","pointer");
            num =  $(this).siblings(".itxt").val();
            $(this).siblings(".itxt").val(num-1);
            var m = $(this).parent().parent().siblings(".yui3-u-1-8").eq(1).children(".price").html();
            var sum = $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html();
            $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html((sum - m).toFixed(2));
            me_sum();
        }
    });
    $(".del1 a").click(function() {
        $(this).parent().parent().siblings().remove();
        $(this).parent().parent().remove();
        $(this).closest('.goods-list').remove();
        me_sum();
    });
    $(".sum-btn").click(function() {
        alert("结算成功！");
    });

});