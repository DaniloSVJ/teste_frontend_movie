import React, { useEffect, useState, useCallback } from 'react'
import { Container, FilterMovie, DivMovielist, Button } from './style'


const FilterMoviesList =  ( { texto, filtersA,sendData,pages }) => {

  const [btnContent, setBtnContent] = useState([]);
  const [alterbutton,setAlterButton]=  useState(false);
  const [clickbutton, setClickButton] = useState(0)
  const [id_b, setId_B] = useState(0)
  const [idArray, setIdArray] = useState([])
  const[movies,setMovies]= useState([])

        
  useEffect(() => {
      const alter_link = async () => {
        await setIdArray(filtersA)
    
      }
      alter_link()
  }, [filtersA,movies])

  async function remove_filter_movie(idm){
    
    if(movies.length>0)
    {
      const list_boolean = movies.includes(idm)
      if (list_boolean==true){
        let remove_movie = [...movies]
        remove_movie.splice(remove_movie.indexOf(idm),1)
        await setMovies(remove_movie)
        if(remove_movie.length>0){
              //let link = `/discover/movie?with_genres=${remove_movie}&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
             sendData(remove_movie,pages)
         }
        else if(remove_movie.length<=0){
            let clear = []
           
              //let link = `/movie/popular?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
             sendData(clear,pages)
             await  setMovies(clear)
         }
      }  
    }
  }

  async function add_filter_movie(idm){
    let add_movie = [...movies,idm]
    await setMovies(add_movie)
    
   
    if(add_movie.length>0){
      //let link = `/discover/movie?with_genres=${add_movie}&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
      await setMovies(add_movie)
      sendData(add_movie,pages)
    }
    else  if(add_movie.length<=0){
          let clear = []
           // let link = `/movie/popular?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
      await setMovies(add_movie)
      sendData(clear,pages)
    }
  }


  
  return (
    <Container>
      <FilterMovie   id="filtermovie" >
        <div className='filter--cabecalho'><p className='paragrafo-title'>{texto}</p></div>

        <div className='filter-div-alt'> <p className="filter-paragrafo-alt">FILTRE POR:</p></div>


        <div className='filter--div--paragrafo'>
          <div className="filter--button">
              {
                
                idArray.map((ge) => (
                  <div>
                  <Button 
                        alterbutton={alterbutton}
                         key={ge.id} 
                        className={ btnContent.some(b=>b===ge.name) ? "button_orange" : "button_white"}
                        onMouseOver={()=>setAlterButton(true)}
                        
                        onClick={() => {
                          const index = btnContent.findIndex(b=>b===ge.name)
                          if(index!== -1){
                              const btrem = [...btnContent]
                              btrem[index]= ""
                              setBtnContent(btrem)
                              remove_filter_movie(ge.id)
                                                  
                          }else {
                              const add_cor = [...btnContent,ge.name]
                              setBtnContent(add_cor)                                                        
                              add_filter_movie(ge.id)    
                                                           
                                                  
                            }  
                          }
                          
                        }
                  >
                      {ge.name}
                  </Button>
                  </div>
                  
                ))
              }
            
          </div>
        </div>
      </FilterMovie>
    
    </Container>

  )
            
}

export default FilterMoviesList