import { ajaxGet, sendGetRequest } from '../apis';
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

const resolvePromise = () => Promise.resolve(mockResponse(200, null, '{}'));

window.fetch = jest.fn().mockImplementation(resolvePromise);
// tests
/*************************************************************/
describe('api helpers', () => {
  it('ajaxGet() returns a function and triggers the fetch when the function runs', () => {
    const mockUrl = 'mockUrl';
    ajaxGet(mockUrl)();
    expect(fetch).toBeCalled();
  });
  it('sendGetRequest() returns a function', () => {
    const mockfetchAndHandleAjax = jest.fn(func => func);
    sendGetRequest(mockfetchAndHandleAjax);
    expect(mockfetchAndHandleAjax).toBeCalled();
    expect(fetch).toBeCalled();
  });
});
