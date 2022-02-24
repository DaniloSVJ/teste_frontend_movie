import React, { useEffect, useState, DOMElement } from 'react'
import { Link } from 'react-router-dom'
import Paginas from '../../Home/Paginas';
import { Movies } from './style'

const Movielist = ({ items, qtdPaginas, sendData, idsGenres }) => {
   
   const [btnContent, setBtnContent] = useState([]);
   const [alterbutton, setAlterButton] = useState(false);
   const [clickbutton, setClickButton] = useState(0)
   const [headerEle,setHeaderEle]=useState(520)
   const [id_b, setId_B] = useState(0)
   const [listMovies, setListMovies] = useState([])
 
   useEffect(() => {
      const alter_link = async () => {
         await setListMovies(items)
         let headerE =  document.getElementById('filtermovie').clientHeight;
         let headerLast = headerE +65
         setHeaderEle(headerLast)
      }
      alter_link()
 
     
   }, [items])
    function handleResize(){
      
      

   }
   window.addEventListener('resize', handleResize)

    

   return (
     

      <Movies  widthScren={headerEle} >
         <div className='Content'>
         {
            listMovies.map((item, key) => (
               
               <Link to={`/movie/${item.id}`}>
                  <div  key={key} className='movieRow--item'>

                     <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                     <p>
                        {
                           item.original_title.indexOf(':') > 0 ? item.original_title.substr(0, item.original_title.indexOf(':')) :
                              (item.original_title.length > 20 ? item.original_title.substr(0, 20) + ' ...' : item.original_title)
                        }
                     </p>
                     <p className='date-movie'>
                        {
                           item.release_date
                        }
                     </p>
                  </div>
               </Link>
            ))
         }
         </div>
         <div>

            <Paginas
               idGenres={idsGenres}
               getPaginas={sendData}
               qtdPaginas={qtdPaginas}
            />

         </div>

      </Movies>



   )

}

export default Movielist
