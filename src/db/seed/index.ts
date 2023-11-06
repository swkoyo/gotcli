import { houses } from "../schema";
import db from "..";
import houseData from "./houses.json";

(async () => {
    await db.insert(houses).values(houseData);
})();
