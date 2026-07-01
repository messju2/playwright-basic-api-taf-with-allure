import { test, expect } from '@playwright/test';

// We can define a base URL for our API requests
// const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing with Playwright', () => {
  
  test('GET Request - Retrieve a post', async ({ request }) => {
    // Send a GET request
    const response = await request.get(`/posts/1`);
    
    // Assert the status code is 200 OK
    expect(response.status()).toBe(200);
    
    // Parse the JSON response body
    const body = await response.json();
    
    // Assert on specific data in the response
    expect(body).toHaveProperty('id', 1);
    expect(body.title).toBeDefined();
    console.log('Response Body:', body);
  });

  test('POST Request - Create a new post', async ({ request }) => {
    // Send a POST request with a JSON payload
    const response = await request.post(`/posts`, {
      data: {
        title: 'Testing Playwright APIs',
        body: 'This is a great automation tool.',
        userId: 1,
      }
    });

    // Assert the creation status code (201 Created)
    expect(response.status()).toBe(201);

    const body = await response.json();
    // Assert the response contains our sent data
    expect(body.title).toBe('Testing Playwright APIs');
    expect(body.id).toBeDefined(); // The API should return a new ID
  });

});