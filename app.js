// app.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Home page route
app.get("/", (req, res) => {
    res.render("home.ejs", { pageCSS: "home.css" });
});

// Login route
app.get("/login", (req, res) => {
  res.render("login.ejs", { pageCSS: "login.css" });
});

// Register route
app.get("/register", (req, res) => {
  res.render("register.ejs", { pageCSS: "register.css" });
});

// Patients route
app.get("/patients", (req, res) => {
  res.render("patients.ejs", { pageCSS: "patients.css" });
});

// Records route
app.get("/records", (req, res) => {
  res.render("records.ejs", { pageCSS: "records.css" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`HealthAPI EMR System running on http://localhost:${PORT}`);
});