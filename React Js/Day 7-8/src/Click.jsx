
import React, { useState } from 'react';
import "./index.css";

    function Click() {
    const [count, setCount] = useState(0);

   return (
      <div className="Click">
        <p> {count} </p>
        <button onClick={() => setCount(count + 1)}>
          <h5>Click me</h5>
        </button>
      </div>
    );
  }

export default Click;
