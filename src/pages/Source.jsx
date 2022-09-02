import React from 'react'
import { useLocation } from "react-router-dom";

const Source = () => {
    const { state } = useLocation();
  return (
    <div >
        <iframe  src={state.url} width="100%" height="720" className='mt-0'  title="Haber Kaynağı"></iframe>
    </div>
  )
}

export default Source