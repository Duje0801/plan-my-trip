import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Routes imports
import search from "./controller/search";
import results from "./controller/results";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

//Routes
app.get(`/api/search/:id`, search);
app.get(`/api/info/`, results);

//Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
