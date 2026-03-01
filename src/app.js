import express from "express";
import cors from "cors";
import requestAccessRouter from "./routes/requestAccessRouter.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://billyhol-react.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());

app.use('/api', requestAccessRouter)


app.get("/", (req, res) => {
  res.json({ message: "Wenthura Server is Cooking!!" });
});

export default app;
