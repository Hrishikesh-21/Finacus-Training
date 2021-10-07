import React from 'react';
import "./index.css";
import Click from './Click';
import Time from './Time';

function Navbar(){
    return(
        <>
        
        <div className="Titlee"> <Time/>&#9883;NETFLIX  </div>
        
<div className="navbar">
<ul>
  <li><a href="https://www.netflix.com/signup/regform">&#9883; Log In</a></li>
  <li><a href="https://help.netflix.com/en/node/24926">&#9883; Netflix Plans</a></li>
  <li><a href="https://help.netflix.com/en/node/412">&#9883; FAQ</a></li>
 

  
  

</ul>
</div>
</>
    );
}

export default Navbar;