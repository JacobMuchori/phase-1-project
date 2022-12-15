const loginDetails =document.getElementById("login-details")
const signupDetails =document.getElementById("sign-up-details")
const loginForm= document.getElementById("login-form")
const signUpForm =document.getElementById("sign-up form")
const mainDetails= document.getElementById("weather-html")
const locationForm= document.getElementById("location-form")
const mainDiv= document.getAnimations("weather-container")
const signupDiv=document.getElementById("btn-signup")
const signUpButton = document.getElementById("sign-up btn")
const dataTemp= document.getElementById("temp")
const dataWind=document.getElementById("wind")
const datadescription=document.getElementById("description")
const recommendationbtn= document.getElementById("recommend-btn")
const textrecomm= document.getElementById("recomm")


loginForm.addEventListener("submit", function onsubmit(e) {
    e.preventDefault()

    loginDetails.style.display= "none";
    signupDetails.style.display= "none";
    signupDiv.style.display= "none";
    mainDetails.style.display= "block";
})

signUpForm.addEventListener("click", function onsubmit(e) {
    e.preventDefault()

    loginDetails.style.display= "none";
    signupDetails.style.display= "none";
    signupDiv.style.display= "none";
    mainDetails.style.display= "block";
})


signUpButton.addEventListener("click", function onclick(e) {
    e.preventDefault()

    loginDetails.style.display= "none";
    signupDetails.style.display= "block";
    signupDiv.style.display= "none";
})

locationForm.addEventListener("submit", function onsubmit(event) {
    event.preventDefault()

    loginDetails.style.display= "none";
    signupDetails.style.display= "none";
    signupDiv.style.display= "none";
    const input= document.getElementById("search")
    

    fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
    .then((response)=> response.json())
    .then((data => renderweatherDetails(data)));


    function renderweatherDetails(data) {
        dataTemp.innerText= `Temperature: ${data.temperature}`
        dataWind,innerText=`Wind: ${data.wind}`
        datadescription.innerText=`Description: ${data.description}`
    }

    recommendationbtn.addEventListener("click", function onclick(e) {
        e.preventDefault()

        fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
        .then((response)=> response.json())
        .then((data => recommendationCreater(data)));


        function recommendationCreater(data) {
            let descr= data.description
        if(descr === "Cloudy" || descr === "Partly cloudy") {
            return textrecomm.textContent=`Description: Wear heavy clothing and remember to carry an umbrella`
        } 
        else if (descr !== "Cloudy" || descr !== "Partly cloudy") {
            return textrecomm.textContent=`Description: Wear light clothing and remember to hydrate`
        }
        }
    })
})


function liked(){
    var element = document.getElementById("like");
    element.classList.toggle("liked");
  }



document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has loaded")
    locationForm.onsubmit
    recommendationbtn.onclick


})