const mongoose = require('mongoose');

const ExpensesSchema = new mongoose.Schema({
  selectProject: { type: String, required: true },
  pro: { type: String },
  showAmt: { type: String },
  VendorName: { type: String },
  InvoiceNo: { type: String },
  DateOfInvoice: { type: String },
  InvoiceAmount: { type: String },
  ExpenseDec: { type: String },
  expenseHead: { type: String },
  programmeName: { type: String },
  expenseBy: { type: String },
  uploadImage: { type: String },
  typeOfPayment: { type: String },
  dateOfPayment: { type: String },
  paidBy: { type: String },
  paidAmount: { type: String },
  modeOfPayment: { type: String },
}, { timestamps: true });


mongoose.models = {}
export default mongoose.model("ExpensesModels", ExpensesSchema);