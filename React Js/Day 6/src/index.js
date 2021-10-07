
import React from 'react'
import ReactDom from 'react-dom';
import Card from "./App"
import Sdata from "./Sdata";
import Navbar from "./Navbar"
import Time from './Time';

ReactDom.render(

  <>
  <div className="first">
  <Navbar/>

  </div>

  {Sdata.map(function ncard(val){

      return(
        
        <Card 
        key={val.id}
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        link={val.link}
        />

      );
  })}


 </>,

    document.getElementById("root")
);

