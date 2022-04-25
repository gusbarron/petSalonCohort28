//let studentFirstName = "Gustavo";
////let studentLastName = "Barron";
//let studentAge = 26;
//let studentIsActive = true;

//Object
//let student1 = {
 // fistName: "Gustavo",
 // lastName: "Barron",
//  age: 26,
//  isActive
//}

//let student=[];

//function displayStudent(){
 // for(let i=0; i<studentIsActive.length; i++){
 //   console.log(students[0]);
 //   console.log(students[2]);
 //   console.log(students[2]);
 // }
//}


function Student(fname, lname, age, isActive){
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.isActive = isActive;
}

let student1 = new Student("Astrid", "Batres-Guerrero", 25, true);
let student2 = new Student("Alexis", "Aldrete", 25, true);

console.log(student1, student2);

function Car(make, model, year){
  this.carMake = make;
  this.carModel = model;
  this.carYear = year;
}
let car1 = new Car("Ford", "Mustang", 1968);
 console.log = (car1);



