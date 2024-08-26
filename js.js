const apiKey = "4dfb6ea015c44de4145e23cac3f20a36";
let search = document.querySelector(".search");
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let city = document.querySelector(".search");
let cityvalue = city.value;
async function ckeked(cityvalue){
    const api = await fetch(apiurl + cityvalue + `&appid=${apiKey}`);   
    var twoapi = await api.json();
    if (api.status === 404){ 
        let search = document.querySelector(".search");
        search.classList.add('style');
        search.value = "cité not existe";
        search.style.color = 'red';
    }else{sstyle = document.querySelector(".temp");
    sstyle.innerHTML = twoapi.main.temp + "°C";
    sstyle.style.cssText = "position: relative;right : 28px";
    namee = document.querySelector(".names");
    namee.innerHTML = twoapi.name;
    namee.style.cssText = "position: relative;right : 17px";



    
    document.querySelector(".midité").innerHTML = twoapi.main.humidity + "%";
    document.querySelector(".rih").innerHTML = twoapi.wind.speed + "Km/h";
    let icon = document.querySelector(".icon");
    if (twoapi.weather[0].main === "Clouds"){
        icon.src = "images/clouds.png";
    }else if (twoapi.weather[0].main === "Clear"){
        icon.src = "images/clear.png";
    }else if (twoapi.weather[0].main === "Drizzle"){
        icon.src = "images/drizzlz.png";
    }
    else if (twoapi.weather[0].main === "Mist"){
        icon.src = "images/mist.png";
    }else if (twoapi.weather[0].main === "Rain"){
        icon.src = "images/rain.png";
    }}


    


}

let button = document.querySelector("button");
button.addEventListener('click' ,function(){
    ckeked(search.value);

    search.value = '';

});