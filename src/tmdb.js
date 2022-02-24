const API_Key ='d3dad3aaf9fe823e7609d3d2b6745782'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint)=>{
    const req =   await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getHomeList: async (endpoint)=>{
      return [
       
      {           
        items: await basicFetch(`${endpoint}?api_key=${API_Key}&language=pt-BR`)
      },
    ]
    },

}
/*


*/