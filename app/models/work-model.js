import mongoose from 'mongoose';

const WorkSchema = new mongoose.Schema({
  title: String,
  slug: String,
  category: String,
  description: String,
  imgId: String,
}, { timestamps: true });

export default mongoose.models.Work || mongoose.model('Work', WorkSchema);
