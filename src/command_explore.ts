import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    try {
        const locationDetails = await state.pokeapi.fetchLocation(args[0]);
        const pokemons = locationDetails.pokemon_encounters;
        console.log(`Exploring ${args[0]}...`);
        console.log("Found Pokemon:")
        for (const pokemon of pokemons) {
            const pokemonName = pokemon.pokemon.name;
            console.log(`- ${pokemonName}`);
        }
    } catch (err) {
        console.log(`Error in getting pokemons from area: ${err}`);
    }
}