import React, { useEffect, useState } from 'react'


import { Container, TraillerMovie } from './style'

const Trailler = ({ trailer}) => {
  const [altura,setAltura] = useState(600) 
  const [marginTop,setMarginTop] = useState(50) 
  const [largunra,setLargura] = useState(0) 
  useEffect(()=>{
    let load = async()=>{
      let widthE =  document.getElementById('moviedescription').clientWidth;
      await setLargura(widthE)
    }
    load()
    
  },[])
  async function handleResize(){
    let heightE =  document.getElementById('moviedescription').clientHeight;
    let widthE =  document.getElementById('moviedescription').clientWidth;
    setLargura()
    let headerLast =  (heightE - altura  ) +50 
    setMarginTop(headerLast)
    
  }
  window.addEventListener('resize', handleResize)
  return (
    <Container MarginTop={marginTop} Large={largunra}>
      <div className='Title'>Trailer</div>
      <TraillerMovie>
          <iframe src={`https://www.youtube.com/embed/${trailer}`}></iframe>
      </TraillerMovie>
    </Container>
  )
}
export default Trailler

