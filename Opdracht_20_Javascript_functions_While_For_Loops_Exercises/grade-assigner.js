// FOR LOOP > The grade assigner

function assignGrade(score) {
  if (score > 90) {
    grade = "A";
    console.log("Congratulations!");
    return "A";
  } else if (score > 80) {
    grade = "B";
    return "B";
  } else if (score > 70) {
    grade = "C";
    return "C";
  } else if (score > 65) {
    grade = "D";
    return "D";
  } else {
    return "E";
  }
}

for (let i = 60; i <= 100; i++) {
  grade = assignGrade(i); // this is putting the return of the function into the variable grade
  console.log(i); //i = score
  console.log("For scoring " + i, "points you get an " + grade);
}
