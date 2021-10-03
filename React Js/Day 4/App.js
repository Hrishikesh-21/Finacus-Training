import React from 'react';
import "./index.css";


function Card(props){
  console.log(props);
  return(

  <>
  <div className="cards">

  <div className="card">
    <img src={props.imgsrc} alt="" class name=""/>
  </div>

  <div className="card_info">

    <span className="card_background ">{props.title}</span>

    <h1 className="card Title">{props.sname}</h1>
    <a href={props.link}>
      <button>Watch Now</button>
    </a>
  </div>

</div>
</>

  );
}

export default Card;

