

/************ rockets api page *****/

/*****  FALCON 9 *******/

const rocketFalcon9 = document.querySelector(".falcon9");
const rocketFalcon9Url = "https://api.spacexdata.com/v2/rockets/falcon9";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */

async function spacexRockets() {
    try {
        const response = await fetch(rocketFalcon9Url);
        const data = await response.json();
        rocketFalcon9.innerHTML = "";

        rocketFalcon9.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
               <div class ="rocket-image"><img src="${data.flickr_images[0]}" 
               alt="${data.id}" /> </div>        
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
             <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
    } catch (error) {
        console.log("error : failed to call rocket API ");
        rocketFalcon9.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}
spacexRockets();

/*****  STARSHIP *******/

const rocketStarship = document.querySelector(".starship");
const rocketStarshipUrl = "https://api.spacexdata.com/v2/rockets/starship";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */

async function starship() {
    try {
        const response = await fetch(rocketStarshipUrl);
        const data = await response.json();
        rocketStarship.innerHTML = "";

        rocketStarship.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
               <div class ="rocket-image"><img src="${data.flickr_images[1]}" 
               alt="${data.id}" /> </div>        
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
             <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
    } catch (error) {
        console.log("error : failed to call rocket API ");
        rocketStarship.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}
starship();

/*********** FALCON HEAVY ****/

const rocketFalconHeavy = document.querySelector(".falcon-heavy");
const rocketFalconHeavyUrl =
    "https://api.spacexdata.com/v2/rockets/falconheavy";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */
console.log(rocketFalconHeavyUrl);

async function FalconHeavy() {
    try {
        const response = await fetch(rocketFalconHeavyUrl);
        const data = await response.json();
        rocketFalconHeavy.innerHTML = "";

        rocketFalconHeavy.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
               <div class ="rocket-image"><img src="${data.flickr_images[1]}" 
               alt="${data.id}" /> </div>        
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
             <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
    } catch (error) {
        console.log("error : failed to call rocket API ");
        rocketFalconHeavy.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}
FalconHeavy();
/*********** FALCON 1 ****/

const rocketFalconOne = document.querySelector(".falcon1");
const rocketFalconOneUrl = "https://api.spacexdata.com/v3/rockets/falcon1";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */
console.log(rocketFalconOneUrl);

async function Falcon1() {
    try {
        const response = await fetch(rocketFalconOneUrl);
        const data = await response.json();
        rocketFalconOne.innerHTML = "";

        rocketFalconOne.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.rocket_name} </h3>       
                     
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
              <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
    } catch (error) {
        console.log("error : failed to call rocket API ");
        rocketFalconOne.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}
Falcon1();

/************  end rockets api *****/


/************* iss api*/
const issData = document.querySelector(".issContent");
const url = "https://api.wheretheiss.at/v1/satellites/25544";

/* console.log(url); */

async function issPosition() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        // self check log console
        console.log(details);
        console.log(details.name);
        console.log(details.longitude);

        issData.innerHTML = "";

        issData.innerHTML += `<div class="iss-data">           
            <p>name: ${details.name} </p>     
            <P>latitude:${details.latitude}</p>
            <p>longitude:${details.longitude}</p>
            <p>altitude:${details.altitude}</p>
            <button class="live-btn"><a target="_blank"  href ="https://ustream.tv/channel/9408562">Live Stream</a></button><div>`;
        /*       } */
    } catch (error) {
        console.log("error : failed to call iss iss API ");
        issData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}

issPosition();

/************** mars api */

const marsData = document.querySelector(".marsContent");
const marsUrl = "https://api.maas2.apollorion.com/";

async function marsPosition() {
    try {
        const response = await fetch(marsUrl);
        const details = await response.json();
        // self check log console
        console.log(details);

        /* createHtml(details); */
        marsData.innerHTML = "";

        marsData.innerHTML += `<div class="mars-data">           
            <p>season:${details.season}    </p>     
            <P>min-temp:${details.min_temp}</p>
            <p>max-temp:${details.max_temp}</p>
            <p>pressure:${details.pressure}</p>
            <p>opacity:${details.atmo_opacity}</p>
                                          <div>`;
    } catch (error) {
        console.log("error : failed to call mars REST API ");
        moonData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}

marsPosition();

// jupiter api

const jupiterData = document.querySelector(".jupiterContent");
const jupiterUrl = "https://api.le-systeme-solaire.net/rest/bodies/jupiter";

async function jupiterPosition() {
    try {
        const response = await fetch(jupiterUrl);
        const details = await response.json();
        // self check log console
        console.log(details);

        /* createHtml(details); */
        jupiterData.innerHTML = "";

        jupiterData.innerHTML += `<div class="jupiter-data">           
            <p>name: ${details.name}</p>     
            <P>moons: ${details.moons.length}</p>
            <p>mass: ${details.mass.massValue}</p>
            <p>density: ${details.density}</p>
            <p>gravity: ${details.gravity}</p>
                                          <div>`;
    } catch (error) {
        console.log("error : failed to call jupiter  API ");
        jupiterData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}

jupiterPosition();

// saturn api

const saturnData = document.querySelector(".saturnContent");
const saturnUrl = "https://api.le-systeme-solaire.net/rest/bodies/saturne";

async function saturnPosition() {
    try {
        const response = await fetch(saturnUrl);
        const details = await response.json();
        // self check log console
        console.log(details);

        /* createHtml(details); */
        saturnData.innerHTML = "";

        saturnData.innerHTML += `<div class="saturn-data">           
            <p>name: ${details.name}</p>     
            <P>moons: ${details.moons.length}</p>
            <p>mass: ${details.mass.massValue}</p>
            <p>density: ${details.density}</p>
            <p>gravity: ${details.gravity}</p>
                                          <div>`;
    } catch (error) {
        console.log("error : failed to call saturn REST API ");
        saturnData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}

saturnPosition();
