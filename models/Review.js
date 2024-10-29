import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
