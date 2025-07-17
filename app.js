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
    res.render("home", { pageCSS: "home.css" });
});

// Patients route
app.get("/patients", (req, res) => {
  res.render("patients.ejs");
});

// Records route
app.get("/records", (req, res) => {
  res.render("records.ejs");
});

// Start the server
app.listen(PORT, () => {
  console.log(`HealthAPI EMR System running on http://localhost:${PORT}`);
});