import express from 'express';
import Admission from "../models/Admission.js";
const router = express.Router();

// POST admission
router.post('/', async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    const admission = await newAdmission.save();
    res.status(201).json(admission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET admissions by user ID
router.get('/:userId', async (req, res) => {
  try {
    const admissions = await Admission.find({ userId: req.params.userId });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
