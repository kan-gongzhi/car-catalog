// helper
/*************************************************************/
export const ajaxGet = url => () => fetch(url);

// export
/*************************************************************/
export const sendGetRequest = (fetchAndHandleAjax, url) =>
  fetchAndHandleAjax(ajaxGet(url));
