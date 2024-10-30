import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  admissionDates: { type: String, required: true },
  events: { type: [String], required: true },
  researchHistory: { type: [String] },
  sports: { type: [String] },
  image: { type: String },
  ratings: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const College = mongoose.models.College || mongoose.model('College', collegeSchema);

export default College;