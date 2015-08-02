//скрол страницы в начало

$(document).ready(function(){
	$("#up_page").click(function() {
	  $("html, body").animate({
	    "scrollTop": 0
	  }, 1000);
	});
});
     