import fetch from 'node-fetch';

const url = "https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past";

export async function getResults(): Promise<string> {
    const resp = await fetch(url);
    return resp.text();
}
