import { createInterface } from "node:readline";
import { getCommands } from "./cliCommand.js";

export function cleanInput(input: string): string[] {
    const lowerCaseInput = input.toLocaleLowerCase().trim();
    return lowerCaseInput.split(" ");
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    rl.prompt();
    rl.on("line", (input) => {
        if (!input.length) {
            rl.prompt();
            return;
        } else {
            const command = cleanInput(input)[0];
            const registry = getCommands();

            if (command in registry) {
                try {
                    registry[command].callback(registry);
                } catch (err) {
                    console.log(err);
                }
            } else {
                throw new Error("Unknown command. Type 'help' to display commands.");
            }
            rl.prompt();
        }
    });
}