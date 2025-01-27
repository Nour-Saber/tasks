const students = [
  { name: "Mohamed", grades: [80, 90, 100], passed: false },
  { name: "Ali", grades: [60, 70, 65], passed: false },
  { name: "Salah", grades: [85, 95, 100], passed: false },
];
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) sum += grades[i];
  return sum / grades.length;
}
function filteredStudents(student) {
  return calculateAverage(student.grades)>=70;
}
let sortedStudents = students.sort(
  (a, b) => calculateAverage(b.grades) - calculateAverage(a.grades)
);
for (let i = 0; i < students.length; i++) {
  console.log(
    `${students[i].name}: Average = ${calculateAverage(
      students[i].grades
    )},Passed = ${filteredStudents(students[i])}`
  );
}
