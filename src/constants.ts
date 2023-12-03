import figlet from "figlet";

export const LOGO = figlet.textSync("GOTCLI", {
    font: "Epic",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
});

export const DESCRIPTION = `
Welcome to GOTCLI - the app for Game of Thrones fans, by Game of Thrones fans!
This application allows you to view the great houses of Westeros, all through your terminal!
`;

export enum SELECTION_ENUM {
    LIST = "LIST",
    SEARCH = "SEARCH",
    RANDOM = "RANDOM",
}

export const RANDOM_SERVICE_URL = "https://szkasm.pythonanywhere.com";

export const TOTAL_HOUSE_COUNT = 8;
