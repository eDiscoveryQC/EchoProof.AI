import { withRole } from '@/lib/auth/withRole';

export default withRole(['admin', 'uploader'], async (req, res) => {
  // Your project creation logic here
  res.status(200).json({ message: 'Project created successfully' });
});