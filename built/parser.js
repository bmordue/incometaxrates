"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
const node_html_parser_1 = require("node-html-parser");
/**
 * Parses an HTML table element and extracts the data into a structured object.
 * It can handle tables with and without a <thead> element.
 * @param table The HTMLElement of the table to parse.
 * @returns A structured object containing the table data.
 */
function parseTable(table) {
    const headers = table.querySelectorAll('thead th').map(th => {
        // Clean up header text by removing extra whitespace and "Income after allowances" string.
        return th.text.trim().replace(/\s+/g, ' ').replace(/Income after allowances/g, '').trim();
    });
    const data = {};
    if (headers.length > 0) {
        // This block handles tables with a <thead> element.
        // It assumes the first column of each row is the row title.
        table.querySelectorAll('tbody tr').forEach(tr => {
            const cells = tr.querySelectorAll('td, th');
            const rowTitle = cells[0].text.trim().replace(/\s+/g, ' ');
            const rowData = {};
            for (let i = 1; i < cells.length; i++) {
                if (headers[i]) {
                    rowData[headers[i]] = cells[i].text.trim().replace(/\s+/g, ' ');
                }
            }
            data[rowTitle] = rowData;
        });
    }
    else {
        // This block handles tables without a <thead> element, like the dividends table.
        // It assumes a simple two-column key-value structure.
        table.querySelectorAll('tbody tr').forEach(tr => {
            const cells = tr.querySelectorAll('td, th');
            if (cells.length === 2) {
                const key = cells[0].text.trim().replace(/\s+/g, ' ');
                const value = cells[1].text.trim().replace(/\s+/g, ' ');
                data[key] = value;
            }
        });
    }
    return data;
}
/**
 * Parses the entire HTML string to find and extract data from various tax tables.
 * @param htmlStr The HTML string of the page to parse.
 * @returns A structured JSON object with all the extracted tax data.
 */
function parseHtml(htmlStr) {
    const root = (0, node_html_parser_1.parse)(htmlStr);
    const data = {
        personal_allowances: [],
        tax_rates_and_bands: {
            england_ni_wales: [],
            scotland: []
        },
        dividends: []
    };
    // Find all h2 and h3 headings, which are assumed to be titles for the tables.
    const headings = root.querySelectorAll('h2, h3');
    headings.forEach(heading => {
        const title = heading.text.trim();
        // Find the next sibling that is a table.
        let nextEl = heading.nextElementSibling;
        while (nextEl && nextEl.tagName !== 'TABLE') {
            nextEl = nextEl.nextElementSibling;
        }
        if (nextEl && nextEl.tagName === 'TABLE') {
            const tableData = parseTable(nextEl);
            // Categorize the table data based on the heading title.
            if (title === 'Personal Allowances') {
                data.personal_allowances.push({ title: 'Personal Allowances', data: tableData });
            }
            else if (title === 'Personal Allowances for people born before 6 April 1948') {
                data.personal_allowances.push({ title: 'Personal Allowances for people born before 6 April 1948', data: tableData });
            }
            else if (title === 'Other allowances') {
                data.personal_allowances.push({ title: 'Other allowances', data: tableData });
            }
            else if (title === 'England, Northern Ireland and Wales') {
                data.tax_rates_and_bands.england_ni_wales.push({ title: 'England, Northern Ireland and Wales', data: tableData });
            }
            else if (title === 'Scotland') {
                data.tax_rates_and_bands.scotland.push({ title: 'Scotland', data: tableData });
            }
            else if (title === 'Dividends') {
                data.dividends.push({ title: 'Dividends', data: tableData });
            }
        }
    });
    return data;
}
exports.parseHtml = parseHtml;
