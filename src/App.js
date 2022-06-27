import './App.css';
import React, {useState } from 'react';
import{Conexion} from './conexion/conexion';
import { Cards } from './recipientes/card';

const Pokemon = () => {
  const [url,setUrl]=useState ('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  const estado = Conexion(url);
  const {cargando,dato}=estado
  cargando? console.log('cargando'): console.log(dato.results);

  return (
    <div>
      <h1>esta es la pagina de pokemon</h1>

      {
        cargando
        ?
        <h1>cargando...</h1>
        :
        <Cards results={dato.results}/>
      }
    </div>
  )
}



export default Pokemon;
