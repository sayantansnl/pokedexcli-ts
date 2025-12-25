export async function commandInspect(state, ...args) {
    const pokemonName = args[0];
    if (!(pokemonName in state.pokeBall)) {
        console.log(`${pokemonName} not caught!`);
        return;
    }
    const pokemonDetails = state.pokeBall[pokemonName];
    console.log(`Name: ${pokemonName}`);
    console.log(`Height: ${pokemonDetails.height}`);
    console.log(`Weight: ${pokemonDetails.weight}`);
    console.log("Stats:");
    for (const stats of pokemonDetails.stats) {
        console.log(`  -${stats.stat.name}: ${stats.base_stat}`);
    }
    console.log("Types:");
    for (const types of pokemonDetails.types) {
        console.log(`  - ${types.type.name}`);
    }
}
