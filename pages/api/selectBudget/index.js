import SelectBudgetModels from "../../../models/SelectBudgetModels";
import connectDb from "../../../middleware/mongoose";

// connectDb();

const handler = async (req, res) =>{
  if(req.method == 'POST'){
    // console.log(req.body)
    let b = new SelectBudgetModels(req.body)
    await b.save()
    res.status(200).json({success: "Success"})
  }
  else if(req.method == 'GET'){
    let selectBudget = await SelectBudgetModels.find()
  res.status(200).json({ selectBudget })
  }else{
    res.status(400).json({error: "This method is not allowed"})
  }
  
}

export default connectDb(handler)