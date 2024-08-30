import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PokeinfoPage = () => {
  const { name } = useParams();
  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    getPokemon(url);
  }, [name]);

  return ( 
    <article className="poke-article">
      <img className="pokeinfo-img"
        src={pokemon?.sprites.other['official-artwork'].front_default} 
        alt={pokemon?.name}
      />
      <h2>{pokemon?.name}</h2>
    </article>
  );
};

export default PokeinfoPage;