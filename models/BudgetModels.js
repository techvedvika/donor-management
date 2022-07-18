const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  selectFunder: { type: String, required: true },
  project: { type: String },
  total_amt: { type: String },

  purchasing: [{
    selectProgram: { type: String, required: true },
    selectProgramItem: { type: String, required: true },
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    unit: { type: String, required: true },
    rate: { type: Number, required: true },
    amt: { type: Number, required: true },
    rem: { type: String },
  }]
}, { timestamps: true });


mongoose.models = {}
export default mongoose.model("BudgetModels", BudgetSchema);