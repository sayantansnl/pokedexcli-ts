import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
    try {
        const state = await initState();
        await startREPL(state);
    } catch (err) {
        throw new Error(`Error starting REPL:${err}`);
    }
}

main();