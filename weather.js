function getkolweather(){
    const name="Kolkata";
    const apiid='e0317dc6e4e07f4f8e8498c5d57e33f7'
    var xhttp=new XMLHttpRequest();
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiid}`;
    xhttp.onreadystatechange=function(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            const weathedata=JSON.parse(this.responseText).main.temp-273;
            document.getElementById("koltext").innerHTML=weathedata;
        }
    };
    xhttp.open("GET",url,true);
    xhttp.send();
    
}
function getmumweather(){
    const name="Mumbai";
    const apiid='e0317dc6e4e07f4f8e8498c5d57e33f7'
    var xhttp=new XMLHttpRequest();
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiid}`;
    xhttp.onreadystatechange=function(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            const weathedata=JSON.parse(this.responseText).main.temp-273;
            document.getElementById("mumtext").innerHTML=weathedata;
        }
    };
    xhttp.open("GET",url,true);
    xhttp.send();
    
}
const kolbutton=document.getElementById('kol');
const mumbutton=document.getElementById('mum');
kolbutton.addEventListener("click",getkolweather)
mumbutton.addEventListener("click",getmumweather)
  