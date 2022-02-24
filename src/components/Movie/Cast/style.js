import styled,{css} from 'styled-components';
// ${ (props)=>css `margin-top: ${props.MarginTop}px; `}
export const Container = styled.div`
    postion:static;
    display:flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    ${ (props)=>css `margin-top: ${props.MarginTop}px; `}
    
    width:80vw;

    height: 386px;
    
    margin-left: 9vw;

    
    .Title{
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;
      text-align: left;
      flex-wrap: nowrap;
      margin-bottom:32px;
      
    }
    @media screen and (max-width: 1100px){
      margin-left: 2.5vw;
    }


`
export const Content = styled.div`
    
    word-break: break-all
    font-family: Roboto;
    overflow-y: scroll;
    width: 85vw; 
    
    margin-right: 10000px;

    padding:0;
    height: 100%;
    display:flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    
    margin-right: 105px;
    .Title{
      width:100vw;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;
      margin-bottom:32px;
      flex-wrap: nowrap;
    }
    .Castlist{
      display:flex; 
      height: 386px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      height: 222px;

    }
    .Cast{
      margin-right: 32px;
      width: 175px;
      height: 222px;
    }
    .CastName {
      font-family: Roboto;
      
      font-weight: bold;
      font-size: 18px;
      color: #131313;
    }
    .CastCharacter{
      
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #131313;
    }
    .Image{
      margin-bottom:16px;
      width: 100%;
      height: 100%;
    }
    .Image img{
      width: 175px;
      height: 222px;
    }
    @media  (max-width: 928px){

    }

`










