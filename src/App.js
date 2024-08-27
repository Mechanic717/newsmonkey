import Navbar from './Components/Navbar';
import './App.css';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './Components/News.js';
 


const  App =()=> {
  
const apikey=process.env.REACT_APP_NEWS_API
const[Progress,setProgress]=useState(0);

 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#bdff6'
        height={3}
        progress={Progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} APIkey={apikey}  key={"general"} pagesize={6} country="in" category="general" />} />
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} APIkey={apikey}  key={"Entertainment"}  pagesize={6} country="in" category="Entertainment" />} />
            <Route exact path="/Business" element={<News setProgress={setProgress} APIkey={apikey}  key={"Business"}  pagesize={6} country="in" category="Business" />} />
            <Route exact path="/Health" element={<News setProgress={setProgress} APIkey={apikey}  key={"Health"} pagesize={6} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News setProgress={setProgress} APIkey={apikey}  key={"Science"} pagesize={6} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News setProgress={setProgress} APIkey={apikey}  key={"Sports"} pagesize={6} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News setProgress={setProgress} APIkey={apikey}  key={"Technology"} pagesize={6} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
  export default App;

