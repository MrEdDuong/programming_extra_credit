function mainFunction() {
	
	// GET VALUES
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var term = document.getElementById("term").value;
	var daysMissed = document.getElementById("daysMissed").value;
	var tardies = document.getElementById("tardies").value;
	var daysNotRequired = document.getElementById("daysNotRequired").value;

	// CALCULATE TOTAL DAYS MISSED
	var tardyDaysMissed = tardies / 3;
	var tardyDaysMissedRounded = Math.floor(tardyDaysMissed);
	var numTardyDays = parseInt(tardyDaysMissedRounded);
	var numDaysMissed = parseInt(daysMissed);
	// numTotalDaysMissed IS THE TOTAL DAYS MISSED WITH TARDIES
	var numTotalDaysMissed = numTardyDays + numDaysMissed;
	
	// CALCULATE ACTUALL CLASS DAYS
	var numTerm = parseInt(term);
	var numDaysNotRequired = parseInt(daysNotRequired);
	var actualClassDays = numTerm - numDaysNotRequired;
	
	// CALCULATE PERCENT OF DAYS MISSED
	var percentMissed = (numTotalDaysMissed / actualClassDays) * 100;
	
	// CALCULATE WHICH MESSAGE TO SEND
	if (percentMissed < 1) {
		message = "You've attended every class";
	} else if (percentMissed <= 5) {
		message = "5% missed - excused/non-excused absences in a Semester<br>Student will be warned by instructor<br>Directror of the department will be notified<br>Grade deduction begins";
	} else if (percentMissed <= 10) {
		message = "10% missed - excused/non-excused absences in a Semester<br>Student must meet with Director before returning to class<br>No admission in class without Director's approval";
	} else {
		message = "15% missed - excused/non-excused absences in a Semester<br>Student will be withdrawn from class<br>NOTE: If the instructor feels that the student is still an active participant, the student is allowed to stay in class. A 'D' is the highest grade possible that can be earned!";
	}

	// OUTPUT MESSAGE
	document.getElementById("name").innerHTML = fname + " " + lname;
	document.getElementById("message").innerHTML = message;
}