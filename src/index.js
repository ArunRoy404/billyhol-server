import "dotenv/config";
import app from "./app.js";
import connectDb from "./config/db.js";


const port = process.env.PORT || 5000;

// Connect Database
connectDb();

app.listen(port, () => {
  console.log(`🚀 Wenthura app listening on port ${port}`);
});
