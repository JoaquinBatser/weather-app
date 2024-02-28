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
    const { name, region, country, lat, lon } = location
    const { temp_c: temp, is_day, condition, wind_kph, wind_degree, humidity, cloud, feelslike_c } = current
    const data = {
      wind_kph,
      wind_degree,
      humidity,
      cloud,
      feelslike_c,
      name,
      region,
      country,
      temp,
      is_day,
      condition,
      lat,
      lon,
    }
    return data
  } catch (error) {
    console.log(error)
  }
}
// const fetchWeather = async () => {
//     try {
//       const response = await axios.request(options)
//       console.log(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// export async function fetchWeatherData(query = 'Buenos Aires') {
//   try {
//     const response = await axios.request({params.q:query,...options})
//     const data = await response.json()

//     const { location, current } = data
//     const { name, region, country } = location
//     const { temp_c: temp, is_day, condition, wind_kph, wind_degree, humidity, cloud, feelslike_c } = current
//     return {
//       wind_kph,
//       wind_degree,
//       humidity,
//       cloud,
//       feelslike_c,
//       name,
//       region,
//       country,
//       temp,
//       is_day,
//       condition,
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
export function fetchMapData(query = 'Buenos Aires') {
  try {
    const country = query
    return country
  } catch (error) {
    console.log(error)
  }
}
