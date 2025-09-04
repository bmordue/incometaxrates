"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fetcher_1 = require("./fetcher");
const parser_1 = require("./parser");
async function main() {
    const outFile = 'data.json';
    const htmlStr = await (0, fetcher_1.getResults)();
    const jsonData = (0, parser_1.parseHtml)(htmlStr);
    (0, fs_1.writeFileSync)(outFile, JSON.stringify(jsonData, null, 4));
    console.log(`Wrote data to ${outFile}`);
}
main();
