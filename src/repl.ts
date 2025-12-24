import { createInterface } from "node:readline";

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
            let firstWord = cleanInput(input)[0];
            console.log(`Your command was: ${firstWord}`);
            rl.prompt();
        }
    });
}