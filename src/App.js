import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import DataListing from './containers/DataListing';
import DataDetail from './containers/DataDetail';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Map></Map>
        <Routes>
          <Route path="/" exact element={<DataListing />} />
          <Route path="/data/:dataId" exact element={< DataDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


