import { getMakeById, getMakes } from '../makes';

describe('makes selector', () => {
  it('getMakes() returns makes from store', () => {
    const makes = [{ name: '1' }, { name: '2' }];
    expect(getMakes({ makes })).toEqual(makes);
  });
  it('getMakes() returns selected make from store', () => {
    const makes = [{ id: 1 }, { id: 2 }];
    expect(getMakeById(1)({ makes })).toEqual({ id: 1 });
    expect(getMakeById()({ makes })).toEqual(undefined);
  });
});
