import reducer, { SAVE, initialState, saveCarOfTheWeek } from '../carOfTheWeek';
// actions
/*************************************************************/
describe('actions', () => {
  it('SAVE is a valid value', () => {
    expect(SAVE).toBe('@car-of-the-week/save');
  });
});
// action creators
/*************************************************************/
describe('action creators', () => {
  it('saveCarOfTheWeek() returns a valid action', () => {
    const carOfTheWeek = { name: 'car' };
    expect(saveCarOfTheWeek(carOfTheWeek)).toEqual({
      type: SAVE,
      carOfTheWeek
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
    const carOfTheWeek = { name: 'car' };
    expect(
      reducer(undefined, {
        type: SAVE,
        carOfTheWeek
      })
    ).toEqual({
      ...carOfTheWeek
    });
  });
});
