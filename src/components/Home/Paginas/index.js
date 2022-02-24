import React, { useEffect, useState, ReactDOM } from 'react'
import { FaAngleRight ,FaAngleLeft} from 'react-icons/fa';

import { Pages } from './style'

const Paginas = ({idGenres,getPaginas,qtdPaginas,}) => {
    const[paginando,setPaginando]= useState([])
    const[activePage,setActivePage]=useState(false)
    const[numPage,setNumPage]=useState(0)
    const[first_text,setFirst_text]=useState("")
    const[last_text,setLast_text]=useState("Última")
    const[goback,setGoBack]=useState(true)
    const[toadvance,setToAdvance ] = useState(false)
    useEffect(()=>{
        const paginandoAr = async () => {

        if(qtdPaginas>=5){
            let paginas = []
            let i = 1
            while(i<=5){
                paginas.push(i.toString())
                setPaginando(paginas)
                i++
               }
        } 
       
        }
        paginandoAr()

    },[qtdPaginas])
    async function ativepageclick(page){
       
       await setActivePage(true)
       await setNumPage(page)
     
    }
    async function back_page(){
        let paginas = []
        await setLast_text("Última")
        await setToAdvance(false)
              
        paginas = paginando.map(p=>{
            if((Number(p)-4)>0){
                return Number(p)-4
            }
        })
        await setPaginando(paginas) 
        if (Number(paginas[0])==1){
            setFirst_text("")
            setGoBack(true)
           
        }   

    }
    async function first_page_text_click(){
        setFirst_text("")
        setGoBack(true)
        setLast_text("Última")
        setToAdvance(false)
        let paginas = []
        for(var i=1;i<=5;i++){
            paginas.push(i.toString())
        }
        setPaginando(paginas)


    }


    async function more_page(){
        setGoBack(false)
        setFirst_text("Primeira")
        let paginas = []
        let lastP = paginando[4]
        
        paginas = paginando.map(p=>{
            if((Number(p)+4)<qtdPaginas){
                return Number(p)+4
            }
        })
        await setPaginando(paginas)     
        if (Number(paginas[paginas.length-1])==qtdPaginas){
            setLast_text("")
            setToAdvance(false)
        }
           
    }
    async function last_page_text_click(){
        setLast_text("")
        setToAdvance(true)
        setFirst_text("Primeira")
        setGoBack(false)
        
        let paginas = [
            qtdPaginas-4,
            qtdPaginas-3,
            qtdPaginas-2,
            qtdPaginas-1,
            qtdPaginas-0,
        ]
        paginas.push(qtdPaginas)
        await setPaginando(paginas)     
    }

    async function page_alter_movies(pag){
         getPaginas(idGenres,pag)
        
    }

    

    return(
      <Pages page={numPage}  >
          <div>
              {first_text==""?"": <a onClick={()=>first_page_text_click()} > {first_text} </a> }
              {goback ? "": <a  onClick={()=>back_page()} > < FaAngleLeft/> </a> }
              
                <a   className={`linkpage_${paginando[0]}`} onClick={()=>{
                    ativepageclick(paginando[0])
                    page_alter_movies(paginando[0])}} >{paginando[0]}</a>
                <a   className={`linkpage_${paginando[1]}`} onClick={()=>{
                    ativepageclick(paginando[1])
                    page_alter_movies(paginando[1])}} >{paginando[1]}</a>
                <a   className={`linkpage_${paginando[2]}`} onClick={()=>{
                    ativepageclick(paginando[2])
                    page_alter_movies(paginando[2])}} >{paginando[2]}</a>
                <a   className={`linkpage_${paginando[3]}`} onClick={()=>{
                    ativepageclick(paginando[3])
                    page_alter_movies(paginando[3])}} >{paginando[3]}</a>
                <a   className={`linkpage_${paginando[4]}`} onClick={()=>{
                    ativepageclick(paginando[4])
                    page_alter_movies(paginando[4])}}>{paginando[4]} </a>
                
                
              {toadvance ? "": <a  onClick={()=> more_page()}>< FaAngleRight/> </a> }
              {last_text==""?"":<a  onClick={()=>last_page_text_click()}>{last_text}</a>}
          </div>
          
      </Pages>
    )
    
}

export default Paginas