import axios from 'axios'

export async function fetchWeather(query) {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { query },
      headers: {
        'X-RapidAPI-Key': '3834d9e582msh1b213fad5843184p131972jsnf6437bcb14a7',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    })
    const information = response.data
    const { location, current } = information
    const { name, region, lat, lon } = location
    const { temp_c: temp, condition, last_updated, wind_kph, wind_dir, humidity } = current
    const data = {
      name,
      region,
      wind_kph,
      wind_dir,
      humidity,
      last_updated,
      temp,
      condition,
      lat,
      lon,
    }
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchPlaces() {
  return null
}
// const options = {
//   method: 'GET',
//   url: 'https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/geoname',
//   params: {name: 'London'},
//   headers: {
//     'X-RapidAPI-Key': '3834d9e582msh1b213fad5843184p131972jsnf6437bcb14a7',
//     'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
