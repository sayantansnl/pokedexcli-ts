export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const fullURL = typeof pageURL === "undefined" ? `${PokeAPI.baseURL}/location-area` : pageURL;
        const response = await fetch(fullURL);
        const data = await response.json();
        return data;
    }
    async fetchLocation(locationName) {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(fullURL);
        const data = await response.json();
        return data;
    }
}
