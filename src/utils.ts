import { RANDOM_SERVICE_URL, TOTAL_HOUSE_COUNT } from "./constants";

export function clearScreen(): void {
    process.stdout.write("\x1bc");
}

export function quitApp(): void {
    process.exit(0);
}

export async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatHouseName(house: string): string {
    const res = house
        .trim()
        .split(" ")
        .map((word) => {
            const [first, ...rest] = word;
            return `${first.toUpperCase()}${rest.join("")}`;
        })
        .join(" ");
    return res;
}

export async function getRandomNum(
    max: number = TOTAL_HOUSE_COUNT,
): Promise<number> {
    try {
        const res = await fetch(`${RANDOM_SERVICE_URL}?max_num=${max}`);
        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await res.json();
        return (data as { random_number: number }).random_number;
    } catch (err) {
        console.log(err);
        return TOTAL_HOUSE_COUNT;
    }
}
