import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  fetchAndHandleAjax,
  fetchFailure,
  FETCHING,
  fetchSuccess,
  initialState,
  startFetching
} from '../ajax';
// mocks
/*************************************************************/
const mockResponse = (status, statusText, response) =>
  new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
// actions
/*************************************************************/
describe('actions', () => {
  it('FETCHING is a valid value', () => {
    expect(FETCHING).toBe('@ajax/fetching');
  });
  it('FETCHING is a valid value', () => {
    expect(FETCH_SUCCESS).toBe('@ajax/fetch-success');
  });
  it('FETCHING is a valid value', () => {
    expect(FETCH_FAILURE).toBe('@ajax/fetch-failure');
  });
});
// actions
/*************************************************************/
describe('action creators', () => {
  it('startFetching() returns a valid action', () => {
    expect(startFetching()).toEqual({
      type: FETCHING
    });
  });
  it('fetchSuccess() returns a valid action', () => {
    expect(fetchSuccess()).toEqual({
      type: FETCH_SUCCESS
    });
  });
  it('fetchFailure() returns a valid action', () => {
    expect(fetchFailure()).toEqual({
      type: FETCH_FAILURE,
      error: 'Error fetching data.'
    });
  });
});
// thunk
/*************************************************************/
describe('thunk', () => {
  it('fetchAndHandleAjax() triggers FETCHING and FETCH_SUCCESS actions when successful', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const resolvePromise = () => Promise.resolve(mockResponse(200, null, '{}'));
    window.fetch = jest.fn().mockImplementation(resolvePromise);
    const store = mockStore({});

    return store.dispatch(fetchAndHandleAjax(resolvePromise)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions.length).toBe(2);
      expect(expectedActions).toContainEqual({ type: FETCHING });
      expect(expectedActions).toContainEqual({ type: FETCH_SUCCESS });
    });
  });
  it('fetchAndHandleAjax() triggers FETCHING and FETCH_FAILURE actions when failed', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const resolvePromise = () => Promise.reject(mockResponse(400, null, '{}'));
    window.fetch = jest.fn().mockImplementation(resolvePromise);
    const store = mockStore({});

    return store.dispatch(fetchAndHandleAjax(resolvePromise)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions.length).toBe(2);
      expect(expectedActions).toContainEqual({ type: FETCHING });
      expect(expectedActions).toContainEqual({
        type: FETCH_FAILURE,
        error: 'Error fetching data.'
      });
    });
  });
});
// reducers
/*************************************************************/
describe('reducers', () => {
  it('initialState is a valid object', () => {
    expect(initialState).toEqual({
      isFetching: false,
      error: ''
    });
  });
  it('reducer handles the null action', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('reducer handles the FETCHING action', () => {
    expect(
      reducer(undefined, {
        type: FETCHING
      })
    ).toEqual({
      ...initialState,
      isFetching: true,
      error: ''
    });
  });
  it('reducer handles the FETCH_SUCCESS action', () => {
    expect(
      reducer(undefined, {
        type: FETCH_SUCCESS
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      error: ''
    });
  });
  it('reducer handles the FETCH_FAILURE action', () => {
    expect(
      reducer(undefined, {
        type: FETCH_FAILURE,
        error: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      error: 'error'
    });
  });
});
