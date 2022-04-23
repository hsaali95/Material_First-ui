import { Box } from '@mui/system'
import React from 'react'
import HeaderComponent from '../Header/header'
import bgimage from '../BgImage/bgImage.jpg'
import './Ahmed.css'


const Bgimage = () => {
  return (
   <>
      <div style={{backgroundImage:`url(${bgimage})`,width:'100%',height:"100vh",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <HeaderComponent/>  
    </div>
    {/* <div className='container'>
        <HeaderComponent/>  
    </div> */}
   </>
  )
}

export default Bgimage