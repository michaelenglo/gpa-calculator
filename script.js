$(document).ready( function() {

	var maximumCredits = 30;

	var panelCourse = $(".panel-course").clone();
	var panelSemester = $(".panel-semester").clone();

	var getTotalSemester = function() {
		return $(".panel-semester").length;
	};

	var getTotalCourse = function() {
		var totalCourse = 0;
		for(var i = 0; i < getTotalSemester(); i++){
			totalCourse += ($(".panel-semester").eq(i).find(".panel-course").length);
		}
		return totalCourse;
	};


	//to add course field panel onto the semester panel body
	$(".btn-add-course").on("click", function() {
		$(this).before(panelCourse.clone());
	});

	// to add another semester.
	$("#btn-add-semester").on("click", function() {
		$(this).before(panelSemester.clone());

		$(".btn-add-course").last().on("click", function() {
			$(this).before(panelCourse.clone());
		});
	});

	$(".credit").on("focusout", function() {
		if($(this).val().match(/^[1-9]+$/) != null)
			$(this).parent().removeClass("has-error");
		else
			$(this).parent().addClass("has-error");
	});

	$(".grade").on("focusout", function() {
		if($(this).val() !== "--Select Grade--")
			$(this).parent().removeClass("has-error");
		else
			$(this).parent().addClass("has-error");
	});

	$("#btn-calculate").on("click", function() {
		let remainingCredits = maximumCredits;

		$(".number-of-semester-text").text(getTotalSemester());
		$(".number-of-course-text").text(getTotalCourse());
	});
});