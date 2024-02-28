import React, { useRef, useEffect, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import '../css/map.css'

const Map = ({ lng, lat }) => {
  const mapContainer = useRef(null)
  console.log('coords', lng, lat)
  const map = useRef(null)
  // const [lng] = useState(139.753)
  // const [lat] = useState(35.6844)
  const [zoom] = useState(14)
  const [API_KEY] = useState('GqtZ8gPjbhWgzO0329Ji')
  useEffect(() => {
    // if (map.current) return // stops map from intializing more than once
    ;(map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    })),
      new maplibregl.Marker({ color: '#FF0000' }).setLngLat([lng, lat]).addTo(map.current)
  }, [API_KEY, lng, lat, zoom])

  return (
    <div className='map-wrap'>
      <div
        ref={mapContainer}
        className='map'
      />
    </div>
  )
}

export default Map
