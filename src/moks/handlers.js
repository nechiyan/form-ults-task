import { http } from 'msw'; // Importing MSW's http method
import { getUserByUsername } from './mockDb'; // Assuming you have a mock database function

export const handlers = [
  // Mock Login Endpoint using the http method
  http.post('/api/login', (req, res, ctx) => {
    try {
      // Directly accessing req.body since MSW parses it for us
      const { username, password } = req.body;

      // Logging the request to check the received data
      console.log("Request received:", { username, password });

      const user = getUserByUsername(username);

      if (user && user.password === password) {
        // Returning a success response
        return res(
          ctx.status(200), // Success status
          ctx.json({ message: 'Login successful', token: 'mock-token-123' }) // Correct method to send JSON
        );
      } else {
        // Returning an error response for invalid login
        return res(
          ctx.status(401), // Unauthorized status
          ctx.json({ message: 'Invalid username or password' }) // Correct method to send JSON
        );
      }
    } catch (error) {
      console.error("Error in request handling:", error);
      return res(
        ctx.status(500), // Internal Server Error
        ctx.json({ message: 'Error processing the request' }) // Correct method to send JSON
      );
    }
  }),
];
