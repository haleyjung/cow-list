## Debugging Notes

1. If express post is not working with correct endpoint, check if I have `app.use(express.json())`

2. Install `npm install dotenv --save` to use `process.env` for the server (port & database connection)

3. Database connection failure
   - Happens if the table is not created

4. TypeError: Cannot read properties of undefined (reading 'then') in the server file
   - This is thrown when the caller is expecting a `Promise` to be returned and instead receives `undefined`. Let's consider the above examples.
   - Solution 1: I can return promise in the db's `db.saveCow()`
   - Solution 2: I can add a callback function as a second argument of `db.saveCow()` and pass in a callback when it gets called inside `app.post()` instead of `.then()` and `.catch()`

5. HTTP GET request receives data as an array. Remembering this when updating the component's state with the fetched data. For the client to display the fetched data, I'll need to **map** over the state and **return** each state in the HTML elements.

6. To render the page as I click the submit button, call `getCow()` after a successful axios POST request. If the data fails to get fetched from the server, check that I'm binding `getCow()` properly.