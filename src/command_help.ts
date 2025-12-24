import { State } from "./state.js";

export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();

    for (const command in state.commands) {
        const description = state.commands[command].description;
        console.log(`${command}: ${description}`);
    }
}