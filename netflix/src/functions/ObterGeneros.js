import axios from "axios";

export default function ObterGenero(){
  return axios({
    method: "GET",
    url: "http://localhost:4000/generos",
    
  })
}