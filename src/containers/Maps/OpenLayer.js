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
    center: [40.7128, 74.0060],
    zoom: 4,
  }),
});

const renderedMap = () => {
    return (
        <div id="map"></div>
    )
}
export default renderedMap;