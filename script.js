$(document).ready( function() {

	var panelCourse = $(".panel-course").clone();
	var panelSemester = $(".panel-semester").clone();
	var numberOfCourses;
	var numberOfSemester;

	//to add course field panel onto the semester panel body
	$("#btn-add-course").on("click", function() {
		$(this).before(panelCourse.clone());
	});

	// to add another semester.
	$("#btn-add-semester").on("click", function() {
		$(this).before(panelSemester.clone());
	});

	$("#btn-calculate").on("click", function() {
	});
});