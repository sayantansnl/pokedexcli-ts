import { State } from "./state.js";

export async function commandMapb(state: State) {
    if (state.previous === "") {
        console.log("You're on the first page.");
        return;
    }
    try {
        const locations = await state.pokeapi.fetchLocations(state.previous);
        state.next = locations.next;
        state.previous = locations.previous;
        for (const location of locations.results) {
            console.log(location.name);
        }
    } catch (err) {
        console.log(`Problem in fetching previous 20 locations: ${err}`);
    }
}