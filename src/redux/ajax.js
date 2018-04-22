// actions
/*************************************************************/
export const FETCHING = '@ajax/fetching';
export const FETCH_FAILURE = '@ajax/fetch-failure';
export const FETCH_SUCCESS = '@ajax/fetch-success';

export const startFetching = () => ({
  type: FETCHING
});

export const fetchFailure = () => ({
  type: FETCH_FAILURE,
  error: 'Error fetching data.'
});

export const fetchSuccess = () => ({
  type: FETCH_SUCCESS
});

export const fetchAndHandleAjax = apiFunc => dispatch => {
  dispatch(startFetching());
  return apiFunc()
    .then(response => {
      return response.json();
    })
    .then(json => {
      dispatch(fetchSuccess());
      return json;
    })
    .catch(ex => {
      dispatch(fetchFailure());
      console.log('parsing failed', ex);
    });
};
// reducer
/*************************************************************/
export const initialState = {
  isFetching: false,
  error: ''
};

const ajax = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ''
      };
    default:
      return state;
  }
};

export default ajax;
