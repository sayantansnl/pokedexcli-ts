export function cleanInput(input) {
    const lowerCaseInput = input.toLocaleLowerCase().trim();
    return lowerCaseInput.split(" ");
}
export async function startREPL(state) {
    const rl = state.interface;
    const registry = state.commands;
    rl.prompt();
    rl.on("line", async (input) => {
        if (!input.length) {
            rl.prompt();
            return;
        }
        const command = cleanInput(input)[0];
        const args = cleanInput(input).slice(1);
        if (command in registry) {
            try {
                await registry[command].callback(state, ...args);
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            throw new Error("Unknown command. Type 'help' to display commands.");
        }
        rl.prompt();
    });
}
