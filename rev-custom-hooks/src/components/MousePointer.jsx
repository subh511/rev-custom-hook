import { useState,useEffect } from "react"

function useMousePointer(){

    const[pointer,setPointer] = useState({x:0,y:0});

    function handleMouseMove(e){
        setPointer({x:e.clientX, y:e.clientY})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove);

       return ()=>{
        window.addEventListener('mousemove', handleMouseMove);
        }
    })
}

export default function MousePointer() {
  return (
    <div>
    MousePointer
     </div>
  )
}
