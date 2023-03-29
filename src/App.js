import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import DataListing from './containers/DataListing';
import DataDetail from './containers/DataDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
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


