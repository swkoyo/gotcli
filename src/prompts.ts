import { SELECTION_ENUM } from "./constants";
import select from "@inquirer/select";
import { getHouseByName, getHouses } from "./houses/repo";
import { input, confirm } from "@inquirer/prompts";
import { formatHouseName } from "./utils";

export async function getSelectionMethod(): Promise<SELECTION_ENUM> {
    const answer = await select({
        message: "How would you like to find your house?",
        choices: [
            {
                name: "List all houses",
                value: SELECTION_ENUM.LIST,
                description:
                    "Select a house from a list of all houses available",
            },
            {
                name: "Search house by name",
                value: SELECTION_ENUM.SEARCH,
                description: "Select a house by its name",
            },
            {
                name: "Get random house",
                value: SELECTION_ENUM.RANDOM,
                description: "Get a random house",
            },
        ],
    });

    return answer;
}

export async function getHouseFromList(): Promise<string> {
    const houses = await getHouses();

    const answer = await select({
        message: "What house would you like to view?",
        choices: houses.map((house) => {
            return {
                name: house.name,
                value: house.name,
            };
        }),
    });

    return answer;
}

export async function getHouseSearch(): Promise<string> {
    const answer = await input({
        message: "What house would you like to view?",
        validate: async (val) => {
            if (val.trim().length === 0) {
                return "Please enter a valid house name.";
            }
            const house = await getHouseByName(formatHouseName(val));
            if (!house) {
                return "House not found!";
            }
            return true;
        },
    });

    return answer;
}

export async function getRestart(): Promise<boolean> {
    const answer = await confirm({
        message: "Would you like to see another house?",
    });
    return answer;
}
