//import React from 'react';
import { useEffect, useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener("online", ()=>{setIsOnline(true)});

    window.addEventListener("offline", ()=>{setIsOnline(false)});

  },[])

  return isOnline;
}
export default function UserOnline() {
  const isOnline = useIsOnline();

  // if(isOnline){
  //     return "yay ur online!"
  // }

  // return "your are offline, sorry for your Inconvience"
  return (
    <div>
      {isOnline
        ? "yay ur online!"
        : "your are offline, sorry for your Inconvience"}
    </div>
  );
}
