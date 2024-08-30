import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import './Styles/PokedexPage.css'

const HomePage = () => {    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(setTrainer(inputTrainer.current.value.trim()));
        navigate('/pokedex');
    };
    
    const inputTrainer = useRef()

  return (
    <div>
       <h1 className="poke-tittle">POKEDEX</h1>
       <h2 className="poke-greeting">Hi Trainer</h2>
       <p className="poke-intrucctions">
            If you want to find you favorite pokemon, please 
            give me your trainer 
            name
        </p>
       <form className="poke-form" onSubmit={handleSubmit}> 
        <input className="poke-input" 
          ref={inputTrainer} 
          type="text" 
          placeholder="Write your trainer name" />
        <button>Catch them all</button>
       </form>
    </div>
  )
}

export default HomePage
