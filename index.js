// these three are usage of javaScript so we are declaring from HTML by .getElementById(".......")
let btn = document.getElementById("btn");
let birthday = document.getElementById("birthday");
let result = document.getElementById("result");
 
// its a function for Calculating Age from the which is called by the  EventListener(); 
function calculateAge() {
  const birthdayValue = birthday.value;
  // if we leave blank we need to get alert by using this method called alert;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  }
  // if the input is given we need to calculate our age by using getAge() method;
   else {
    //Calling getAge() function by using this and declaring in a Variable
    let age = getAge(birthdayValue); 
     //.innerHTML is method which we call  from  HTMl Page
    result.innerHTML = "Your age is "+age+" Years old ";
  }
}
// this is the method  of getting Age
function getAge(birthdayValue) {
  //to get a current date which Date() builtin constructor is used
  let currentDate = new Date();
  console.log(currentDate);
  //birthdate which is getting from the birthdayValue from the 8th line to get birthday Date
  let birthdayDate = new Date(birthdayValue);
  console.log(birthdayDate);
  //logic here:
  //calculating Age from birth date - current date ;
  //.getFullYear() is a builtin method for the getting year there are lot of method like this used for getting months,mins,sec..etc,
    let age = currentDate.getFullYear()-birthdayDate.getFullYear();
    console.log(age);
  // let month = currentDate.getMonth()-birthdayDate.getMonth(); <<--->> useless for now it is used for calculating months for Age
  //After getting iam gonna Return this age 
  return age;

}
//i don't  know about this but copied from Youtube
 btn.addEventListener("click",calculateAge);