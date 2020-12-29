
window.onload=function() {
	var checkboxLen;
	var checkedLen = 0;
	$(function () {
		var checkbox = document.getElementsByClassName('mycheckbox')
		checkboxLen = checkbox.length;
	})
	$(".index").click(function() {
		var url1 =location.href.slice(0,location.href.indexOf('moblie/')+7);
		window.location.href =url1+"index.html?";
	})
	// 多选框-统一
	$(document).on('click', '.checkbox', function () {
		if ($(this)[0].checked) {
			// 需变 选中
			console.log($(this)[0].checked);
			$(this).prev().attr('src', 'images/tick-s.png');
		} else {
			// 需变 不选中
			$(this).prev().attr('src', 'images/tick.png');
		}
	})

	//加入购物车
	var Url1 = location.href.substr(location.href.indexOf('?')+1);
	var shuz =Url1.split('&');
	var name = decodeURI(shuz[0]);
	var num1=1;
	name =name.replace(/\s/g,"");
	var src1 =  decodeURI(shuz[1])
	console.log(src1);
	var src2= src1.substr(src1.indexOf('lie/')+4);
	var j=-1;
	var i=0;
	if(src1=="undefined"||src1=="NaN") {
	}
	else{
		var x = document.getElementsByName("name1");
		var num = Number(num1);
		console.log(x[0].innerText);
		for (;i<3;i++) {
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
			var sourceNode = document.getElementById("cart-block");
			var clonedNode = sourceNode.cloneNode(true);
			clonedNode.setAttribute("id", "cart-block" + 1); // 修改一下id 值，避免id 重复
			// sourceNode.parentNode.appendChild(clonedNode);
			// sourceNode.parentNode.insertBefore(clonedNode.localName);
			sourceNode.parentNode.insertBefore(clonedNode, sourceNode)
			$("#cart-block1 .cart-goods-name").html(name);
			$("#cart-block1 .num-input").attr("value",num);
			$("#cart-block1 .cart-goods-img").attr("src",src2);
		}
	}
	// 多选框-上面
	$(document).on('click', '.mycheckbox', function () {
		checkedLen = 0;
		$(".mycheckbox").each(function (index, item) {
			if ($(this)[0].checked) {
				checkedLen++
			}
		});
		$(".checkedLen").html(checkedLen);
		if (checkedLen == checkboxLen) {
			$(".allselect").prop('checked', true);
			$(".allselect").prev().attr('src', 'images/tick-s.png');
		} else {
			$(".allselect").prop('checked', false);
			$(".allselect").prev().attr('src', 'images/tick.png');
		}
		total();
	})

	// 多选框-全选
	$(document).on('click', '.allselect', function () {
		if ($(this)[0].checked) {
			// 需变 选中
			$('.tick').attr('src', 'images/tick-s.png');
			$('.checkbox').prop('checked', true);
		} else {
			// 需变 不选中
			$('.tick').attr('src', 'images/tick.png');
			$('.checkbox').prop('checked', false);
		}
		total();
	})


	// 统计金额
	function total() {
		var integer = 0;
		$(".mycheckbox").each(function (index, item) {
			if ($(this)[0].checked) {
				var price = Number($(this).parents('.cart-block').find('.price').html());
				var num = $(this).parents('.cart-block').find('.num-input').val();
				integer += price * num;
			}
		});
		integer = Math.floor(integer * 100) / 100;
		if (isInteger(integer)) {
			$('.integer').html(integer);
			$('.point').html('');
			return;
		}
		var str = integer.toString();
		var index = str.indexOf(".");
		var result = str.substr(index + 1, str.length);
		var integerStr = str.substr(0, index);
		$('.integer').html(integerStr);
		$('.point').html('.' + result);
	}


	// 数量增减
	$(document).on('click', '.sub', function () {
		var val = $(this).parent().find('.num-input').val();
		if (val == 1) {
			return;
		}
		var num = Number(val) - 1;
		$(this).parent().find('.num-input').val(num);
		total();
	})

	$(document).on('click', '.add', function () {
		var val = $(this).parent().find('.num-input').val();
		var num = Number(val) + 1;
		$(this).parent().find('.num-input').val(num);
		total();
	})

	function isInteger(obj) {
		return obj % 1 === 0
	}


	// 编辑
	$(document).on('click', '.cart-operation', function () {
		if ($(this).hasClass('edit')) {
			$(this).removeClass('edit');
			$(this).addClass('delete');
			$('.settlement').hide();
			$('.delete-btn').show();
			$(this).html('完成');
		} else {
			$('.settlement').css('display', 'flex');
			$('.delete-btn').hide();
			$(this).addClass('edit');
			$(this).removeClass('delete');
			$(this).html('编辑');
		}
	})


	//删除
	$(document).on('click', '.total-btn1', function () {
		var x = document.getElementsByName("checkbox");
		var i=0;
		for(;i<x.length;i++){
			var s=x[i].checked;
			if (s){
				x[i].parentNode.parentNode.remove();
				i--;
			}
		}
	})
	//结算
	$(document).on('click', '.total-btn0', function () {
		alert("结算成功！");
	})
}