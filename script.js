$(document).ready( function() {

	var maximumCredits = 30;
	var semester = new Array(1);
	semester[0] = [];

	var panelCourse = $(".panel-course").clone();
	var panelSemester = $(".panel-semester").clone();



	//to add course field panel onto the semester panel body
	$(".btn-add-course").on("click", function() {
		$(this).before(panelCourse.clone());
		//add one more course to the course array
		alert("adding new course in semester" + $(".btn-add-course").index(this));
	});

	// to add another semester.
	$("#btn-add-semester").on("click", function() {
		$(this).before(panelSemester.clone());
		//add a semester to the semester array
		semester.push([]);
	});

	$("#btn-calculate").on("click", function() {
		console.log("Number of Semester is " + semester.length);
	});
});