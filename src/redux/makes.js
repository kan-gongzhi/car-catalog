const SAVE = '@makes/save';

export const saveMakes = makes => ({
  type: SAVE,
  makes
});

const initialState = [];

const makes = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return action.makes;
    default:
      return state;
  }
};

export default makes;
