var city=document.querySelector('.city');
var btn=document.querySelector('.submit');
var cityname=document.querySelector('.cityname');
var temp=document.querySelector('.temp');
var desc=document.querySelector('.desc');
var hmdty=document.querySelector('.humidity');
var img=document.querySelector('.image');
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=085247b164220a45736df572c0f77c62')
    .then(response=>response.json())
    .then(data=>{
        
        var tempval=data.main.temp;
        var descval=data.weather[0].description;
        var iconid=data.weather[0].icon;
        cityname.innerHTML=city.value;
        hmdty.innerHTML='Humidity : '+data.main.humidity+'%';
        temp.innerHTML=Math.round(tempval-273.15)+'°<span>C</span>';
        desc.innerHTML=descval;
        img.innerHTML=`<img src="http://openweathermap.org/img/w/${iconid}.png" alt="icon">`
        
    })
    .catch(err=>{
       // cityname.innerHTML='invalid city';
       alert('Invalid City/Country name');
    })
})
