const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = 3000;
const SECRET_KEY = "secret123"; // use env variable in real apps

const user = {
  id: 1,
  username: "admin",
  password: "1234"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validate user
  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  // Extract token (Bearer TOKEN)
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}


app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to Dashboard",
    user: req.user
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});