
$(document).ready(function(){

	$(".nav_content_detail_1, .nav_content_detail_2, .nav_content_detail_3").hide();

	
	$(".nav_content_view_1").hover(
		function(){$(".nav_content_detail_1").show();},
		function(){$(".nav_content_detail_1").hide();}

		);

	$(".nav_content_view_2").hover(
		function(){$(".nav_content_detail_2").show();},
		function(){$(".nav_content_detail_2").hide();}

		);

    $(".nav_content_view_3").hover(
		function(){$(".nav_content_detail_3").show();},
		function(){$(".nav_content_detail_3").hide();}

		);

});


