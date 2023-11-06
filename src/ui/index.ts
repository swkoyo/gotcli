import chalk from "chalk";
import { clearScreen, formatHouseName } from "src/utils";
import { DESCRIPTION, LOGO, SELECTION_ENUM } from "src/constants";
import {
    getHouseFromList,
    getHouseSearch,
    getRestart,
    getSelectionMethod,
} from "src/prompts";
import { getHouseByName } from "src/houses/repo";
import { getHouseInfo, getHouseSigil } from "src/houses/services";
import { House } from "src/db/schema";

export async function showLanding(): Promise<void> {
    clearScreen();
    console.log(chalk.red(LOGO));
    console.log(DESCRIPTION);

    const selectionMethod = await getSelectionMethod();

    let house: House | null = null;

    if (selectionMethod === SELECTION_ENUM.LIST) {
        const answer = await getHouseFromList();
        house = await getHouseByName(formatHouseName(answer));
    } else if (selectionMethod === SELECTION_ENUM.SEARCH) {
        const answer = await getHouseSearch();
        house = await getHouseByName(formatHouseName(answer));
    }

    const sigil = getHouseSigil(house);
    const info = getHouseInfo(house);

    clearScreen();
    console.log(sigil);
    console.log(info.join("\n"));

    const restart = await getRestart();
    if (!restart) {
        console.log("Goodbye!")
        return;
    }
    showLanding();
}
