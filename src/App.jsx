// realizar una petición y guardar la información en un estado, ayudándonos de un useEffect para realizar la petición una única vez.
// API= 'https://rickandmortyapi.com/api/character'
// guardaremos los datos de la api en un estado, pintaremos los personajes de rick y morty con los atributos que queramos, imágenes mínimo y cada personaje será pintado en un componente específico al que le enviaremos los datos del personaje para recibirlos y pintarlos, además, el componente hijo, deberá tener un estado que controle que si le hacemos click a una imagen de un personaje esta rote 180 grados, puede ser mediante un cambio de clase o de estilos en línea apoyándose en el estado creado

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Character from './components/Character/Character'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        console.log('Resultados de la petición:', data.results[0].image)
        setCharacters(data.results)
      })
      .catch((error) =>
        console.error('Error al obtener datos de la API:', error)
      )
  }, [])

  return (
    <>
      <ul>
        {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            image={character.image}
          ></Character>
        ))}
      </ul>
    </>
  )
}

export default App
