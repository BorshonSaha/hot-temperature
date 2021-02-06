// for loading data
function display() {
    const city = document.getElementById("input").value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7ed7e3a9e993fe10896582f9346b84dd")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => alert("Wrong City Name"))
}

// for setting temperature
function setData(data) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = Math.round(data.main.temp - 273);
    document.getElementById("description").innerText = data.weather[0].description;
    const img = document.getElementById("img");
    img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
}