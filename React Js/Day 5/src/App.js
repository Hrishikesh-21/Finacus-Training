import React from 'react';
import "./index.css";
import "./Sdata"
import"./Navbar";





function Card(props){
 // console.log(props);
  return(

  <>

  <div className="cards">

    

    <div className="row">
    <img src={props.imgsrc} alt="" class name=""/>
    </div>
  
    <div className="row"> <span>{props.title}</span></div>
 
    <div className="row">
    <h1>{props.sname}</h1>
    <a href={props.link}>
      <button>Watch Now</button>
    </a>
    </div>

  </div>
</>

  );
}

export default Card;

