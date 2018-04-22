const SAVE = '@models/save';

export const saveModels = models => ({
  type: SAVE,
  models
});

const initialState = [];

const makes = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return action.models;
    default:
      return state;
  }
};

export default makes;
