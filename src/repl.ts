import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const lowerCaseInput = input.toLocaleLowerCase().trim();
    return lowerCaseInput.split(" ");
}

export async function startREPL(state: State) {
    const rl = state.interface;
    const registry = state.commands;

    rl.prompt();
    rl.on("line", async (input) => {
        if (!input.length) {
            rl.prompt();
            return;
        } 
        const command = cleanInput(input)[0];

        if (command in registry) {
            try {
                await registry[command].callback(state);
            } catch (err) {
                console.log(err);
            }
        } else {
            throw new Error("Unknown command. Type 'help' to display commands.");
        }
        rl.prompt();
        
    });
}