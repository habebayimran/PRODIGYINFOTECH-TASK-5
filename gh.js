function displayresult(){
    var city = document.getElementById("city").value;
    var apikey='3d12ecd06b59cc0154ab5bb4819b64a3';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    +city+ '&appid=' +apikey+ '&units=metric')
    .then(response => response.json())
    .then(data => {
        var t = data['main']['temp'];
        var u = data['main']['pressure'];
        var x = data['main']['humidity'];
        document.getElementById("temperature").innerHTML=t;
        document.getElementById("pressure").innerHTML=u;
        document.getElementById("humidity").innerHTML=x;
    })
}