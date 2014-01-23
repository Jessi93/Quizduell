var RIGHT_VAL = "Paris";

$(function() {
	$(".option").click(function() {
		$(".option").removeClass("answerRight answerWrong");
		
		var val = $(this).text();
		$(this).addClass(($(this).attr("data-val") == RIGHT_VAL) ? "answerRight" : "answerWrong");
	});
});