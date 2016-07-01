$(document).ready(function() {

// step 1 & 4
$('.box').click(function() {
	$(this).addClass(color);
});

// step 2 & 4
$('.box').dblclick(function() {
	$(this).removeClass(colors);
});

// step 3
$('#reset').click(function() {
	$('.box').removeClass(colors)
});

// step 4
var color = 'white';
var colors = 'white green red blue yellow'

$('#red').click(function () {
	 color = 'red';
});

$('#blue').click(function () {
	 color = 'blue';
});

$('#green').click(function () {
	 color = 'green';
});

$('#yellow').click(function () {
	 color = 'yellow';
});

$('#white').click(function () {
	 color = 'white';
});

})