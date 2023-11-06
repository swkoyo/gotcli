import { eq } from "drizzle-orm";
import db from "src/db";
import { House, houses } from "src/db/schema";

export async function getHouses(): Promise<House[]> {
    const res = await db.select().from(houses);
    return res;
}

export async function getHouseByName(name: string): Promise<House | null> {
    const res = await db
        .select()
        .from(houses)
        .where(eq(houses.name, name))
        .limit(1);
    if (res.length === 0) return null;
    return res[0];
}
