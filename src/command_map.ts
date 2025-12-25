import { State } from "./state.js";

export async function commandMap(state: State) {
    const baseURL = "https://pokeapi.co/api/v2/location-area/?offset=0&limit=20";
    if (state.next === "") {
        state.next = baseURL;
    }

    try {
        const locations = await state.pokeapi.fetchLocations(state.next);
        state.previous = state.next;
        state.next = locations.next;
        for (const location of locations.results) {
            console.log(location.name);
        }
    } catch (err) {
        console.log(`Problem in fetching locations from map: ${err}`);
    }
}