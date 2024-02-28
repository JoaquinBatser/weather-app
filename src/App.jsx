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
      <header className='py-4 text-center font-bold text-5xl'>
        <h1>THE WEATHER</h1>
      </header>
      <main>
        <section>
          <div className='grid grid-cols-4 gap-2 mb-4'>
            <input
              type='text'
              id='rounded-email'
              className=' col-span-3 border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
              placeholder='Buenos Aires'
              ref={inputRef}
            />

            <button
              onClick={handleClick}
              type='button'
              class='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500'
            >
              <div class='translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0'>
                Search
              </div>
              <div class='absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100'>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                >
                  <path
                    d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          {weatherData ? (
            <div className='relative'>
              <div className='h-full w-full absolute grid grid-cols-2 grid-rows-2 p-6 z-10'>
                <div>
                  <p className='text-4xl font-bold'>{weatherData.name}</p>
                  <p>{weatherData.region}</p>
                </div>
                <div className='text-end'>
                  <p>{weatherData.last_updated}</p>
                  <p className='text-xs'>Last updated</p>
                </div>
                <div className='flex flex-col items-start justify-end'>
                  <p>{weatherData.humidity}%</p>
                  <p>
                    {weatherData.wind_kph} {weatherData.wind_dir}
                  </p>
                </div>
                <div className='flex flex-col items-end justify-end'>
                  <img
                    src={weatherData.condition.icon}
                    alt=''
                  />
                  <p className='text-8xl font-bold'>{weatherData.temp}°</p>
                </div>
              </div>

              <Map
                lng={weatherData.lon}
                lat={weatherData.lat}
              />
            </div>
          ) : (
            <div className='border w-full h-[400px]'></div>
          )}
        </section>
        {/* <MainWeather />
        <WeatherCards /> */}
      </main>
    </div>
  )
}

export default App
