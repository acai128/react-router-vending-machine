import React from 'react';

import Home from './Home'; 
import Chips from './Chips'; 
import Soda from './Soda'; 
import Candy from './Candy'; 
import NavBar from './NavBar'; 

import { BrowserRouter, Route } from "react-router-dom"; 


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
