import { carOfTheWeek, models, makes, ajax } from '../index';

describe('reducers', () => {
  it('carOfTheWeek is a valid module', () => {
    expect(carOfTheWeek).toBeDefined();
  });
  it('models is a valid module', () => {
    expect(models).toBeDefined();
  });
  it('makes is a valid module', () => {
    expect(makes).toBeDefined();
  });
  it('ajax is a valid module', () => {
    expect(ajax).toBeDefined();
  });
});
