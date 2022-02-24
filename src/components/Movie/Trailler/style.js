import styled,{css} from 'styled-components';

//  ${ (props)=>css `margin-top: ${props.MarginTop}px; `}
export const Container = styled.div`
  position: static;
  width: 50vw;
  height:510px;
  margin-top: 32px;
 
  
  margin-left: 9vw;
  .Title    {
    width: 50vw;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    margin-top:39px;
    margin-bottom:24px;
  }
  @media screen and (max-width: 1100px){
    width: 80vw;
    height: 50vw;
    margin-left: 2.5vw;
  }
`
export const TraillerMovie = styled.div`
 
  margin-top: 39px;
  
  height: 50vh;
  width: 50vw;
  margin-bottom:24px;
  iframe{
    width: 907px;
    
    height: 510px;
  }
  @media screen and (max-width: 1100px){
    margin-right: 16px;
    iframe{
      width: 85vw;
      height: 50vw;
    }

  }

  
`



