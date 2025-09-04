import { writeFileSync } from 'fs';
import { getResults } from './fetcher';
import { parseHtml } from './parser';

async function main() {
    const outFile = 'data.json';

    const htmlStr = await getResults();
    const jsonData = parseHtml(htmlStr);
    writeFileSync(outFile, JSON.stringify(jsonData, null, 4));
    console.log(`Wrote data to ${outFile}`);
}

main();
