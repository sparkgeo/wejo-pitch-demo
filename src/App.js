import { useState } from 'react'
import Map, { Layer, Source } from 'react-map-gl'
import { DenverTrafficFatalities } from './dataForDemo/DenverTrafficFatalities'
import SeriousFatalities from './dataForDemo/serious-fatal-traffic-accidents-snap.geojson'
import ControlPanel from './control-panel.js'
import './App.css'

//Layers
const bikeFatalities = {
  id: 'bikefatalities',
  type: 'circle',
  paint: {
    'circle-radius': 12,
    'circle-color': '#007cbf',
  },
  // visibility: 'none',
}

const allSeriousFatalities = {
  id: 'allseriousfatalities',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': 'black',
  },
  filter: ['any', ['>', ['get', 'SERIOUSLY_'], 0], ['>', ['get', 'FATALITIES'], 0]],
  // visibility: 'none',
}
const speedingAccidents = {
  id: 'speedingaccidents',
  type: 'circle',
  paint: {
    'circle-radius': 8,
    'circle-color': 'red',
  },
  filter: [
    'any',
    ['==', 'TU1_DRIVER', 'Speeding'],
    ['==', 'TU1_DRIVER', 'EXCEED SAFE/POSTED SPEED'],
  ],
  // visibility: 'none',
}
const wrongwayAccidents = {
  id: 'wrongwayaccidents',
  type: 'circle',
  paint: {
    'circle-radius': 6,
    'circle-color': 'purple',
  },
  filter: ['==', 'TU1_DRIVER', 'DROVE WRONG WAY'],
  // visibility: 'none',
}

const nosignalAccidents = {
  id: 'nosignalaccidents',
  type: 'circle',
  paint: {
    'circle-radius': 4,
    'circle-color': 'green',
  },
  filter: [
    'any',
    ['==', 'TU1_DRIVER', 'signaling violation'],
    ['==', 'TU1_DRIVER', 'SIGNALING VIOLATION'],
  ],
  // visibility: 'none',
}

function App() {
  const [view, setViewport] = useState({
    longitude: -104.9847,
    latitude: 39.73915,
    zoom: 10,
  })

  return (
    <>
      <Map
        initialViewState={{ ...view }}
        style={{ width: '100%', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Source id="bikefaltalitiesdata" type="geojson" data={DenverTrafficFatalities}>
          <Layer {...bikeFatalities} />
        </Source>

        <Source id="allseriousfatalitiesdata" type="geojson" data={SeriousFatalities}>
          <Layer {...allSeriousFatalities} />
        </Source>

        <Source id="speedingdata" type="geojson" data={SeriousFatalities}>
          <Layer {...speedingAccidents} />
        </Source>

        <Source id="speedingdata" type="geojson" data={SeriousFatalities}>
          <Layer {...wrongwayAccidents} />
        </Source>

        <Source id="speedingdata" type="geojson" data={SeriousFatalities}>
          <Layer {...nosignalAccidents} />
        </Source>
      </Map>
      <ControlPanel />
    </>
  )
}

// document.addEventListener("DOMContentLoaded", () => map.resize());

export default App
