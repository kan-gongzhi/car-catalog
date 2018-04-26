import { getModelById, getModels } from '../models';

describe('models selector', () => {
  it('getModels() returns models from store', () => {
    const models = [{ name: '1' }, { name: '2' }];
    expect(getModels({ models })).toEqual(models);
  });
  it('getModelById() returns selected model from store', () => {
    const models = [{ id: 1 }, { id: 2 }];
    expect(getModelById(1)({ models })).toEqual({ id: 1 });
  });
});
