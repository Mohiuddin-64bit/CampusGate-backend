import mongoose, { model, Schema } from 'mongoose';

const collegeSchema = new Schema({
  name: { type: String, required: true },
  admissionDates: { type: String, required: true },
  events: { type: [String], required: true },
  researchHistory: { type: [String] },
  sports: { type: [String] },
  image: { type: String },
  ratings: { type: Number, default: 0 },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

const College = model('College', collegeSchema);


export default College;