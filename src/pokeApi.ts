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

        const cached = this.cache.get<Location>(fullURL);
        if (cached) {
            return cached;
        }

        const response = await fetch(fullURL);
        const data = (await response.json()) as Location;
        return data;
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

export type Location = {
    root: Root
};