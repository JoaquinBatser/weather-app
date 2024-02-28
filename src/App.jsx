import MainWeather from './components/MainWeather'
import WeatherCards from './components/WeatherCards'
import React, { useEffect, useRef } from 'react'
import { fetchMapData, fetchWeather } from './api/fetch'

import { useState } from 'react'
import Map from './components/Map'

function App() {
  const inputRef = useRef(null)
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    fetchWeather('Buenos Aires')
      .then(res => {
        setWeatherData(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function handleClick() {
    fetchWeather(inputRef.current.value)
      .then(res => {
        setWeatherData(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  console.log(weatherData)

  return (
    <div className='max-w-2xl m-auto text-white'>
      <header className='py-4 text-center'>WEATHER APP</header>
      <main>
        <section>
          <div className='grid grid-cols-4 gap-2 mb-4'>
            <input
              type='text'
              id='rounded-email'
              className=' col-span-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              placeholder='Your email'
              ref={inputRef}
            />

            <button
              onClick={handleClick}
              type='button'
              className='py-2 px-4 h-12 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            >
              Search
            </button>
          </div>
          {weatherData ? (
            <div>
              <Map
                lng={weatherData.lon}
                lat={weatherData.lat}
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
        {/* <MainWeather />
        <WeatherCards /> */}
      </main>
    </div>
  )
}

export default App
