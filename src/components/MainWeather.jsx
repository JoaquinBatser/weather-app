import React from 'react'
import Map from './Map'

const MainWeather = ({ weatherData }) => {
  return (
    <div className='relative'>
      <div className='h-full w-full absolute grid grid-cols-2 grid-rows-2 p-3 z-10'>
        <div className='border-[#1a1a1a] bg-[#151515]/90 rounded-lg px-6 py-4 w-fit h-fit'>
          <img
            src={weatherData.condition.icon}
            alt=''
          />
        </div>

        <div className='flex justify-end'>
          <div className='border-[#1a1a1a]  bg-[#151515]/90 rounded-lg px-6 py-4 w-fit h-fit text-end'>
            <p>{weatherData.last_updated}</p>
            <p className='text-xs'>Last updated</p>
          </div>
        </div>
        <div className='flex  items-end justify-start'>
          <div className='border-[#1a1a1a]  bg-[#151515]/90 rounded-lg px-6 py-4 w-fit'>
            <p className='text-4xl font-bold'>{weatherData.name}</p>
            <p>{weatherData.region}</p>
          </div>
        </div>
        <div className='flex  items-end justify-end '>
          <div className='border-[#1a1a1a] bg-[#151515]/90 rounded-lg px-6 py-4 text-end'>
            <small>
              {weatherData.humidity}% / {weatherData.wind_kph} {weatherData.wind_dir}
            </small>
            <p className='text-5xl font-bold'>{weatherData.temp}°</p>
          </div>
        </div>
      </div>

      <Map
        lng={weatherData.lon}
        lat={weatherData.lat}
      />
    </div>
  )
}

export default MainWeather
