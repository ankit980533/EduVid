
import Topic from '../../../models/topics';
import { connect } from '../../../lib/mongodb';
export default async function handler(req, res) {
  await connect();

  try {
    const topic = new Topic({
        topicname:req.body.topicname,
        subjectname:req.body.subjectname,
        branchname:req.body.branchname,
        path:req.body.path
    });
    await topic.save();
    res.status(200).json({ message: 'Data inserted'});
    console.log(topic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}
