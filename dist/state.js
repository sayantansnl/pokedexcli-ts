import { createInterface } from "readline";
import { getCommands } from "./cliCommand.js";
export function initState() {
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
