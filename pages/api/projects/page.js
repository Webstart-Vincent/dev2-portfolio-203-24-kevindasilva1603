import dbConnect from '@/app/lib/mongoose'; // Correct: dans 'lib'
import Project from '@/app/models/Project'; // Correct: dans 'models'

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { titre, slug, description, image, github, website, description_seo, titre_seo } = req.body;

    try {
      const newProject = new Project({
        titre,
        slug,
        description,
        image,
        github,
        website,
        description_seo,
        titre_seo,
        createdAt: new Date(),
      });

      const savedProject = await newProject.save();

      res.status(201).json({ success: true, data: savedProject });
    } catch (error) {
      console.error('Erreur lors de l’ajout du projet', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l’ajout du projet', error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }
}