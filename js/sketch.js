$(document).ready(function() {
	function createSquares(num) {
		var div = "<div class=\"square\"></div>";
		var squares = [];
		var n = num ? num * num : 256;
		
		for (var i = 0; i < n; i++) {
			squares.push(div);
		}
		
		var size = (640 / num) - 2
		$(".grid").append(squares);
		$(".square").css({"height": size + "px", "width": size + "px"});
		$(".square").mouseenter(function() {
			$(this).addClass("color");
		});
	}
	createSquares();
	$("button").on("click", function() {
		var numSquares = +prompt("How many squares for the new grid?");
		
		$(".square").remove();
		createSquares(numSquares);
	});
});