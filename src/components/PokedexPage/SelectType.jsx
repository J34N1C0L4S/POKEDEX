import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const SelectType = ({ setTypeSelected }) => {
    const [types, getTypes] = useFetch();

    useEffect(() => {
      const url = 'https://pokeapi.co/api/v2/type';
    
      getTypes(url)
    }, []);

    const handleChange = (e) => { 
        setTypeSelected(e.target.value);
    }
    
    return (
        <select className="poke-options" onChange={handleChange}>
            <option value="allPokemons">All  pokemons</option>
            {types?.results.map((typeInfo) => (
                <option key={typeInfo.url} value={typeInfo.url}>
                    {typeInfo.name}
            </option>
            ))}
    </select>
    );
};

export default SelectType;
