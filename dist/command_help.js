import { getCommands } from "./cliCommand.js";
export function commandHelp() {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log("\n");
    const registry = getCommands();
    for (const key in registry) {
        const description = registry[key].description;
        console.log(`${key}: ${description}`);
    }
}
