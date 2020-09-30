import React from 'react'; 
import { NavLink } from "react-router-dom";
import "./App.css"


function Candy(){
    return(
        <div className="title">
            <h1>Candy</h1>
            <img 
                src="https://media1.giphy.com/media/EZFuMdWb0hEWY/giphy.gif"
                alt="Candy"
            />
        </div>
    ); 
}


export default Candy; 