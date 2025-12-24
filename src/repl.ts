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
        } else {
            const firstWord = cleanInput(input)[0];
            const registry = getCommands();

            if (firstWord in registry) {
                try {
                    registry[firstWord].callback(registry);
                } catch (err) {
                    console.log(err);
                }
            } else {
                throw new Error("Unknown command");
            }
            rl.prompt();
        }
    });
}