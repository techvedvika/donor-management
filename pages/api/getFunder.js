// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Funder from "../../models/Funder"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res)=>{
  let funders = await Funder.find()
  res.status(200).json({ funders })
}

export default connectDb(handler);