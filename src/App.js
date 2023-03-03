import { useState } from "react";
import Map from "react-map-gl";

import "./App.css";

function App() {
  const [view, setViewport] = useState({
    longitude: -104.9847,
    latitude: 39.73915,
    zoom: 10,
  });

  return (
    <Map
      initialViewState={{ ...view }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}

// document.addEventListener("DOMContentLoaded", () => map.resize());

export default App;
