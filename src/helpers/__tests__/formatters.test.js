import { formattedMoney, getReversedStr } from '../formatters';
// tests
/*************************************************************/
describe('format helpers', () => {
  it('getReversedStr() returns a reversed string', () => {
    const str = '123';
    expect(getReversedStr(str)).toBe('321');
  });
  it('formattedMoney() returns a number in money format', () => {
    expect(formattedMoney('')).toBe('');
    expect(formattedMoney(123)).toBe('123');
    expect(formattedMoney(1234)).toBe('1,234');
    expect(formattedMoney(1234567)).toBe('1,234,567');
  });
});
