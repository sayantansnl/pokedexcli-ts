export function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (const command in state.commands) {
        const description = state.commands[command].description;
        console.log(`${command}: ${description}`);
    }
}
