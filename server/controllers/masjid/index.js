import masjidModel from "../../Models/Masjid/Masjid.js";
import express from "express";
const router = express.Router();

router.get("/getall", async (req, res) => {
  try {
    let getall = await masjidModel.find({});
    res.status(200).json(getall);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/getone/:id", async (req, res) => {
  try {
    let params = req.params.id;
    let getone = await masjidModel.findOne({ _id: params });
    res.status(200).json(getone);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    let userinput = req.body;
    let params = req.params.id;
    await masjidModel.updateOne({ _id: params }, { $set: userinput });
    res.status(200).json({ msg: "data updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/deleteone/:id", async (req, res) => {
  try {
    let params = req.params.id;
    let deleted = await masjidModel.deleteOne({ _id: params });
    res.status(200).json({msg:"deleted"});
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/deleteall", async (req, res) => {
  try {
    let del = await masjidModel.deleteMany({});
    res.status(200).json({ del });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/addmasjid", async (req, res) => {
  try {
    let add = req.body;
    await masjidModel.create(add);
    console.log(add);
    res.status(200).json({ msg: "masjid created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
