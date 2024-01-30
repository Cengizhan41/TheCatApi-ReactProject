import React, { useContext } from 'react'
import { CatApiContext } from '../context/CatApiContext'

function Theme() {
    const{moon,sun,handleTheme,theme}=useContext(CatApiContext);
  return (
    <button onClick={handleTheme} className='btn'>
        {
        theme == "light" ? sun : moon
        }
        </button>
    
  )
}

export default Theme