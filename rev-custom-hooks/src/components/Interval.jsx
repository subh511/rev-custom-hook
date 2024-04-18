//import React from 'react'

import { useEffect,useState } from "react";

function useSetInterval(fn,timer){

    useEffect(()=>{
        setInterval(()=>{
            fn()
        },timer)
    },[fn,timer])
}
export default function Interval() {

    const [count, setCount] = useState(0);

    useSetInterval(() => {
        setCount(c => c + 1);
      }, 1000)

  return (
    <div>
    Your Counter is :{count}
    </div>
  )
}
