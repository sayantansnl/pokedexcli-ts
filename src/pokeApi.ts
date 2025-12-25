import { Cache } from "./pokeCache.js";
import { Root } from "./root.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor(private cache: Cache) {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;

        const cached = this.cache.get<ShallowLocations>(url);
        if (cached) {
            return cached;
        }

        const resp = await fetch(url);
        const data = (await resp.json()) as ShallowLocations;

        this.cache.add(url, data);
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        //console.log(`[PokeAPI] Attempting to fetch from URL: ${fullURL}`);
        
        const cached = this.cache.get<Location>(fullURL);
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

            const data = (await response.json()) as Location;
            //console.log(`[PokeAPI] Successfully parsed JSON for: ${fullURL}`); //
            this.cache.add(fullURL, data);
            return data;
        } catch (e) {
            console.error(`[PokeAPI] Error during fetch or JSON parsing for ${fullURL}: ${(e as Error).message}`);
            throw e; 
        }
    }
}

export type ShallowLocations = {
    count: number;
    next: string;
    previous: any;
    results: Result[];
};

type Result = {
    name: string;
    url: string;
};

export type Location = Root;