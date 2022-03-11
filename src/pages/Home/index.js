import React, { useState, useEffect } from 'react';
import Header from '../../components/headers';
import { HomePage } from './style'
import FilterMovies from '../../components/Home/FilterMoviesList';
import Movielist from '../../components/Home/Movielist';
import Tmdb from "../../tmdb"
import api from '../../service/api';

import Paginas from '../../components/Home/Paginas';
const Home = () => {

  const [filters, setFilters] = useState([])
  const [movelist, setMovelist] = useState([])
  const [qtdPaginas, setQtdPaginas] = useState(0)
  const [currentPage, setCurrentPage] = useState("1")
  const [idsGen, setIdsGen] =  useState([])


  let genresmovie = ([{
    id: 0,
    name: '',
  }])
  let listmovies = ([{
    id: 0,
    poster_path: '',
    original_title: '',
    release_date: '',

  }])

  const titulo = "Milhões de filmes, séries, e pessoas para descobrir. Explore já"
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total

      //  api.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=d3dad3aaf9fe823e7609d3d2b6745782`).then((response) => setFilters(response.data))
      let listgenre = await api
        .get(`/genre/movie/list?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)

      for (let i in listgenre.data.genres) {
        genresmovie.push(
          {
            id: listgenre.data.genres[i].id,
            name: listgenre.data.genres[i].name,
            isAtivade: false
          }
        )
      }
      let list = await api
        .get(`/movie/popular?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)



      list.data.results.map(list => {

        listmovies.push(
          {
            id: list.id,
            original_title: list.original_title,
            poster_path: list.poster_path,
            release_date: list.release_date,
          }
        )
      }
      )
     

      let clear_array = genresmovie.filter(clarray => clarray.name !== '')
      setFilters(clear_array)
      let clear_array2 = listmovies.filter(clarray => clarray.id !== 0)

      loadMovies(clear_array2)
      getPages(list.data.total_pages)


  

    }
    loadAll()
  }, [])

  async function getPages(qtd) {
    await setQtdPaginas(qtd)
  }
  async function loadMovies(qtd) {
    await setMovelist(qtd)
    
  }

  async function getFilter(val, pag) {
    let page = "&page=1"

    if (Number(pag) > 0) {
      page = `&page=${pag}`
      await setCurrentPage(pag)
    }

    let list = await api
      .get(`/movie/popular?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}${page}`)
    let check = ""
    let check2 = false
    function filterIdGenre(value) {
      for (var i = 0; i <= val.length - 1; i++) {
        check = value.genre_ids.includes(val[i])
        if (check == true) {
          check2 = true
          return true
        }
      }
    }

    if (val.length > 0) {
      let new_list = await list.data.results.filter(filterIdGenre)
      setMovelist(new_list)
      
      setIdsGen(val)
      
    } else {
      
      let new_list2 = await list.data.results
      setMovelist(new_list2)
      let clear = []
      setIdsGen(clear)
      
      
    }
  }
 


  return (
    <HomePage  >
      <Header />
      <div>
        <FilterMovies
          sendData={getFilter}
          pages={currentPage}
          texto={titulo}
          filtersA={filters}
        />
      </div>

      <div>
        <Movielist
          
          items={movelist}
          idsGenres={idsGen}
          qtdPaginas={qtdPaginas}
          sendData={getFilter}
        />
      </div>

    </HomePage>

  )
}
export default Home

