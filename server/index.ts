import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
