import Suggestionbox from "../../../models/suggestion";
import { connect } from "../../../lib/mongodb";

export default async function handler(req, res){
    await connect();
console.log("hiiiii");
   try{
    console.log("hii");
    const suggest = new Suggestionbox({
        message:req.body.message
    });

await suggest.save();
    res.status(200).json({ message: 'Data inserted'});
    console.log(suggest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
// function Hii() {
//     console.log("hii");
// }
// export default Hii;