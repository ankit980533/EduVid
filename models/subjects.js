import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  subjectname: {
    type: String,
    required: true,
   
  },
  branchname:{
type:String,
required:true,
  },
popular:{
type:Boolean,
default:false,
},
  path: {
    type: String,
    required: true,
  },
});

const Subject =mongoose.models.Subject || mongoose.model('Subject', subjectSchema);

export default Subject;


