let petSalon = {
  name:"The Fashion Pet",
  address:{
      street:"Ave University",
      number:"787",
      zip:"23456"
  },
  hours:{
      open:"9:00 a.m.",
      close:"8:00 p.m."
  },
  pets:[]
}
let c=0;
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.breed=breed;
  this.service=service;
  this.owner=ownerName;
  this.phone=contactPhone;
  this.id=c++;
}

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel");

function isValid(aPet){
  let valid=true;
  if(aPet.name.length==0){
      valid=false;
      console.error("Invalid name");
  }
  if(aPet.service.length==0){
      valid=false;
      console.error("Invalid service");
  }
  if(aPet.phone.length==0){
      valid=false;
      console.error("Invalid phone");
  }
  return valid;
}

function register(){
  let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
  if(isValid(thePet)){
      petSalon.pets.push(thePet);
      displayCards()
      clearInputs();
  }
}

function clearInputs(){
  inputName.value="";
  inputAge.value="";
}

function deletePet(petId){
  console.log("Deleting" + petId);
  let deleteIndex;
  for(let i=0;i<petSalon.pets.length;i++){
      let pet = petSalon.pets[i];
      if(petId==pet.id){
          deleteIndex=i;
          console.log("I found it in position:" + i);
      } 
  }
  petSalon.pets.splice(deleteIndex,1);    
  // remove from the html (remove())
  document.getElementById(petId).remove();
  // display to the user a message
  //
}

function searchPet(){
      let searchString = document.getElementById("txtSearch").value;
      console.log("Searching " + searchString);
  for(let i=0;i<petSalon.pets.length;i++){
      let pet = petSalon.pets[i];
      if(searchString.toLowerCase() === pet.name.toLowerCase()){
          document.getElementById(pet.id).classList.add("highlight");
      }else{
          document.getElementById(pet.id).classList.remove("highlight");
      }  
  }
}

let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-555");
let scrappy = new Pet("Scrappy",40,"Male","Mixed","Nails trim"," Shaggy","555-555-555");
let pancho = new Pet("Pancho", 7, "Male", "Golden Retriever", "Shampoo", "Gus", "555-555-5555");
petSalon.pets.push(scooby,scrappy, pancho);
displayCards();