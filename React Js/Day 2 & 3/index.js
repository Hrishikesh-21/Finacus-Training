import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <>
  <div className="cards">

    <div className="card">
      <img src="https://wallpapercave.com/wp/wp8751913.jpg"
       alt="Money Heist Poster"
        class name="card image"/>
    </div>

    <div className="card_info">
      <span className="card_background ">A Netflix Series</span>
      <h1 className="card Title">Money Heist</h1>
      <a href="https://help.netflix.com/en/contactus">
        <button>Watch Now</button>
      </a>
    </div>
    <App />



  </div>

  </>,
  document.getElementById('root')
);

