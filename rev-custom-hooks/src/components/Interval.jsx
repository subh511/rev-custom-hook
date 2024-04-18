//import React from 'react'

import { useEffect,useState } from "react";

function useInterval(fn,time){

    useEffect(()=>{
        setInterval(()=>{
            fn()
        },time)
    },[])
}
export default function Interval() {

    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(c => c + 1);
      }, 1000)

  return (
    <div>
    Your Counter is :{count}
    </div>
  )
}
