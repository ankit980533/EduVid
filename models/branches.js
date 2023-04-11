import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  path: {
    type: String,
    required: true,
  },
});

const Branch =mongoose.models.Branch || mongoose.model('Branch', branchSchema);

export default Branch;
