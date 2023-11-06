import boxen from "boxen";
import chalk from "chalk";
import { House } from "src/db/schema";
import { SIGIL } from "./sigils";

export function getHouseSigil(house: House): string {
    const sigil = boxen(
        chalk.hex(house.color)(SIGIL[house.name.toUpperCase()]),
        {
            padding: 1,
            borderColor: house.color,
            textAlignment: "center",
        },
    );

    return sigil;
}

export function getHouseInfo(house: House): string[] {
    const result = [
        `House: ${house.name}`,
        `Words: ${house.words}`,
        `Seat: ${house.seat}`,
        `Region: ${house.region}`,
    ];
    return result;
}
