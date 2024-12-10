function keyAdd(){

const checkinnerHTML = document.querySelectorAll("input")[0].value;

if (checkinnerHTML == ""){

    window.location.reload();


}
else if (checkinnerHTML == " "){

    window.location.reload();

}
}



function get(){
const info = document.getElementById("info");
const locationurl = "https://nominatim.openstreetmap.org/search.php?q=" + info.value + "&format=json";


fetch(locationurl)
    .then(response => response.json())
    .then(data => {  
        locationLat = data[0].lat;
        locationLon = data[0].lon;
        locationdata = "https://currentuvindex.com/api/v1/uvi?latitude=" + locationLat + "&longitude=" + locationLon;
        
return fetch(locationdata)
.then(response => response.json())
.then (data => {
let getTime = data.now.time;
let hentUv = data.now.uvi;
let whatistime = new Date();
whatistime = whatistime.toString();
whatistime = whatistime.slice(30, 31);

getTime = getTime.slice(11, 13);
getTime = Number(getTime);
whatistime = Number(whatistime);
getTime = getTime + whatistime;

const uvIs = "The uv is: ";
const sun2 = document.querySelectorAll("div")[3].appendChild(document.createElement("img"));
sun2.setAttribute("width", "125");
sun2.setAttribute("height", "125");
document.querySelectorAll("div")[3].appendChild(document.createElement("p"));
document.querySelectorAll("div")[3].appendChild(document.createElement("p"));
document.querySelectorAll("p")[1].innerHTML = uvIs + "<b>" + hentUv + "</b>";
document.querySelectorAll("p")[0].innerHTML = "The time is: " + "<b>" + getTime + ":00" + "</b>";
hentUv = Number(hentUv);
for (i = 0; i < 24; i++){

    document.querySelectorAll("div")[3].setAttribute("class", "mb-3 shadow-sm p-3 rounded")
    
    let getTimeForecast = data.forecast[i].time;
    const hentUvForecast = data.forecast[i].uvi;
    getTimeForecast = getTimeForecast.slice(11, 13);
    getTimeForecast = Number(getTimeForecast);
    getTimeForecast = getTimeForecast + whatistime;
    document.querySelectorAll("div")[0].appendChild(document.createElement("div"));
    sun = document.querySelectorAll("div")[i+4].appendChild(document.createElement("img"));
    if (2 > hentUvForecast){
        sun.setAttribute("src", "media/brightness-alt-low-1.svg");
        sun.setAttribute("alt", "Low sun");
        }
        else if (2 < hentUvForecast && hentUvForecast < 5){
        sun.setAttribute("src", "media/brightness-alt-high-2.svg");
        sun.setAttribute("alt", "Medium sun");
        }
        else if (5 < hentUvForecast && hentUvForecast < 7){
        sun.setAttribute("src", "media/brightness-low-3.svg");
        sun.setAttribute("alt", "High sun"); 
        }
        else if (7 < hentUvForecast){
        sun.setAttribute("src", "media/brightness-high-4.svg");
        sun.setAttribute("alt", "Max sun"); 
        }
        else{
        sun.setAttribute("src", "media/No_image_available.svg");
        sun.setAttribute("alt", "No image available"); 
        }
    
    document.querySelectorAll("div")[i+4].appendChild(document.createElement("p"));
    document.querySelectorAll("div")[i+4].appendChild(document.createElement("h6"));
    document.querySelectorAll("div")[i+4].setAttribute("class", "mb-3 shadow-sm p-3 rounded");
    document.querySelectorAll("p")[i+2].innerHTML = "The time is: " + "<b>" + getTimeForecast + ":00" + "</b>";
    document.querySelectorAll("h6")[i].innerHTML = uvIs + "<b>" + hentUvForecast + "</b>";
    sun.setAttribute("width", "125");
    sun.setAttribute("height", "125");
}



if (2 > hentUv){
sun2.setAttribute("src", "media/brightness-alt-low-1.svg");
sun2.setAttribute("alt", "Low sun");
}
else if (2 < hentUv && hentUv < 5){
sun2.setAttribute("src", "media/brightness-alt-high-2.svg");
sun2.setAttribute("alt", "Medium sun");
}
else if (5 < hentUv && hentUv < 7){
sun2.setAttribute("src", "media/brightness-low-3.svg");
sun2.setAttribute("alt", "High sun"); 
}
else if (7 < hentUv){
sun2.setAttribute("src", "media/brightness-high-4.svg");
sun2.setAttribute("alt", "Max sun"); 
}
else{
sun2.setAttribute("src", "media/No_image_available.svg");
sun2.setAttribute("alt", "No image available"); 
}


document.querySelectorAll("button")[0].removeAttribute("onclick");

})});};



