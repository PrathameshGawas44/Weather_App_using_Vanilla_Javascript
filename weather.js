const apiKey="";
async function weatherapi()
{
    var city=document.getElementById("city").value;
    if(city=="")
    {
        alert("Please enter a city");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try 
    {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === "404") 
        {
            document.getElementById("weatherResult").innerHTML = "City not found";
            return;
        }
        document.getElementById("weatherResult").innerHTML = `<br><hr>
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>`;
    } 
    catch (error) 
    {
        console.error(error);
        document.getElementById("weatherResult").innerHTML ="Error fetching data";
    }
    
}