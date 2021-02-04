// for displaying temperature
function display() {
    const city = document.getElementById("input").value;

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7ed7e3a9e993fe10896582f9346b84dd")
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            const temp = Math.round(data.main.temp - 273);
            document.getElementById("temperature").innerText = temp;
            const description = data.weather[0].description;
            document.getElementById("description").innerText = description;
            const icon = data.weather[0].icon;
            const img = document.getElementById("img");
            img.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        })
        .catch(err => alert("Wrong City Name"));
}