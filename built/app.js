"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = require("fs");
const node_html_parser_1 = require("node-html-parser");
const url = "https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past";
async function getResults() {
    const resp = await (0, node_fetch_1.default)(url);
    // const resp = await fetch(url, {
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0",
    //         "Accept": "application/json, text/plain, */*",
    //         "Accept-Language": "en-US,en;q=0.5",
    //         "Content-Type": "application/json;charset=utf-8",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-origin",
    //         "Referrer": "https://espc.com/properties?p=3&ps=5&new=7",
    //     },
    //     "body": `{\"page\":${page},\"pageSize\":${pageSize},\"sortBy\":null,\"locations\":[{\"displayText\":\"Scotland\",\"key\":\"scotland\",\"category\":0}],\"radiuses\":[],\"school\":null,\"rental\":false,\"minBeds\":\"\",\"minPrice\":\"\",\"maxPrice\":\"\",\"new\":7,\"fixedPrice\":false,\"virtualTour\":false,\"underOffer\":false,\"featured\":false,\"exclusive\":false,\"orgId\":null,\"ptype\":[],\"freeText\":[],\"view\":\"list\",\"keywords\":[],\"epc\":[],\"sids\":[]}`,
    //     "method": "POST"
    // });
    return resp.text();
}
function parseHtml(htmlStr) {
    const root = (0, node_html_parser_1.parse)(htmlStr);
    return {};
}
async function main() {
    const outFile = 'data.json';
    const htmlStr = await getResults();
    const jsonData = await parseHtml(htmlStr);
    (0, fs_1.writeFileSync)(outFile, JSON.stringify(jsonData, null, 4));
    console.log(`Wrote data to ${outFile}`);
}
main();
