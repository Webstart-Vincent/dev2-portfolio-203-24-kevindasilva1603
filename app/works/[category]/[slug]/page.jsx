import axios from "axios";

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
    try {
        const response = await axios.get("http://localhost:3002/api/projects");
        const projects = response.data.data;

        if (!Array.isArray(projects)) {
            console.error("Data received is not an array:", projects);
            return [];
        }

        const paths = projects.map((project) => ({
            params: {
                category: project.category,
                slug: project.slug,
            },
        }));

        return paths;
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

// Fonction utilitaire pour générer l'URL de Cloudinary
const getCloudinaryUrl = (publicId) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;
};

// Composant de la page
const Page = async ({ params }) => {
    const { category, slug } = params;
    console.log("Category in Page component:", category);
    console.log("Slug in Page component:", slug);

    try {
        const response = await axios.get(
            `http://localhost:3000/api/projects/${slug}`
        );
        const data = response.data.data;

        if (!data) {
            return <h1 className='red'>No data</h1>;
        }

        const imageUrl = getCloudinaryUrl(data.image);

        return (
            <div className='bg-[#1b1b1d] text-white min-h-screen p-12'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-4xl font-bold mb-4'>{data.titre}</h1>
                    <p className='mb-8'>{data.description}</p>
                    <div className='relative w-full h-96 mb-8'>
                        <img
                            src={imageUrl}
                            alt={data.titre}
                            className='w-full h-full object-cover rounded-lg'
                        />
                    </div>
                    <p className='text-gray-400'>Category: {data.category}</p>
                    <p className='text-gray-400'>
                        Created At:{" "}
                        {new Date(data.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching project data:", error);
        return <h1 className='red'>Error loading data</h1>;
    }
};

export default Page;
