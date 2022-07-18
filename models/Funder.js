const mongoose = require('mongoose');

const FunderSchema = new mongoose.Schema({
  // userId: {type: String, required: true},
  funderId: { type: String, required: true },
  funterType: { type: String },
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String },
  funderCategory: { type: String },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pin: { type: Number, required: true },
  nationality: { type: String, required: true },
  contactPerson: { type: String, required: true },
  contactNo: { type: Number, required: true },
  email: { type: String, required: true }, //unique: true
  website: { type: String },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Funder", FunderSchema);
// export default mongoose.models.Funder || mongoose.model("Funder", FunderSchema);