window.addEventListener("load", function(event) {
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
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let numFuelInput = Number(fuelLevelInput.value);
      let numCargoInput = Number(cargoMassInput.value);
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || numFuelInput === "" || numCargoInput === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      if (isNaN(numFuelInput) === 'true' || isNaN(numCargoInput) === 'true') {
         alert("Please enter a valid number");
         event.preventDefault();
      };
      if (typeof(pilotNameInput.value) !== 'string' || typeof(copilotNameInput.value) !== 'string') {
         alert("Please enter a valid name");
         event.preventDefault();
      }  
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoMass = document.getElementById("cargoMass");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
      
      if (numFuelInput < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level to low for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      };
      if (numCargoInput > 10000) {
         faultyItems.style.visibility = "visible";
         cargoMass.innerHTML = "Cargo mass to much for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      };  
      if (numFuelInput >= 10000 && numCargoInput <= 10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      };
   });

});