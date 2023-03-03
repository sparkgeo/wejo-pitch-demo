import { useState } from 'react'
import Map, { Layer, Source } from 'react-map-gl'
import { DenverTrafficFatalities } from './dataForDemo/DenverTrafficFatalities'
import './App.css'

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
}

function App() {
  const [view, setViewport] = useState({
    longitude: -104.9847,
    latitude: 39.73915,
    zoom: 10,
  })

  return (
    <Map
      initialViewState={{ ...view }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Source id="my-data" type="geojson" data={DenverTrafficFatalities}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  )
}

// document.addEventListener("DOMContentLoaded", () => map.resize());

export default App
