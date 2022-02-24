import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../../service/api';
import Header from '../../components/headers'
import  Trailler from '../../components/Movie/Trailler'
import Cast from '../../components/Movie/Cast';
import Recomendation from '../../components/Movie/Recomendacions';
import MovieDescription from '../../components/Movie/MovieDescription';

import './style.js'
import { MoviePage } from "./style"


const MoviePages = () => {
  const [titleMovie,setTitleMovie] = useState("")
  const [posterMovie, setPosterMovie] = useState("")
  const [countries, setCountries] = useState("")
  const [summary,setSummary] = useState("")
  const [release_date, setRelease_date] = useState("")
  const [ageGroup, setAgeGroup] = useState("")
  const [trailer, setTrailer] = useState("")
  const [genres, setGenres] = useState("")
  const [infoTeam, setInfoTeam] = useState([])
  const [infoCast, setInfoCast] = useState([])
  const [reco, setReco] = useState([])


  let { id } = useParams();


  useEffect(() => {
    const loadAll = async () => {
      let movie = await api.get(`/movie/${id}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
      let credits = await api.get(`/movie/${id}/credits?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
      let trailier_data = await api.get(`/movie/${id}/videos?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
      let list = await api.get(`/movie/${id}/recommendations?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
      //Título
      let titleM = movie.data.original_title
      setTitleMovie(titleM)
      console.log(movie)

      //Data Lançamento
      let dateR = movie.data.release_date
      setRelease_date(dateR)

      // Faixa Etária
      let age = movie.data.adult ? "18 anos" : "16 anos"
      setAgeGroup(age)

      // Imagem do post
         
      let imgP = movie.data.poster_path
        
      setPosterMovie(imgP)

      //Descrição do Filme
      let desc = movie.data.overview
      setSummary(desc)      

      //Trailler do Filme
      if (trailier_data.data.results.length > 0) {
        setTrailer(trailier_data.data.results[0].key)
      } 
      let clear = ""
      //Recomendações
      let list_reco = ([{
        id: 0,
        poster_path: '',
        original_title: '',
        release_date: '',

      }])
      list.data.results.map(list => {
        {
          list_reco.push(
            {
              id: list.id,
              original_title: list.original_title,
              poster_path: list.poster_path,
              release_date: list.release_date,
            }
          )
        }
      }
      )
      clear = (list_reco.filter(r => r.id !== 0))
      console.log(clear)
      setReco(clear)
      
      //País(es) de origem produção(ões)
      let country = ""

      for (let i in movie.data.production_countries) {
        country = country + "(" + movie.data.production_countries[i].iso_3166_1 + ") "
      }
      setCountries(country)
      
      //Gênero do Filme
      let genreMovie=""
      let tam = movie.data.genres.length
      for (let i in movie.data.genres) {
        if (i < tam - 1) {
          genreMovie = genreMovie + movie.data.genres[i].name + ", "
        } else if (i == tam - 1) {
          genreMovie = genreMovie + movie.data.genres[i].name
        }
      }
      setGenres(genreMovie)
      //Equipe técnica e elenco
      let organization = [{
        name: "",
        job: ""
      }]
      let cast = [{
        character: "",
        original_name: "",
        profile_path: ""
      }]

      credits.data.crew.map(c => {
        if (c.job == "Director" || c.job == "Screenplay" || c.job == "Characters") {
          organization.push({
            name: c.name,
            job: c.job
          })
        }
      })
      clear = (organization.filter(o => o.name !== ""))
      setInfoTeam(clear)

      credits.data.cast.map(c => {
        cast.push({
          character: c.character,
          original_name: c.original_name,
          profile_path: c.profile_path
        })
      })
      clear = (cast.filter(c => c.original_name !== ""))
      console.log(clear)
      setInfoCast(clear)



    }
    loadAll()
  }, [id])

  return (
    <MoviePage>
        
      <Header  />
      <MovieDescription
        img={posterMovie}
        countries={countries}
        title={titleMovie}
        release_date={release_date}
        category={ageGroup}
        countries={countries}
        summary={summary}
        graf={""}
        infoTeam={infoTeam}
      />
      <Cast cast={infoCast}/>
      <Trailler trailer={trailer}  />
      <Recomendation recomendation={reco}/>


    </MoviePage>
  )

}

export default MoviePages