$( document ).ready(function() {
	$(".calendar-table td").click(function() {
		  // remove classes from all
		  $(this).closest(".calendar-table").find("td").removeClass("active");
		  // add class to the one we clicked
		  $(this).addClass("active");
		});
});