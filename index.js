
let btn = document.getElementById("btn");
let birthday = document.getElementById("birthday");
let result = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthday.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
function getAge(birthdayValue) {
  let currentDate = new Date();
  let birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
// console.log(age);
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
btn.addEventListener("click", calculateAge);