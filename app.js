import express from "express";
import animalsRouter from "./routes/animals.router.js";
import "./db-connect.js";
const app = express();

// BODY PARSER
// => parse incoming JSON body into
// special variable req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World from API!</h1>");
});

// REGISTER ROUTES
app.use("/animals", animalsRouter);

// catch all handler (404)
app.use((req, res, next) => {
  res.status(404).json({
    error: "Route not found, buddy",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
