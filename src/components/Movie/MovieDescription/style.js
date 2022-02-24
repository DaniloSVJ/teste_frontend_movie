import styled from 'styled-components';


export const Container = styled.div`

    width:100vw;
    
    margin-bottom: 120px;
    
    @media  (max-width: 987px){
      margin-bottom: 200px;
    }
    @media  (max-width: 945px){
      margin-bottom: 230px;
    }
    
    

`
export const Description = styled.div`
    position: absolute;
    color: #fff
    left: 0;
    height: auto;
    right:0;
    top: 56px;
    width:100vw;
    
    background: #2D0C5E;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    @media  (max-width: 928px){
      display: flex;
      flex-direction: column;
      justify-content:center;
      
    } 


`
export const DivImg = styled.div`
    
    margin-top: 128px;
    margin-left: 9vw;
    margin-bottom: -146px;
    margin-right: 16.5px;
    border-radius: 8px;
    
    width:48vw;
    img{
      border-radius: 8px;
      width: 383px;
      height: 574px;
    }
    @media  (max-width: 928px){
       margin-bottom: 0px; 
    }
    @media  (max-width: 800px){
      width:90vw;
      margin: 0;
      margin-top: 128px;
     
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      img{
        width: 300px;
        height: 445px;
      }

    }
    @media  (max-width: 425px){
      margin-top: 34px;

      width:90vw;
      img{
        width: 186px;
        height: 279px;
      }
    }
   



`
export const Information = styled.div` 
    
    width: 48vw;  
    margin-left: 16px;
    margin-top: 128px;
    margin-right:${(props)=>{return props.marginrigth }}px;
    color: #FFFFFF;
    font-family: Roboto;
    word-wrap: break-word;
    

    .MovieTitle {
      width: 48vw;
      margin-bottom:  8px;
      
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      div{
        width: 100%;
      }

      

    }
    .Paragraph {
      width: 48vw;
      margin-bottom:  8px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;

      
    }
    .Graf {
      margin-bottom:  8px;
      width: 48vw;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
 

    }

    .Graf .LabelGraf{
      width: 48vw;
      div{
        width: 100%;
      }
    }
    .LabelSinopse{
      margin-bottom:  8px;
      width: 48vw;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
  
    }
    .TextSinopse{
      width: 48vw;
      margin-right:216px;
      margin-bottom:24px;      
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      
      color: #DDDDDD;
   
    }
    .TextSinopse p{
      word-wrap: break-word;
  
    }

    .InfoTeam{
      width: 60vw;
      display: flex;
    
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
  
      
    }
    
    .ContainerInfoTeam{
      margin-right: 33px;
      div{
        width: 100%;
      }
      
    }
    
    .InfoTeam .ContainerInfoTeam .Name{
      width: 174px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      word-break: break-all
      div{
        width: 100%;
      }
    }
    .InfoTeam .ContainerInfoTeam .Job{
      width: 174px;
      margin:0;
      margin-bottom:  23px;
      padding:0;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px
      word-break: break-all
      div{
        width: 100%;
      }
    }

    
     @media  (max-width: 989px){
      padding-bottom: 250px;
      margin-top:128px;

      width: 40vw;  
      .TextSinopse,.MovieTitle,.LabelSinopse,.Graf,.Paragraph,.LabelGraf{
        width: 40vw;

      }
      .MovieTitle p{
        word-wrap: break-word;
      }
      .Paragraph{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        div{
          width: 100%;
        }
      }
      #sp{
        display: none;
      }

      
      @media  (max-width: 928px){
        width: 30vw;
        margin-rigth: 1005px;
      
        margin-top: 42px;   
        margin-left: 18px;
         #sp{
          display: none;
        }
        .InfoTeam{
          position: absolute;
      
        }
        .TextSinopse,.MovieTitle,.InfoTeam{
          width: 90vw;

        }
      }
      @media  (max-width: 459px){
        padding-bottom: 450px;

      }
    

`





