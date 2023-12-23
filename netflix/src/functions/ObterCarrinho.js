import axios from "axios";

export default function ObterConteudo(){
  return axios({
    method: "GET",
    url: "http://localhost:4000/conteudos",
    
  })
}