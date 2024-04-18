import { useState,useEffect } from "react"

function useMousePointer(){

    const[pointer,setPointer] = useState({x:0,y:0});

    function handleMouseMove(e){
        setPointer({x:e.clientX, y:e.clientY})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove);

       return ()=>{
        window.removeEventListener('mousemove', handleMouseMove);
        }
    },[])
    return pointer;
}

export default function MousePointer() {

    let pointer = useMousePointer()
  return (
    <div>
    your pointer on x axis:{pointer.x} and y axis:{pointer.y}
     </div>
  )
}
