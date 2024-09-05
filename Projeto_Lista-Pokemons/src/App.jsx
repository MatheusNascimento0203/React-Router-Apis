import axios from "axios";
import { useEffect, useState } from "react";

async function fetchPokemon() {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.data;
  return data.results;
}

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(null);
  const [pokemonShown, setPokemonShown] = useState(null);

  useEffect(() => {
    fetchPokemon().then((result) => {
      setPokemon(result);
    });
  }, [url]);

  return (
    <div className="flex flex-col gap-8 px-72 pt-24 items-center">
      <div className="bg-[#eaeaea] w-full flex flex-col items-center">
        <h2 className="text-black font-semibold text-3xl">Pokémon</h2>
        <ul className="h-96 w-80 overflow-y-auto">
          {pokemon.map((mon) => (
            <li
              className="flex items-center justify-between mt-4 mr-4 border-2 border-black h-9"
              key={mon.name}
            >
              <span>{mon.name}</span>
              <button
                className="text-white w-36 bg-[#242424] rounded-md"
                onClick={() => {
                  setUrl(mon.url);
                }}
              >
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>
      {pokemonShown && (
        <div>
          <h2>{pokemonShown.name}</h2>
          <img src={pokemonShown.sprites.front_default} alt="" />
          <div className="stat">
            <b>Tipo: </b>
            {pokemonShown.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>
            {pokemonShown.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>
            {pokemonShown.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokemonShown.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
