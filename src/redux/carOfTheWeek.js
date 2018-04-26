export const SAVE = '@car-of-the-week/save';

export const saveCarOfTheWeek = carOfTheWeek => ({
  type: SAVE,
  carOfTheWeek
});

export const initialState = [];

const carOfTheWeek = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return action.carOfTheWeek;
    default:
      return state;
  }
};

export default carOfTheWeek;
