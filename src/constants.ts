import figlet from "figlet";

export const LOGO = figlet.textSync("GOTCLI", {
    font: "Epic",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
});

export const DESCRIPTION = `
Welcome to GOTCLI!
This application allows you to view the great houses of Westeros, all through your terminal!
`;

export enum SELECTION_ENUM {
    LIST = "LIST",
    SEARCH = "SEARCH",
    RANDOM = "RANDOM",
}
