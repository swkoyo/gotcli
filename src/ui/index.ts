import chalk from "chalk";
import { clearScreen, formatHouseName, getRandomNum, sleep } from "src/utils";
import { DESCRIPTION, LOGO, SELECTION_ENUM } from "src/constants";
import {
    getHouseFromList,
    getHouseSearch,
    getRestart,
    getSelectionMethod,
} from "src/prompts";
import { getHouseById, getHouseByName } from "src/houses/repo";
import { getHouseInfo, getHouseSigil } from "src/houses/services";
import { House } from "src/db/schema";
import { oraPromise } from "ora";

export async function showLanding(): Promise<void> {
    clearScreen();
    console.log(chalk.red(LOGO));
    console.log(DESCRIPTION);

    const selectionMethod = await getSelectionMethod();

    let house: House | null = null;

    if (selectionMethod === SELECTION_ENUM.LIST) {
        const answer = await getHouseFromList();
        house = await oraPromise(
            async () => {
                await sleep(500);
                house = await getHouseByName(formatHouseName(answer));
                return house;
            },
            { text: "Fetching your house..." },
        );
    } else if (selectionMethod === SELECTION_ENUM.SEARCH) {
        const answer = await getHouseSearch();
        house = await oraPromise(
            async () => {
                await sleep(500);
                house = await getHouseByName(formatHouseName(answer));
                return house;
            },
            { text: "Fetching your house..." },
        );
    } else if (selectionMethod === SELECTION_ENUM.RANDOM) {
        house = await oraPromise(
            async () => {
                const id = await getRandomNum();
                house = await getHouseById(id);
                await sleep(500);
                return house;
            },
            {
                text: "Getting random house...",
            },
        );
    }

    const sigil = getHouseSigil(house);
    const info = getHouseInfo(house);

    clearScreen();
    console.log(sigil);
    console.log(info.join("\n"));

    const restart = await getRestart();
    if (!restart) {
        console.log("Goodbye!");
        return;
    }
    showLanding();
}
