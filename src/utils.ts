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
