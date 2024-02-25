import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import Navbar from './Components/Navbar.jsx';
import News from './Components/News.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './index.css'


const pageSize = 24;
const apiKey = import.meta.env.VITE_NEWS_API
console.log(apiKey)
const body = document.querySelector('body');
body.style.backgroundImage = 'radial-gradient(circle at 25% 39%, rgba(0, 150, 136, 1) 0%, rgba(63, 81, 181, 1) 100%)';

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar title='NewsRepo' />
        <LoadingBar color='#f11946' height={2} progress={progress} />
        <section className='container m-auto my-4'>
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' apiKey={apiKey} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='in' category='business' apiKey={apiKey} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' apiKey={apiKey} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health' apiKey={apiKey} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science' apiKey={apiKey} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' apiKey={apiKey} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='in' category='technology' apiKey={apiKey} />} />
            {/* <Route path="/About"><About />} /> */}
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
