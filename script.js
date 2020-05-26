// Write your JavaScript code here!;
window.addEventListener("load", function(event) {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         window.alert("All fields are required!");
         event.preventDefault();
      };
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      if (fuelLevel<10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
      }   
      faultyItems.innerHTML = `
         <div  id="faultyItems">   
            <ol>
               <li id="pilotStatus">Pilot ${pilotName} is ready for launch</li>
               <li id="copilotStatus">Co-pilot ${copilotName} is ready for launch</li>
               <li id="fuelStatus">Fuel level high enough for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
         </div>   
      `;

   });

});





/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
