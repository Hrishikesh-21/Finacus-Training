import React,{useState} from "react";


const Time = ()=>{

  let time=new Date().toLocaleTimeString();
 const [consttime, setconsttime] = useState(time)

  const UpdateTime = ()=>{

    time=new Date().toLocaleTimeString();
    setconsttime(time);
  };
  setInterval(UpdateTime,1000);

  return (
    <>
    <div className="consttime">
      <h4> {consttime}</h4>


    </div>



    </>
  );
}

export default Time;
