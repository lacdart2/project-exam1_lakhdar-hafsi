/* navigation background color changing on scroll */

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    let windowPosition = window.scrollY > 0;

    header.classList.toggle("scroll-nav", windowPosition > 0);
});
/** hamburger menu */
let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("menu-open");
});
/* end navigation background color changing on scroll */






// countdown next launch index page
/* const launchesUrl = "https://api.spacexdata.com/v4/launches/";
const countdownContainer = document.querySelector(".countdown-container");
async function nextLaunch() {
  try {
    const response = await fetch(launchesUrl);
    const data = await response.json();
 
 
 
 
 
 
    for (i = 0; i < data.length; i++) {
      if (data[i].upcoming === true) {
 
        console.log(launches4);
      }
 
    }
  } catch (error) {
    console.log("error : failed to call launches API ");
    countdownContainer.innerHTML = `<p>An error occurred when calling the API :( </p>`;
 
  }
}
nextLaunch(); */


// Set the date manually to next launch

var nextLaunchDate = new Date("Jun 16, 2022 14:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // distance between now and the count down date
    var distance = nextLaunchDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

    // If the count down is finished write
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("minute").innerHTML = "SOON";
    }
}, 1000);


/*******launches, rockets slider********/

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const autoSlide = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add("current");
    } else {
        // Add current to start
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add("current");
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

// Button events

next.addEventListener("click", (e) => {
    nextSlide();
    if (autoSlide) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener("click", (e) => {
    prevSlide();
    if (autoSlide) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (autoSlide) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
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
        /*   <div class="rocket-image"><img src="${data.flickr_images[0]}"    alt="${data.id}" /> </div>   */
        rocketFalcon9.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
              
                  
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
        /*     <div class="rocket-image"><img src="${data.flickr_images[1]}"    alt="${data.id}" /> </div>   */
        rocketStarship.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>                       
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
        /*  <div class="rocket-image"><img src="${data.flickr_images[1]}"   alt="${data.id}" /> </div>    */
        rocketFalconHeavy.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.name} </h3>       
              
                 
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


async function Falcon1() {
    try {
        const response = await fetch(rocketFalconOneUrl);
        const data = await response.json();
        rocketFalconOne.innerHTML = "";

        rocketFalconOne.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.rocket_id} </h3>       
                     
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

