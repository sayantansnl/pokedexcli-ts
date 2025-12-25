import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays 20 location names at a time",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous 20 locations at a time",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Displays the pokemons available in the specified area",
            callback: commandExplore,
        }
    };
}
