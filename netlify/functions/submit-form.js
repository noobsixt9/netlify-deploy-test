
const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const TALLY_ENDPOINT = 'https://tally.so/r/wQ9MPG';
  
  try {
    const response = await fetch(TALLY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: event.body,
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Submission successful' }),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Submission failed' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred' }),
    };
  }
};
