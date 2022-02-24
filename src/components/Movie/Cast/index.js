import React, { useState ,useEffect} from 'react'


import { Container, Content,Title } from './style'

const Cast = ({ cast}) => {
  const [marginTop,setMarginTop] = useState(0) 
  

  useEffect(() => {
    const alter_link = async () => {
       
       await setMarginTop(150)
       let heightE =  document.getElementById('moviedescription').clientHeight;
       let widthE =  document.getElementById('moviedescription').clientWidth;
      
      if(widthE<990){
        let headerLast = (heightE)+70 
        setMarginTop(headerLast)
       }else if(widthE>=929){
       let headerLast = (heightE)+190
       setMarginTop(headerLast)
    }
  }
    alter_link()
 }, [cast])

 function handleResize(){
    let heightE =  document.getElementById('moviedescription').clientHeight;
    let widthE =  document.getElementById('moviedescription').clientWidth;
  
    if(widthE<990){
      let headerLast = (heightE)+70 
      setMarginTop(headerLast)
     }else if(widthE>=929){
     let headerLast = (heightE)+190
     setMarginTop(headerLast)
  } 

 
    
}
window.addEventListener('resize', handleResize)
  return (
    <Container MarginTop={marginTop} > 
      
      <div className='Title'>
            <h3>Elenco original</h3> 
        </div>
      <Content >
        
        <div className='Castlist'>
        { cast.map((ct,key)=>(
            
              
            <div className='Cast' key={key}>
                  <div className='Image'><img src={`https://image.tmdb.org/t/p/w300${ct.profile_path}`} alt="" /></div>
                  <div className="CastName">{ct.original_name}</div>
                  <div className="CastCharacter">{ct.character}</div>
            </div>
          

        ))
    
        }
        </div>

      </Content>
     
    </Container >  
  )
}
export default Cast

