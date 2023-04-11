import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
  topicname: {
    type: String,
    required: true,
   
  },
  subjectname:{
type:String,
required:true,
  },
  branchname:{
    type:String,
    required:true,
      },
  path: {
    type: String,
    required: true,
  },
});

const Topic =mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;


