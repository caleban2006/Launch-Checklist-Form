window.addEventListener("load", function(event) {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
         if (pilotNameInput.value !== typeof string || copilotNameInput.value !== typeof string) {
         alert("Please enter a valid name!");
         event.preventDefault();
      };
      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Please enter a valid number!");
         event.preventDefault();
      };

      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
      
      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level to low for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      };
      if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass to much for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      };  
      if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         event.preventDefault();
      };
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const missionTarget = document.getElementById("missionTarget");
         let randomMission = json[Math.floor(Math.random()*json.length)];
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${randomMission.name}</li>
                  <li>Diameter: ${randomMission.diameter}</li>
                  <li>Star: ${randomMission.star}</li>
                  <li>Distance from Earth: ${randomMission.distance}</li>
                  <li>Number of Moons: ${randomMission.moons}</li>
               </ol>
               <img src="${randomMission.image}"></img>
         `;      
      });
   });   

});