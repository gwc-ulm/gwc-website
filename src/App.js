import React from 'react';
import './index.css';

import Home from './routes/Home';
import Events from './routes/Events';
import Resources from './routes/Resources';
import Join from './routes/Join';
import About from './routes/About';

import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 0ee6572404c2b65c9b2ac1a16797595f51b2a4aa
