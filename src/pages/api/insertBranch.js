import Branch from '../../../models/branches';

import { connect } from '../../../lib/mongodb';
export default async function handler(req, res) {
  await connect();

  try {
    const branch = new Branch({
        name:req.body.name,
        path:req.body.path
    });
    await branch.save();
    res.status(200).json({ message: 'Data inserted' });
    console.log(branch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}
