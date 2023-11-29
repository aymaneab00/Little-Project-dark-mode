import React, { useState } from 'react'

export default function Ld() {
    const [ld,setld]=useState(true)
    function handletheme (e){
        e.preventDefault();
        setld(!ld)
    }
  return (
    <div className={ld ? "light": "dark"}>
    Click to change {ld? "to the dark mode":"to the light mode."}
    <button onClick={(e)=>handletheme(e)}>
        Toggle theme
    </button>
    </div>

  )
}
