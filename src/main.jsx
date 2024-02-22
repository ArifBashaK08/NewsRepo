import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar.jsx';
import News from './Components/News.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

let pageSize = 24;
let body = document.querySelector('body');
body.style.backgroundImage = 'linear-gradient(255deg,#1D2B53,#FE7A36)';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Navbar title='NewsRepo' />
      <section className='container m-auto my-4'>
        <Routes>
          <Route exact path="/" element={<News key='general' pageSize={pageSize} country='in' category='general' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          <Route exact path="/business" element={<News key='business' pageSize={pageSize} country='in' category='business' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={pageSize} country='in' category='entertainment' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          <Route exact path="/health" element={<News key='health' pageSize={pageSize} country='in' category='health' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          <Route exact path="/science" element={<News key='science' pageSize={pageSize} country='in' category='science' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          <Route exact path="/sports" element={<News key='sports' pageSize={pageSize} country='in' category='sports' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          <Route exact path="/technology" element={<News key='technology' pageSize={pageSize} country='in' category='technology' apiKey='417df8ddb39847d6953fef1c6fbfcadb' />} />
          {/* <Route path="/About"><About />} /> */}
        </Routes>
      </section>
    </BrowserRouter>
  </>,
);
