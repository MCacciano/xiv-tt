import nodeFetch from 'node-fetch';

const fetch = (url, options) =>
  nodeFetch.call(this, url, { redirect: 'follow', ...options });

export default fetch;
