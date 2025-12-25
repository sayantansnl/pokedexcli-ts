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
        //console.log(`[PokeAPI] Attempting to fetch from URL: ${fullURL}`);
        const cached = this.cache.get(fullURL);
        if (cached) {
            //console.log(`[PokeAPI] Found cached data for: ${fullURL}`);
            return cached;
        }
        try {
            const response = await fetch(fullURL);
            //console.log(`[PokeAPI] Received response status: ${response.status} ${response.statusText}`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = (await response.json());
            //console.log(`[PokeAPI] Successfully parsed JSON for: ${fullURL}`); //
            this.cache.add(fullURL, data);
            return data;
        }
        catch (e) {
            console.error(`[PokeAPI] Error during fetch or JSON parsing for ${fullURL}: ${e.message}`);
            throw e;
        }
    }
}
