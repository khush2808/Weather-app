async function fetchData(city) {

let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
url+=city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26ca2facdfmsh3b16bf635d1b03fp15f775jsn1ab28a0a370d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    console.log(result.humidity);
    document.getElementById("temperature1").innerHTML=result.temp;
    document.getElementById("humidity1").innerHTML=result.humidity;
    
    document.getElementById("wind-speed1").innerHTML=result.wind_speed;

} catch (error) {
	console.error(error);
}

  }
  fetchData("Nadiad");

  submit.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("city").innerHTML = search.value;
    fetchData(search.value)
  })

  

