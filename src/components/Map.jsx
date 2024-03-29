import React, { useRef, useEffect, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as maptilersdk from '@maptiler/sdk'
import '../css/map.css'

const Map = ({ lng, lat }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  const [zoom] = useState(15)
  const [API_KEY] = useState('GqtZ8gPjbhWgzO0329Ji')
  useEffect(() => {
    // if (map.current) return // stops map from intializing more than once
    ;(map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic-dark/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    })),
      new maplibregl.Marker({ color: '#adafc4' }).setLngLat([lng, lat]).addTo(map.current)
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
