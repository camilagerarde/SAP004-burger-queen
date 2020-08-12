import React, {useState, useEffect} from "react";


const Timer = (props) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(elapsedTime+1)
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [elapsedTime, setElapsedTime]); //firebase


  return (
    <>
      <div>{elapsedTime}</div>
      <div>{props.createdAt}</div>
    </>
  )
}

export default Timer;