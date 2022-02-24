import styled   from 'styled-components';


export const Pages = styled.div`
 
 display: flex;
 
 flex-direction: column;
 align-items: center;
 justify-content: center;
  a{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    padding: 40px;
    text-align: center;
    
    color: #5C16C5;
  }

  .linkpage_${(props)=>props.page}{
    color: #29085a;
  }
  a:hover{
    cursor: pointer;
  }

`
