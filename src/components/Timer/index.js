import React from "react";
import dayjs from "dayjs";
import style from "./style.module.css";

const dateDiff = (startDate, endDate) => {
  const endDay = dayjs(endDate)

  const hours = endDay.diff(startDate, 'hour')
  const diffMinutes = endDay.diff(startDate, 'minute')
  const diffSeconds = endDay.diff(startDate, 'second') 
  let minutes = diffMinutes;
  if (hours >= 1 ){
    minutes = diffMinutes % (60*hours)
  }
  let seconds = diffSeconds;
  if (minutes >= 1){
    seconds = diffSeconds % (60*minutes)
  }

  return`${hours}:${minutes}:${seconds}`
}

const Timer = (props) => {
  return (
    <>
      {
        props.status === "ready"
        ? (<span className={style.time}>Tempo do pedido: {dateDiff(props.createdAt, props.deliveredAt)}</span>)
        : (<span className={style.time}>Tempo do pedido: {dateDiff(props.createdAt, new Date().getTime())}</span>)
      }
    </>
  )
}

export default Timer;