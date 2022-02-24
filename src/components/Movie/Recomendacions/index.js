import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


import { Container, RecomendationMovie } from './style'

const Recomendation = ({ recomendation }) => {
  const [marginTop,setMarginTop] = useState(1829) 
  const [movieslist , setMoviesList]=useState([])
  useEffect(()=>{
    const loadAll = async ()=>{
        let movies = recomendation.slice(0,6)
        await setMoviesList(movies)
      }
      loadAll()
  },[recomendation])
  function handleResize(){
    let heightE =  document.getElementById('moviedescription').clientHeight;
    
    let headerLast = heightE +1229
    setMarginTop(headerLast)
  }
window.addEventListener('resize', handleResize)
  return (
    <Container MarginTop={marginTop} >
      <div className='Title'>Recomendações</div>
      <RecomendationMovie>
        <div className='movieRow'>
          {
            movieslist.map((item, key) => (
              <Link className='link' to={`/movie/${item.id}`}>
                <div key={key} className='movieRow--item'>

                  <div><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} /></div>
                  <div className='name-movie'>{
                        item.original_title.indexOf(':') > 0 ? item.original_title.substr(0, item.original_title.indexOf(':')) :
                          (item.original_title.length > 20 ? item.original_title.substr(0, 20) + ' ...' : item.original_title)
                      }                    
                  </div>
                  <div className='date-movie'>
                    {item.release_date}                   
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </RecomendationMovie>
    </Container>
  )
}
export default Recomendation

