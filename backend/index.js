import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

// 1
const app = express();

// Middleware for parsing json request body
app.use(express.json());

// Middleware for handling cors policy

// Option 1: Allow All Origins With default of cors(*)
// app.use(cors());

// Option 2: Allow Custom Origins
app.use(
  cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// 2
app.listen(PORT, () => {
  console.log(`listening on port:  + ${PORT}`);
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to MongoDB");
    app.get("/", (request, response) => {
      // app.get kısmı normalde yukardaydı ama ben sadece db'ye bağlandığımda çalışsın istedim ondan dolayı buraya taşıdım.
      console.log(request);
      return response.status(200).send("Welcome to project");
    });
  })
  .catch((error) => {
    console.log(error);
  });
