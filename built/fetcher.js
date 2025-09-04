"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const url = "https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past";
async function getResults() {
    const resp = await (0, node_fetch_1.default)(url);
    return resp.text();
}
exports.getResults = getResults;
