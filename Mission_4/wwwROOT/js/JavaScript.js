$('#buttoncalc').click(function () {
    // WEIGHTED GRADE CALCULATION
    let calcGrade = parseInt($('#assignmentsG').val() * .50) + parseInt($('#groupProjectG').val() * .10) + parseInt($('#quizzesG').val() * .10) + parseInt($('#midtermG').val() * .10) + parseInt($('#finalG').val() * .10) + parseInt($('#intexG').val() * .10);

    // DETERMINE LETTER GRADE
    let letterGrade = '';
    if (calcGrade >= 94) {
        letterGrade = 'A'
    }
    else if (calcGrade >= 90) {
        letterGrade = 'A-'
    }
    else if (calcGrade >= 87) {
        letterGrade = 'B+'
    }
    else if (calcGrade >= 84) {
        letterGrade = 'B'
    }
    else if (calcGrade >= 80) {
        letterGrade = 'B-'
    }
    else if (calcGrade >= 77) {
        letterGrade = 'C+'
    }
    else if (calcGrade >= 74) {
        letterGrade = 'C'
    }
    else if (calcGrade >= 70) {
        letterGrade = 'C-'
    }
    else if (calcGrade >= 67) {
        letterGrade = 'D+'
    }
    else if (calcGrade >= 64) {
        letterGrade = 'D'
    }
    else if (calcGrade >= 60) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

    $('#calcGrade').html(calcGrade + '%');
    $('#letterGrade').html(letterGrade);
    $('#generatedGradeCol').removeAttr("hidden");
    $('#generatedGradeCol').hide().fadeIn(3000);
});

// SOMETHING EXTRA 
$('#preferredname').ready(function () {
    $('#preferredname').hide().fadeIn(3000);
    $('#mypic').hide().fadeIn(5500).delay(200);
    $('#myParagraph').hide().fadeIn(7500).delay(200);
    $('#myJobs').hide().fadeIn(9500).delay(200);
    $('#calculator').hide().fadeIn(11500)
});


// '$' inplace of document.GetElementById
// '#' befroe the ID name

// to get the value --> $('#ID').val();