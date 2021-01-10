//javascript
const api ={
    key: "29261066e4cb7f098ea26c534e20790b",
    base:"https://api.openweathermap.org/data/2.5/",
    proxy:"https://cors-anywhere.herokuapp.com/"
};



var searchbox = document.querySelector(".search-box");
if(searchbox){
searchbox.addEventListener('keypress',setQuery);
}
function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather=>{
    return weather.json();

}).then(displayResults);

}

function displayResults(weather){
    console.log(weather);
    let city =document.querySelector('.location  .city');
    let city2 =document.querySelector('.location  .short-code');
    city.innerHTML=`${weather.name}`;
    city2.innerHTML=`${weather.sys.country}`
    let now = new Date();
    let date= document.querySelector('.location .date');
    date.innerHTML= dateBuilder(now);
    let temp=document.querySelector(".current .temp");
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>c</span>`;
    let weathr= document.querySelector(".current .weather");
    weathr.innerHTML=weather.weather[0].description;
    let hilow=document.querySelector(".hi-low");
    hilow.innerHTML=`${Math.round(weather.main.temp_min)}c / ${Math.round(weather.main.temp_max)}c`;
}

function dateBuilder(d){
    let months=["January", "February","March","April","May","June","July","August",
"September","October","November","December"];
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day= days[d.getDay()];
let date =d.getDate();
let month= months[d.getMonth()];
let year=d.getFullYear();
return `${day}, ${date}, ${month} ${year}`;


}
