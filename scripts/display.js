//display the pets in list items
function displayPet(){
  let tmp="";//clear the field
  for(let i=0;i<petSalon.pets.length;i++){
      let pet = petSalon.pets[i];// get each pet
      tmp+=`<li>${pet.name} --- ${pet.age}</li> `;//concatenation
      console.log(tmp);
  }
  document.getElementById("pets").innerHTML=tmp;
}
// dislay the pets in cards
function displayCards(){
  let tmp="";
  for(let i=0;i<petSalon.pets.length;i++){
      let pet = petSalon.pets[i];
      tmp+=`
      <div id="${pet.id}" class="pet">
          <div class="pet-header"> 
              <h4>${pet.name}</h4>
              <button onclick="deletePet(${pet.id});"> 🗑️ </button>
          </div>
          <label>Age: ${pet.age}</label>
          <label>Gender: ${pet.gender}</label>
          <label>Breed: ${pet.breed}</label>
          <label>Owner: ${pet.owner}</label>
          <label>Phone:${pet.phone}</label>
      </div>
      `;
  }
  document.getElementById("pets").innerHTML=tmp;
}


//display the pets in table