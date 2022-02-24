import styled , {css}from  'styled-components';

export const Container = styled.div`
width:100%;
margin:0;
padding:0;

.divmovielist{
   margin-top: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
`
export const FilterMovie = styled.div`
position: absolute;

height: 449px;
left: 0;
right:0;
top: 56px;
width:100%;

background: #2D0C5E;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-botton: 900px;



.filter--cabecalho{
    width: 781px;
    height: 112px;
    left: 328px;
    margin-bottom: 60px; 
}

.paragrafo-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #FFFFFF;
 }

.filter-div-alt{
        width: 134px;
        height: 20px;
        left: 679px;
        margin-bottom: 16px;
       
}
.filter-paragrafo-alt{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */
        color: #FFFFFF;
        margin-bottom: 16px;
}

.filter--div--paragrafo{
  width: 100%;
  max-width:1090px;

}

.filter--button{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center ;
  flex-wrap: wrap;

    
}
@media screen and (max-width: 567px) {
  .filter--button{
    justify-content: flex-start;
  }
  .paragrafo-title{
    font-size:40px;
  }
  .filter--cabecalho{
   
    width: auto;
  }
}
@media screen and (max-width: 767px) {
  .paragrafo-title{
    font-size:25px;
  }
  .filter--cabecalho{
    width: auto;
  }
}
@media screen and (max-width: 567px) {
 
  height: auto;
  display: flex;
  align-items:  flex-start;
  
  
  padding-bottom:40px;
  .filter-div-alt{
    position: absolute;
    width: auto;
    height: 84px;
    left: 16px;
    top: 96px;
    margin-botton:8px;
    margin-top:36px;
  }
  .filter--cabecalho{
    text-align: left;
    width: auto;
    margin-left: 16px;
    margin-botton:36px;
  }
      .paragrafo-title{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: left;
        word-wrap: break-word;
      }
    
  }
  @media screen and (max-width: 364px) {

  }
  .filter-paragrafo-alt{
      text-align: left;
  }
  
}

.radio_button{
    postion:absolute;  
    height: 40px;
    border-radius: 4px;
    padding: 8px 16px;
    border: 0;
    margin: 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
}


`
export const Button = styled.button`

postion:absolute;  
height: 40px;
border-radius: 4px;
padding: 8px 16px;
border: 0;
margin: 8px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;

background-color: '#fff';

&:hover{

  ${props=>(props.alterbutton?css`cursor: pointer;`:``)}
  
 }
&.button_orange{
  background-color: #D18000;
  color: #fff;
}

&.button_white{
  background-color: '#fff';
  color: #000;
}

`

