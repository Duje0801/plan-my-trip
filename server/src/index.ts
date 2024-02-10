import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";

//Routes imports
import search from "./controller/search";
import trip from "./controller/trip";
import wrongUrl from "./controller/wrongUrl";

const app = express();
app.use(express.json({ limit: `10kb` }));

dotenv.config();

//Additional security (headers)
app.use(helmet());

//Rate limiter
const limiter = rateLimit({
  max: 100,
  windowMs: 3600000,
  message:
    `Too many requests from this IP address, please try again in 60 minutes.`,
});
app.use(limiter);

//Allows access from other domains (front-end)
app.use(cors());

//Routes
app.get(`/api/search/:id`, search);
app.get(`/api/trip/`, trip);

//If route does not exist
app.all(`*`, wrongUrl);

//Connecting to server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
