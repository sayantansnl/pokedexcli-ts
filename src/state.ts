import { createInterface, Interface } from "readline";
import { getCommands } from "./cliCommand.js";
import { PokeAPI } from "./pokeApi.js";
import { Cache } from "./pokeCache.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    interface: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    next: string;
    previous: string;
};

export async function initState(): Promise<State> {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const registry = getCommands();
    const pokeAPI = new PokeAPI(new Cache(5000));
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