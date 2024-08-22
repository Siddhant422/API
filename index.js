import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./connectMongoDB.js";
import menuRouter from "./routes/menuRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import orderRouter from './routes/orderRouter.js'
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', menuRouter)
app.use('/api', orderRouter)
app.use('/api', categoryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
