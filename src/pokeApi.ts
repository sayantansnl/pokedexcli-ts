import { Root } from "./root.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const fullURL = typeof pageURL === "undefined" ? `${PokeAPI.baseURL}/location-area` : pageURL;
        const response = await fetch(fullURL);
        const data = await response.json();
        return data as Promise<ShallowLocations>;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(fullURL);
        const data = await response.json();
        return data as Promise<Location>;
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