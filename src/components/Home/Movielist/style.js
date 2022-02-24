import React, {useEffect} from 'react'
import styled,{css}   from 'styled-components';



export const Movies = styled.div`
overflow-x: hidden;

${ (props)=>css `margin-top: ${props.widthScren}px; `}


word-break: break-all;

overflow: hidden;
.Content{
  width: vw;  
  height: vh; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
}


.movieRow--item{
  margin-top: 16px;
  display: inline-block;
  word-wrap: break-word;
}
.movieRow--item img{
  width: 100%;  
  width: 176px;
  height: 264px; 
  margin: 0 32px;
  
}

p{
  font-family: Roboto;
  font-style: normal;
  width: 176px;
  font-weight: bold;
  margin: 0 32px;
  font-size: 16px;
  line-height: 24px;
  word-break: break-all;

}
.date-movie{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  margin-bottom:48px;
}
876
&@media screen and (max-width: 876px){

  
  .content{
    margin-left: 0;
  }

}
@media screen and (max-width: 567px){
  margin-left: 1px;
  
  .movieRow--item{
    margin-top: 16px;
  }
  .movieRow--item img{
    
    left:0;
    width: 140px;
    height: 208px;
    margin:  0  ;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 4px;
  }
  p{
    width: 140px;
    font-size: 14px;
    line-height: 20px;
    word-break: break-all;
    margin: 0  9px;
  }
  .date-movie{
    
    font-size: 14px;
    line-height: 20px;
    margin:  0 9px;
    margin-bottom:30px;
    
  }
} 

@media screen and (max-width: 434px){
  .movieRow--item{
    margin-top: 16px;
  }
  
  .movieRow--item img{
    margin:  0 9px;   
  }
  p{
    margin: 0  9px;
    word-break: break-all;
  }
  .date-movie{
    margin: 0  9px;
    margin-bottom:30px;
  }
}
@media screen and (max-width: 400px){
  .movieRow--item{
    margin-top: 16px;
  }

  
  .movieRow--item img{
    margin:  0 9px;
    
  }
  p{
    margin: 0  9px;
    word-break: break-all;
  }
  .date-movie{
    margin: 0  9px;
    margin-bottom:30px;
  }
}

}
@media screen and (max-width: 320 px){
  .movieRow--item{
    margin-top: 16px;
  }

  .movieRow--item img{
    margin:  0 9px;
    
  }
  p{
    margin: 0  5x;
  }
  .date-movie{
    margin: 0  9px;
    margin-bottom:20px;
  }
}




`

