import { parseHtml } from './parser';

const sampleHtml = `
<div>
    <h2>Personal Allowances</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Allowances</th>
          <th scope="col">2025 to 2026</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Personal Allowance</td>
          <td>£12,570</td>
        </tr>
      </tbody>
    </table>
</div>
`;

describe('parseHtml', () => {
    it('should parse personal allowances correctly', () => {
        const result = parseHtml(sampleHtml);
        expect(result.personal_allowances).toHaveLength(1);
        expect(result.personal_allowances[0].title).toBe('Personal Allowances');
        expect(result.personal_allowances[0].data).toEqual({
            'Personal Allowance': {
                '2025 to 2026': '£12,570'
            }
        });
    });
});
