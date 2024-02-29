import MainWeather from './components/MainWeather'
import WeatherCards from './components/WeatherCards'
import React, { useEffect, useRef } from 'react'
import { fetchPlaces, fetchWeather } from './api/fetch'

import { useState } from 'react'
import Searching from './components/Searching'
import Clothing from './components/Clothing'

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

  return (
    <>
      <div className='max-w-3xl m-auto p-12'>
        <header className='mb-12 text-center font-bold text-5xl'>
          <h1>THE WEATHER</h1>
        </header>
        <main>
          <section>
            <Searching
              inputRef={inputRef}
              handleClick={handleClick}
            />

            {weatherData ? (
              <MainWeather weatherData={weatherData} />
            ) : (
              <div className='shadow-sm border border-[#1a1a1a] w-full bg-[#151515] h-[400px] hover:bg-[#252525] hover:border-neutral-700 transition-all rounded-lg grid place-items-center font-bold hover:shadow-xl hover:cursor-pointer'>
                Loading...
              </div>
            )}
          </section>
          <hr className='my-12  border-[#1a1a1a]' />
          {weatherData ? <Clothing temp={weatherData.temp} /> : <p>nuuh</p>}
        </main>
      </div>
    </>
  )
}

export default App
