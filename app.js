import express from "express";
import bodyParser from "body-parser";
import deportesRoutes from "./routes/deportes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/deportes", deportesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
