// header导航滑块
function back() {
	var oldLeft = $('.header_on').position().left+18;
	var oldWidth = $('.header_on').width();
	$('.back').css({
		'left': oldLeft,
		'width': oldWidth
	});
};

// 打开搜索框
function showSearchArea(event) {
	$('.search_area').stop(false,true).css({
		'width': '170px',
		'padding': '0 14px',
		'border': '1px solid #f00'
	});
	$('.search_icon').stop(false,true).css('background-position', '-17px -81px');
	// $('.search_icon').attr('onclick', 'hideSearchArea()')
	var backLeft = $('.back').position().left;
	var backWidth = $('.back').width();
	$('.back').stop(false,true).css({
		'left': backLeft-200,
		'width': backWidth
	});
};
// 关闭搜索框
function hideSearchArea() {
	$('.search_area').stop(false,true).css({
		'width': '0',
		'padding': '0 0',
		'border': '0'
	});
	$('.search_icon').stop(false,true).css('background-position', '-74px -81px');
	// $('.search_icon').attr('onclick', 'showSearchArea()')
	var backLeft = $('.back').position().left;
	var backWidth = $('.back').width();
	$('.back').stop(false,true).css({
		'left': backLeft+200,
		'width': backWidth
	});
};

// 点击搜索按钮显示搜索框，判断再次点击搜索按钮时，如果搜索框为空则关闭搜索框，如果不为空则搜索里面的内容
$('.search_icon').click(function() {
	var doesItHide = $('.search_area').width();
	var doesHasValue = $('.search_area').val();
	if (doesItHide == '0') {
	} else if (doesHasValue == '') {
		hideSearchArea();
	} else {
		alert('有数据:'+doesHasValue);
		$('.search_icon').prop('type', 'submit');
	}
});
$('.search_icon').hover(function() {
	var doesItHide = $('.search_area').width();
	var doesHasValue = $('.search_area').val();
	if (doesItHide == '0') {
		showSearchArea();
	} else {}
}, function() {
});




$(document).ready(function() {
	// 初始化顶部导航栏滑块位置
	back();
	// 给右侧三个栏目中的链接添加动画属性
	$('.right_a_group').find('a').addClass('animated fadeInUp')
	// 鼠标经过导航栏时改变滑块位置及宽度
	$('.fir_item').hover(function() {
		var nowLeft = $(this).position().left+18;
		var nowWidth = $(this).width();
		$('.back').css({
			'left': nowLeft,
			'width': nowWidth
		});
	}, function() {
		back();
	});

});




