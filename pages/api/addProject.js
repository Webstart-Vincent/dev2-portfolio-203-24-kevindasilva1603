import clientPromise from "@/app/lib/mongoose";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const client = await clientPromise;
        const db = client.db("portfolio");

        const { title, description, github, website, image } = req.body;

        try {
            const result = await db.collection("works").insertOne({
                title,
                description,
                github,
                website,
                image,
                createdAt: new Date(),
            });
            res.status(201).json({ success: true, data: result.ops[0] });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Erreur lors de l’ajout du projet",
                error,
            });
        }
    } else {
        res.status(405).json({
            success: false,
            message: "Méthode non autorisée",
        });
    }
}
