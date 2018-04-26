import reducer, { SAVE, initialState, saveMakes } from '../makes';
// actions
/*************************************************************/
describe('actions', () => {
  it('SAVE is a valid value', () => {
    expect(SAVE).toBe('@makes/save');
  });
});
// action creators
/*************************************************************/
describe('action creators', () => {
  it('saveMakes() returns a valid action', () => {
    const makes = [{ name: 'make 1' }, { name: 'make 2' }];
    expect(saveMakes(makes)).toEqual({
      type: SAVE,
      makes
    });
  });
});
// reducers
/*************************************************************/
describe('reducers', () => {
  it('initialState is a valid object', () => {
    expect(initialState).toEqual([]);
  });
  it('reducer handles the null action', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('reducer handles the SAVE action', () => {
    const makes = [{ name: 'make 1' }, { name: 'make 2' }];
    expect(
      reducer(undefined, {
        type: SAVE,
        makes
      })
    ).toEqual([...makes]);
  });
});
