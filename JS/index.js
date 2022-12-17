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
const fdbcktag = document.getElementById("feddbacktag")
const abouttag = document.getElementById("abttag")
const fdbckEl= document.getElementById("Feedbackinfo")
const abtEl= document.getElementById("Aboutinfo")
const hometag= document.getElementById("home-tag")
const inputtag= document.getElementById("logtitle")
const feedbtn= document.getElementById("feedbackbtn")
const returnMessage=document.getElementById("alert")
const textmess= document.getElementById("feedback-review")
const iconcreater= document.getElementById("mtrls")

function hideEl() {
    loginDetails.style.display= "none";
    signupDetails.style.display= "none";
    signupDiv.style.display= "none";
    inputtag.style.display= "none";
}

loginForm.addEventListener("submit", function onsubmit(e) {
    e.preventDefault()

    hideEl();
    mainDetails.style.display= "block";
    loginForm.reset()
})

signUpForm.addEventListener("submit", function onsubmit(e) {
    e.preventDefault()

    hideEl();
    mainDetails.style.display= "block";
    signUpForm.reset()
})


signUpButton.addEventListener("click", function onclick(e) {
    e.preventDefault()

    loginDetails.style.display= "none";
    signupDetails.style.display= "block";
    signupDiv.style.display= "none";
})

locationForm.addEventListener("submit", function onsubmit(event) {
    event.preventDefault()

    hideEl();
    const input= document.getElementById("search")
    

    fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
    .then((response)=> response.json())
    .then((data => renderweatherDetails(data)));


    function renderweatherDetails(data) {
        dataTemp.innerText= `Temperature: ${data.temperature}`
        dataWind.innerText=`Wind: ${data.wind}`
        datadescription.innerText=`Description: ${data.description}`
        if(data.description==='cloudy') {
            iconcreater.innerText= "Cloudy"
        } else if (data.description==="Partly cloudy"){
            iconcreater.innerText="Partly Cloudy Day"
        } else if (data.description==="Sunny") {
            iconcreater.innerText="Sunny"
        }else if(data.description==="clear") {
            iconcreater.innerText="clear"
        }
    }

    recommendationbtn.addEventListener("click", function onclick(e) {
        e.preventDefault()

        fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
        .then((response)=> response.json())
        .then((data => recommendationCreater(data)));


        function recommendationCreater(data) {
            let descr= data.description
        if(descr === "Cloudy" || descr === "Partly cloudy") {
            return textrecomm.textContent=`Wear heavy clothing and remember to carry an umbrella`
        } 
        else if (descr !== "Cloudy" || descr !== "Partly cloudy") {
            return textrecomm.textContent=`Wear light clothing and remember to hydrate`
        }
        }
    })
})


function liked(){
    var element = document.getElementById("like");
    element.classList.toggle("liked");
  }

fdbcktag.addEventListener("click", () => {
    fdbckEl.style.display= "block";
    mainDetails.style.display= "none";
    abtEl.style.display= "none";
    hideEl();
})

abouttag.addEventListener("click", () => {
    abtEl.style.display= "block"
    mainDetails.style.display= "none";
    fdbckEl.style.display= "none";
    hideEl();
})

hometag.addEventListener("click", ()=> {
    fdbckEl.style.display= "none";
    mainDetails.style.display= "none";
    abtEl.style.display= "none";
    loginDetails.style.display= "block";
    signupDetails.style.display= "none";
    signupDiv.style.display= "block";

})
feedbtn.addEventListener("click", (e)=> {
    e.preventDefault()

    textmess.value = ""
    fdbckEl.style.display= "block"
    alert("Your feedback has been received and is highly appreciated.")
})


document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has loaded")
    locationForm.onsubmit
    recommendationbtn.onclick


})