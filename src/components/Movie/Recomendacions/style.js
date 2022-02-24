import styled, {css} from 'styled-components';


export const Container = styled.div`
    position: static;
    width:  85vw;;
    margin-left: 9vw;
    padding-top:64px;
    
    
   margin-top:16px;
    .Title{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        margin-top: 32px;
        margin-bottom: 24px;
    }
    @media (max-width: 928px){
        margin-left: 2.5vw;
    }

`
export const RecomendationMovie = styled.div`
position: static;
    .movieRow{
      width:80vw;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .movieRow--item{
      margin-right:1px;
    }
    .link{
      text-decoration: none;  
     
    }
    img{
      width: 100%;
      width: 176px;
      height: 264px; 
      
      
    }
    .name-movie{
      font-family: Roboto;
      font-style: normal;
      width: 176px;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      word-break: break-all;
      text-decoration: none;  
      color: #000;
    
    }
    .date-movie{
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      color: #646464;
      margin-bottom:48px;
      color:#646464;
    }
    @media screen and (max-width: 1100px){
      
      .movieRow--item{
        margin-right:5px;
        width: 139px;
      }
      .name-movie{
        width: 139px; 
      }
      img{
        width: 139px;
        height: 206px;
      }
     
    }
`



