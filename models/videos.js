import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    videoLink: {
        type: String,
        required: true,   
    },
    thumbnailLink: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    topicname:{
        type:String,
        required:true,
    },
    
});

const Vid =mongoose.models.Vid || mongoose.model('Vid', videoSchema);

export default Vid;


