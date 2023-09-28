import './App.css';

import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY;

  const pageSize = 20;

  return (
    <div style={{ fontFamily: 'Times New Roman' }}>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} height={3} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" apiKey={apiKey} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;