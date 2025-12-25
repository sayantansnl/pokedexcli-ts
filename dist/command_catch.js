export async function commandCatch(state, ...args) {
    try {
        const pokemon = await state.pokeapi.fetchPokemon(args[0]);
        const baseXP = pokemon.base_experience;
        const ballPower = Math.floor(Math.random() * 2 * baseXP);
        console.log(`Throwing a Pokeball at ${args[0]}...`);
        if (ballPower > baseXP) {
            console.log(`${args[0]} was caught!`);
            state.pokeBall[pokemon.name] = pokemon;
        }
        else {
            console.log(`${args[0]} escaped!`);
        }
    }
    catch (err) {
        console.log(`Error catching pokemon: ${err}`);
    }
}
