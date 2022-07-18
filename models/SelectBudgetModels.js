const mongoose = require('mongoose');


const SelectBudgetSchema = new mongoose.Schema({
  pgName: {
    type: String,
    required: true
  }
}, { timestamps: true });


mongoose.models = {}
export default mongoose.model("SelectBudget", SelectBudgetSchema);