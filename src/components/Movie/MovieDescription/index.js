import React, { useEffect, useState } from 'react'
import { BiWifi0 } from 'react-icons/bi'

import { Container, Description, DivImg, Information } from './style'

const MovieDescription = ({ img, title, release_date, countries, category, graf, summary, infoTeam }) => {
  const[teamList,setTeamList] = useState([])
  const[marginrigth,setMarginrigth] = useState(0)
  useEffect(()=>{
    const loadAll = async ()=>{
        let widthE =  document.getElementById('moviedescription').clientWidth;
        let team = infoTeam.slice(0,6)
        await setTeamList(team)
        if (widthE>1444){
          let atz = widthE -144
          let atzmr = atz+216
          setMarginrigth(atzmr)   
        }else{
          setMarginrigth(216)
        }
      }
      loadAll()
  },[infoTeam])
  function handleResize(){
    let heightE =  document.getElementById('moviedescription').clientHeight;
    let widthE =  document.getElementById('moviedescription').clientWidth;
    if (widthE>1444){
      let atz = widthE -144
      let atzmr = atz+216
      setMarginrigth(atzmr)   
    }else{
      setMarginrigth(216)
    }
    
  }
  window.addEventListener('resize', handleResize)

  return (
    <Container>
      <Description id="moviedescription"> 
        <DivImg className='imgComponent' >
          <div><img src={`https://image.tmdb.org/t/p/w300${img}`} alt="" /></div>
        </DivImg>

        <Information marginrigth={marginrigth}className='infoComponent' >
          <div className="MovieTitle"><p>{title}</p></div>

          <div className="Paragraph" >
                <div>{category}<span id="sp"><BiWifi0 /></span></div>
                <div>{release_date}<span id="sp"><BiWifi0 /></span></div>
                <div>{countries}<span id="sp"><BiWifi0 /></span></div>
                <div>1h 47m</div>
          </div>
          <div className="Graf">
            <dir>grafico</dir>
            <dir className="LabelGraf">Avaliação dos usuários</dir>
          </div>
          <div className="LabelSinopse">Sinopse</div>
          <div className="TextSinopse"><p>{summary}</p></div>
          <div className="InfoTeam" >
            {
              teamList.map((info, key) => (
                <div className="ContainerInfoTeam" key={key}>
                  <div className="Name">{info.name}</div>
                  <div className="Job">{info.job}</div>
                </div>
              ))
            }

          </div>
        </Information>

      </Description>
    </Container>
  )
}
export default MovieDescription

