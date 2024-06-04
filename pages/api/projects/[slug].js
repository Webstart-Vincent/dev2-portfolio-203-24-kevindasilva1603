import dbConnect from "@/app/lib/mongoose";
import Project from "@/app/models/Project";

export default async function handler(req, res) {
    await dbConnect();

    const { slug } = req.query;

    if (req.method === "GET") {
        try {
            const project = await Project.findOne({ slug });
            if (!project) {
                return res
                    .status(404)
                    .json({ success: false, message: "Project not found" });
            }
            return res.status(200).json({ success: true, data: project });
        } catch (error) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Error fetching project",
                    error: error.message,
                });
        }
    } else {
        return res
            .status(405)
            .json({ success: false, message: "Method not allowed" });
    }
}
