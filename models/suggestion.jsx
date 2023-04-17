import mongoose  from "mongoose";
const suggestionSchema = new mongoose.Schema({
   message: {
    type:String,
    required:true,
   }
});
 
const Suggestionbox = mongoose.models.Suggestionbox || mongoose.model('Suggestionbox',suggestionSchema)

export default Suggestionbox;

