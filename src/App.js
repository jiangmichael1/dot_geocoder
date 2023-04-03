import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import DataListing from './containers/DataListing';
import DataDetail from './containers/DataDetail';
import RenderedMap from './containers/Maps/OpenLayer'
import { ParseExcel } from './containers/Excel/ParseExcel';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <RenderedMap/>
        <Routes>
          <Route path="/" exact element={<DataListing />} />
          <Route path="/data/:dataId" exact element={< DataDetail />} />
          <Route path="/parseExcel" exact element={< ParseExcel />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


