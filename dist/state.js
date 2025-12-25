import { createInterface } from "readline";
import { getCommands } from "./cliCommand.js";
import { PokeAPI } from "./pokeApi.js";
export async function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    const registry = getCommands();
    const pokeAPI = new PokeAPI();
    let next = "";
    let previous = "";
    return {
        interface: rl,
        commands: registry,
        pokeapi: pokeAPI,
        next: next,
        previous: previous,
    };
}
