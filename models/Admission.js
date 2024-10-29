import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  dob: { type: Date },
  image: { type: String },
  collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Admission = mongoose.model('Admission', admissionSchema);
export default Admission;
