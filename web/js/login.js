window.onload=function(){
    $(".but1").click(function() {
        var name=document.getElementById('input1').value;
        var pass=document.getElementById('input2').value;
        console.log(name)
        console.log(pass)
        if(name!=""&&name!="undefined"&&pass!=""&&pass!="undefined"){
            var url1 =location.href.slice(0,location.href.indexOf('moblie/')+7);
            window.location.href =url1+"index.html?"+name;
        }
        else{
            var str= "«Î ‰»Î√‹¬ÎªÚ’À∫≈£°"
            alert(str);
        }
    })
    $(".register").click(function() {
        var url1 =location.href.slice(0,location.href.indexOf('moblie/')+7);
        window.location.href =url1+"regist.html?";
    })

}