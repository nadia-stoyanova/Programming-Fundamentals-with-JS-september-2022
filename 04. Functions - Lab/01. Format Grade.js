function formatGrade(grade) {
    let gradeAnotation = ""
    if (grade < 3.00) gradeAnotation = "Fail"
    else if (grade < 3.5) gradeAnotation = "Poor"
    else if (grade < 4.5) gradeAnotation = "Good"
    else if (grade < 5.5) gradeAnotation ="Very good"
    else if (grade >= 5.5) gradeAnotation = "Excellent"
    console.log(`${gradeAnotation} (${grade.toFixed(2)})`)

} formatGrade(5.4)