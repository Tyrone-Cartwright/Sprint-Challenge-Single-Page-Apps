import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Link } from "react-router-dom";


export default function CharacterList() {

  const [character, setCharacter] = useState([]);
  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        setCharacter(response.data.results);
        console.log(response);

      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="character-list">
      <Link to="/"><button>Home</button></Link>
      <Link to="/Search"><button>Search
  </button></Link>

      {character.map(index => (
        <CharacterCard key={index.id} name={index.name}
          species={index.species} status={index.status} gender={index.gender} image={index.image} />

      ))}
    </section>

  );
}
