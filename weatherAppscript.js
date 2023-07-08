const api_key="6dc017a11557e477c339ed525c1cd8bb";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBox=document.querySelector(".search input");
var searchButton=document.querySelector(".search button");
const icon=document.getElementById("image1");

async function my_weather(city_name){
    const response=await fetch(api_url + city_name + `&appid=${api_key}`)
    var data=await response.json();
    console.log(data);

    // var icon=document.querySelector("#image1");
    var temperature=document.querySelector("#temp");
    var city=document.querySelector("#city");
    var humidity=document.querySelector(".humidity p");
    var wind=document.querySelector(".wind p");

    // console.log("humidity=>",humidity);

    temperature.innerText=Math.round(data.main.temp)+"°C";
    city.innerText=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+" km/h";

    // 

    if(data.weather[0].main=="Clouds"){
        icon.src="D:/weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        icon.src="D:/weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        icon.src="D:/weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        icon.src="D:/weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){-[]
        icon.src="D:/weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main=='Snow'){
        icon.src="D:/weather-app-img/images/snow.png";
    }

}

// my_weather()

searchButton.addEventListener("click",function(){
    console.log(searchBox.value);
    my_weather(searchBox.value);
});
