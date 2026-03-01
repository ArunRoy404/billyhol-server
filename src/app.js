import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://billyhol-react.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: "Zentro Place Server is Cooking!!" });
});

export default app;
