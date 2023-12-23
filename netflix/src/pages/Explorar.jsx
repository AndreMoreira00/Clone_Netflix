import React, {useEffect, useState} from "react";
import Navegacao from "../components/Navegacao";
import Destaque from "../components/Destaque";
import Sessao from "../components/Sessao";
import ObterConteudo from "../functions/ObterConteudos";
import ObterGenero from "../functions/ObterGeneros";
import { useEffect, useState } from "react";

export default function Explorar(){
  const [conteudos, definirConteudos] = useState([])
  const [generos, definirGeneros] = useState([])

  useEffect(function(){
    ObterConteudo()
    .then(function(resposta){
      if (resposta.status == 200)
        definirConteudo(resposta.data)
      else
        console.log(resposta)
    })
    .catch(function(erro){
      console.log(erro)
      alert(erro.message)
    })

    ObterGenero()
    .then(function(resposta){
      if (resposta.status == 200)
        definirGenero(resposta.data)
      else if (resposta.status == 404)
        alert("Nenhum gênero encontrado!")
      else if (resposta.status == 500)
        alert("problema no servidor")
      else
        console.log(resposta)
    })
    .catch(function(erro){
      console.log(erro)
    })
  }, [])


  return<>
    <Destaque fundo="/fundo.jpg">
      <Navegacao/>
    </Destaque>

    { generos.length > 0 && 
        generos.map(function(genero, indice){
          return <Sessao
            key ={indice}
            genero ={genero}
            conteudos={conteudos}
          />
        })
    }
  </>
}