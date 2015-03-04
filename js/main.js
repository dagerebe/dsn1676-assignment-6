var $btnShowHide = $('.btn-show-hide')
var $box = $('.box')

var $btnInOut = $('.btn-move')
var $diamond = $('.diamond')

var $btnCollapseExpand = $('.btn-collapse-expand')
var $panel = $('.panel')

$btnShowHide.on('click', function () {
	$box.toggleClass('js-box-hide');
});

$btnInOut.on('click', function () {
	$diamond.toggleClass('js-diamond-move');
});

$btnCollapseExpand.on('click', function () {
	$panel.toggleClass('js-panel-collapse');
});
