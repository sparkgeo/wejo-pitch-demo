import { useState } from 'react'
import Map, { Layer, Source } from 'react-map-gl'
import { DenverTrafficFatalities } from './dataForDemo/DenverTrafficFatalities'
import SeriousFatalities from './dataForDemo/serious-fatal-traffic-accidents-snap.geojson'
import ControlPanel from './ControlPanel.js'
import './App.css'

//Layers

const allAccidents = {
  id: 'allaccidents ',
  type: 'circle',
  paint: {
    'circle-radius': {
      stops: [
        [15, 4],
        [18, 6],
        [20, 8],
      ],
    },
    'circle-opacity': 0.15,
  },
  // visibility: 'none',
}

const bikeFatalities = {
  id: 'bikefatalities',
  type: 'circle',
  paint: {
    'circle-opacity': 0,
    'circle-radius': 15,
    'circle-stroke-color': '#007cbf',
    'circle-stroke-width': 1,
  },
  visibility: 'none',
}

const allSeriousFatalities = {
  id: 'allseriousfatalities',
  type: 'circle',
  paint: {
    'circle-radius': {
      stops: [
        [15, 7],
        [18, 9],
        [20, 11],
      ],
    },
    'circle-color': 'red',
    'circle-opacity': 0.5,
  },
  filter: ['any', ['>', ['get', 'SERIOUSLY_'], 0], ['>', ['get', 'FATALITIES'], 0]],
  // visibility: 'none',
}
const speedingAccidents = {
  id: 'speedingaccidents',
  type: 'circle',
  paint: {
    'circle-radius': {
      stops: [
        [15, 8],
        [18, 10],
        [20, 12],
      ],
    },
    'circle-stroke-color': '#40A1FF',
    'circle-stroke-width': 2,
    'circle-opacity': 0,
  },
  filter: [
    'any',
    ['==', 'TU1_DRIVER', 'Speeding'],
    ['==', 'TU1_DRIVER', 'EXCEED SAFE/POSTED SPEED'],
  ],
  visibility: 'none',
}
const wrongwayAccidents = {
  id: 'wrongwayaccidents',
  type: 'circle',
  paint: {
    'circle-radius': {
      stops: [
        [15, 12],
        [18, 14],
        [20, 16],
      ],
    },
    'circle-stroke-color': '#ab02e2',
    'circle-stroke-width': 2,
    'circle-opacity': 0,
  },
  filter: ['==', 'TU1_DRIVER', 'DROVE WRONG WAY'],
  visibility: 'none',
}

const nosignalAccidents = {
  id: 'nosignalaccidents',
  type: 'circle',
  paint: {
    'circle-radius': {
      stops: [
        [15, 14],
        [18, 16],
        [20, 18],
      ],
    },
    'circle-stroke-color': '#02e2ab',
    'circle-stroke-width': 2,
    'circle-opacity': 0,
  },
  filter: [
    'any',
    ['==', 'TU1_DRIVER', 'signaling violation'],
    ['==', 'TU1_DRIVER', 'SIGNALING VIOLATION'],
  ],
  visibility: 'none',
}

function App() {
  const [view, setViewport] = useState({
    longitude: -104.9847,
    latitude: 39.73915,
    zoom: 15,
  })

  return (
    <>
      <Map
        initialViewState={{ ...view }}
        style={{ width: '100%', height: '100vh' }}
        mapStyle="mapbox://styles/willcadell/clf742iht000x01mq1xniifd8"
        maxZoom={20}
        minZoom={15}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Source id="allseriousfatalitiesdata" type="geojson" data={SeriousFatalities}>
          <Layer {...allSeriousFatalities} />
          <Layer {...allAccidents} />
          <Layer {...speedingAccidents} />
          <Layer {...wrongwayAccidents} />
          <Layer {...nosignalAccidents} />
        </Source>
        {/* <Source id="bikefaltalitiesdata" type="geojson" data={DenverTrafficFatalities}>
          <Layer {...bikeFatalities} />
        </Source> */}
      </Map>
      <ControlPanel />
    </>
  )
}

export default App
