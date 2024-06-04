import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    github: { type: String, required: true },
    website: { type: String, required: false },
    description_seo: { type: String, required: false },
    titre_seo: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});

const Project =
    mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
