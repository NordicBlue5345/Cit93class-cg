const apiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', `Bearer ${apiKey}`);

const payload = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Who won the World Series in 2020?' }
  ],
  temperature: 0.7
};

const requestOptions = {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(payload)
};

fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Handle the API response
    const completion = data.choices[0].text;
    console.log('Response:', completion);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });