import {
    sqliteTable,
    text,
    integer,
    uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { InferSelectModel } from "drizzle-orm";

export const houses = sqliteTable(
    "houses",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
        words: text("words"),
        seat: text("seat"),
        region: text("region"),
        color: text("color"),
    },
    (houses) => ({
        nameIdx: uniqueIndex("nameIdx").on(houses.name),
    }),
);

export type House = InferSelectModel<typeof houses>;
