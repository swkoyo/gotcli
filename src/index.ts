import { showLanding } from "./ui";

async function runner(): Promise<void> {
    await showLanding();
}

runner();
