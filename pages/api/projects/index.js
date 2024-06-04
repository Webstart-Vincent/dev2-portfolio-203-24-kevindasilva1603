import dbConnect from "@/app/lib/mongoose";
import Project from "@/app/models/Project";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "GET") {
        try {
            const projects = await Project.find({});
            res.status(200).json({ success: true, data: projects });
        } catch (error) {
            console.error("Error fetching projects:", error);
            res.status(500).json({ success: false, error: error.message });
        }
    } else if (req.method === "POST") {
        try {
            const project = await Project.create(req.body);
            res.status(201).json({ success: true, data: project });
        } catch (error) {
            console.error("Error creating project:", error);
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(400).json({
            success: false,
            message: "Invalid request method",
        });
    }
}
