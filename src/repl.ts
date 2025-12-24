import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const lowerCaseInput = input.toLocaleLowerCase().trim();
    return lowerCaseInput.split(" ");
}

export function startREPL(state: State) {
    const rl = state.interface;
    const registry = state.commands;

    rl.prompt();
    rl.on("line", (input) => {
        if (!input.length) {
            rl.prompt();
            return;
        } else {
            const command = cleanInput(input)[0];

            if (command in registry) {
                try {
                    registry[command].callback(state);
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