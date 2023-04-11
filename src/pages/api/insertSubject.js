
import Subject from '../../../models/subjects';
import { connect } from '../../../lib/mongodb';
export default async function handler(req, res) {
  await connect();

  try {
    const subject = new Subject({
        subjectname:req.body.subjectname,
        branchname:req.body.branchname,
        path:req.body.path
    });
    await subject.save();
    res.status(200).json({ message: 'Data inserted'});
    console.log(subject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}
