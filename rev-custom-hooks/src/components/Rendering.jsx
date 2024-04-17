import { useEffect,useState } from "react";
export default function Rendering(){
    const [render, setRender] = useState(true);

    //let r = render;
    useEffect(()=>{
      setInterval(()=>{
        setRender(false)
      },2000)
    },[])
  
    return (
      <div>
      {render ? <RenderingContent/> : <div>hello</div>}
      </div>
    )
}


//1st component  to 2nd component;
function RenderingContent(){
    useEffect(()=>{
      console.error("component mounted!")
  
      return ()=>{
        console.log("component unmounted")
      }
    },[])
  
    return (
      <div>
      inside from my component
      </div>
    )
  }