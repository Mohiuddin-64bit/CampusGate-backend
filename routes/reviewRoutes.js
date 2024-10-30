import express from "express";
import Review from "../models/Review.js";
import College from "../models/College.js";
import User from "../models/User.js";

const router = express.Router();

// POST route to add a new review
router.post("/", async (req, res) => {
  const { userId, collegeId, rating, comment } = req.body;

  try {
    const newReview = new Review({ userId, collegeId, rating, comment });
    await newReview.save();

    // Add the review reference to the user and college
    await User.findByIdAndUpdate(userId, { $push: { reviews: newReview._id } });
    await College.findByIdAndUpdate(collegeId, { $push: { reviews: newReview._id } });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to create review", error });
  }
});

// GET route to fetch reviews for a specific college
router.get("/college/:collegeId", async (req, res) => {
  const { collegeId } = req.params;

  try {
    const reviews = await Review.find({ collegeId }).populate("userId", "name");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews", error });
  }
});

// PUT route to update a review by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { rating, comment },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to update review", error });
  }
});

// DELETE route to delete a review by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Review.findByIdAndDelete(id);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
});

export default router;
