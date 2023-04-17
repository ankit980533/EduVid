import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    videoLink: {
        type: String,
        required: true,   
    },
    thumbnailLink: {
        type: String,
    },
    topicname: {
        type: String,
        required: true,
    },
    subjectname:{
        type:String,
        required:true,
    },
    path: {
        type: String,
        required: true,
    },
});

const Vid =mongoose.models.Vid || mongoose.model('Vid', videoSchema);

export default Vid;


