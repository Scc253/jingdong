window.onload=function(){
    $(".but1").click(function() {
        var name=document.getElementById('input1').value;
        var url1 =location.href.slice(0,location.href.indexOf('moblie/')+7);
        console.log(1);
        window.location.href =url1+"index.html?"+name;
    })
}