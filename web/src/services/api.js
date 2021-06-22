const ENDPOINT = 'http://localhost:3001/card/';

const postDataFetch = (dataState) => {
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(dataState),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default postDataFetch;
