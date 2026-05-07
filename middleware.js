const express = require("express");
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Optional: parse JSON data
app.use(express.json());

// Middleware with next()
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

// GET → Home
app.get("/", (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/login">Login</a>
  `);
});

// GET → Login form
app.get("/login", (req, res) => {
  res.send(`
    <h1>Login Page</h1>
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Enter username" /><br><br>
      <input type="password" name="password" placeholder="Enter password" /><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST → Handle input
app.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.send("<h3>All fields are required</h3>");
  }

  console.log("Data received:", req.body);
  next();
}, (req, res) => {
  res.send(`
    <h1>Data Received ✅</h1>
    <p>Username: ${req.body.username}</p>
  `);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});