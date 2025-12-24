import { createInterface, Interface } from "readline";
import { getCommands } from "./cliCommand.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    interface: Interface;
    commands: Record<string, CLICommand>;
};

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const registry = getCommands();
    return {
        interface: rl,
        commands: registry,
    };
}