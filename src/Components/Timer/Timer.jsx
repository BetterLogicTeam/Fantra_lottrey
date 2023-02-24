import axios from "axios";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function Timer(props) {
  const [Timer, setTimer] = useState("1676286402")
  const [flag, setflag] = useState(false)



  const Completionist = () => {
    console.log("completed");
  
    return (
      <>
        <h6>Time Ended</h6>

        {/* <div className="text_days fs-5 ">Presale ended!</div> */}
      </>
    );
  };
  // Renderer callback with condition
  const renderer =  ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // setflag(true)
      
      
     
      return <Completionist />;
    } else {
  

      return (
        <div className="text_days fs-5 ">
          <h6>
            {days} Days {hours}:{minutes}:{seconds}
          </h6>
        </div>
      );
    }
  };

//   useEffect(() => {
   
//     if(props.time=="1676286318"){
//         setTimer("0")
//     }else{
//         setTimer("1676286402")

//     }
//   }, [props.time])
  

  return (
    <div>
     
       
          <Countdown
          date={
            Date.now() + (parseInt(props.time) * 1000 - Date.now())
          }
          renderer={renderer}
        />

        
     
    </div>
  );
}
