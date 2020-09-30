import React from 'react'; 
import { NavLink } from "react-router-dom";
import "./App.css"; 

function Home() {
    return (
      <div className="title">
        <h1>Choose your snack!</h1>
        <img
          src="https://9y4oemohtq1ylsta112mibi5-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/VendingMachine-1200x675.jpg"
          alt="Vending machine"
        />
      </div>
    );
  }

  export default Home; 