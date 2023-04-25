// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document. getElementById('missionTarget');
      missionTarget.innerHTML=  `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if(testInput === '' || testInput === null || testInput === undefined){
        return "Empty";
    }
    else if(isNaN(numberInput)){
        return "Not a Number";
    }
    else if(isNaN(numberInput) === false){
       return "Is a Number";
    }
   missionTarget = document.getElementById('missionTarget').innerHTML;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
   // let list = document.getElementById("faultyItems");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
     //    list.style.visibility = "hidden";
    
    }else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Please enter the number for Fuel Level(L) and cargo Mass(kg)")
    } 
 else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ) {
    alert("Please Enter valid information for each field!");}
    else {
       
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } 
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color ="rgb(199, 37, 78)";
    }  
    if (cargoLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
         list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    }
 if (fuelLevel < 10000 && cargoLevel > 10000) {
       fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
    } 
    if(fuelLevel>= 10000 && cargoLevel<=10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        list.style.visibility = "visible";
    }

}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
 console.log(planetsReturned);
 
    return planetsReturned;
}

function pickPlanet(planets) {
    let Random = Math.floor(Math.random() * planets.length);
    return planets[Random];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;