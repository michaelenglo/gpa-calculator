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

	$("#btn-calculate").on("click", function() {
		$(".number-of-semester-text").text(getTotalSemester());
		$(".number-of-course-text").text(getTotalCourse());
	});
});