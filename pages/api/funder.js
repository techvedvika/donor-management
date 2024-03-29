import Funder from "../../models/Funder";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) =>{
  if(req.method == 'POST'){
    console.log(req.body)
    let f = new Funder(req.body)
    await f.save()
    res.status(200).json({success: "Success"})
  }else{
    res.status(400).json({error: "This method is not allowed"})
  }
}

export default connectDb(handler)