import reducer, { SAVE, initialState, saveModels } from '../models';
// actions
/*************************************************************/
describe('actions', () => {
  it('SAVE is a valid value', () => {
    expect(SAVE).toBe('@models/save');
  });
});
// action creators
/*************************************************************/
describe('action creators', () => {
  it('saveMakes() returns a valid action', () => {
    const models = [{ name: 'model 1' }, { name: 'model 2' }];
    expect(saveModels(models)).toEqual({
      type: SAVE,
      models
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
    const models = [{ name: 'model 1' }, { name: 'model 2' }];
    expect(
      reducer(undefined, {
        type: SAVE,
        models
      })
    ).toEqual([...models]);
  });
});
