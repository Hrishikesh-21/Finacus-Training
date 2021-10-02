import React from "react";
import ReactDom from "react-dom";
import"./index.css";
import "./Heading"
import Heading from "./Heading";

const name ="Vinod";


ReactDom.render(

<>
<Heading />



<center>
<h1 className="heading">my name is {name} </h1>
<p>hii this is hrishi</p>
<ol>
    <li>apple</li>
    <li>orange</li>
    <li>mangoes</li>

</ol>

</center>


</>,

document.getElementById("root")

);

