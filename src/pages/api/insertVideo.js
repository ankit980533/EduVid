import Vid from '../../../models/videos';
import { connect } from '../../../lib/mongodb';
export default async function handler(req, res) {
  await connect();

  try {
    //console.log("lkkjhh",typeof(req.body.videoLink));
    //console.log("test", req.body);
    const video = new Vid({
        videoLink:req.body.videoLink,
        thumbnailLink:req.body.thumbnailLink,
        title:req.body.title,
        topicname:req.body.topicname,
    });
    //console.log(video);
    await video.save();
    res.status(200).json({ message: 'Data inserted'});
    console.log(video);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }

}
