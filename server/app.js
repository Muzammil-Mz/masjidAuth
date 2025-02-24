import express from "express";
import config from "config";
import publicRouter from "./controllers/public/index.js";
import authMiddleware from "./controllers/middlewares/auth.js";
import userRouter from "./controllers/users/index.js";
import masjidRouter from "./controllers/masjid/index.js"
import "./utils/dbConnect.js";

const app = express();
app.use(express.json());
const PORT = config.get("PORT");

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ msg: "HEllow world" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.use("/api/public", publicRouter);
app.use(authMiddleware);
app.use("/api/private/users",userRouter)
app.use("/api/private/masjids",masjidRouter)
app.listen(PORT, () => {
  console.log(`Server is up and listening ${PORT}`);
});
