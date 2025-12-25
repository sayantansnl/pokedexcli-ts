export class PokeAPI {
    cache;
    static baseURL = "https://pokeapi.co/api/v2";
    constructor(cache) {
        this.cache = cache;
    }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const cached = this.cache.get(url);
        if (cached) {
            return cached;
        }
        const resp = await fetch(url);
        const data = (await resp.json());
        this.cache.add(url, data);
        return data;
    }
    async fetchLocation(locationName) {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(fullURL);
        const data = await response.json();
        return data;
    }
}
