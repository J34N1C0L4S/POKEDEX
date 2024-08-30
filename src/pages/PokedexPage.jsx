import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import './Styles/PokedexPage.css';

const PokedexPage = () => {
  const trainer = useSelector((states) => states.trainer);
  const [pokemons, getPokemons, getTypePokemons] = useFetch();
  const [searchedName, setSearchedName] = useState('');
  const [typeSelected, setTypeSelected] = useState('allPokemons');

  useEffect(() => {
    if (typeSelected == 'allPokemons') {      
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'
    getPokemons(url)
    } else {
      getTypePokemons(typeSelected)
    }    
  }, [typeSelected]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedName(inputName.current.value.trim().toLowerCase())
  };

  const inputName = useRef();

  const callbackFilter = (poke) => { 
    const filterName = poke.name.includes(searchedName);
    return filterName;
  }; 
  
  return (
    <div>
      <h1 className="pokedex-tittlee">Pokedex</h1>
      <p className="pokedex-trainer">Welcome {trainer}, here you'll find favorite Pokemons</p>
      <form  onSubmit={handleSearch}>
        <input className="pokedex-form" type="text" ref={inputName} />
        <button className="pokedex-button">Search</button>
      </form>
      <SelectType setTypeSelected={setTypeSelected}/>
      <section className="pokemons__container flex-container">
        {pokemons  && !pokemons.results.some(callbackFilter) ? (
        <h2>There is not Pokemon that match the filter</h2>
      ) : (
          pokemons?.results
            .filter(callbackFilter)
            .map((poke) => <PokeCard key={poke.url} poke={poke} />)
      )};
      </section>
    </div>
  );
};

export default PokedexPage;
