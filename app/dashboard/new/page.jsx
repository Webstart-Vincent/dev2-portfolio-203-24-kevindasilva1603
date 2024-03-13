"use client";
import { useRouter } from "next/navigation";

const NewProject = () => {
    const router = useRouter();
    const handleSubmit = (event) => {
        event.preventDefault();
        router.push("/dashboard"); // Correction mineure de "dashbord" en "dashboard"
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-6 p-4 bg-blue-50 rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold text-center text-blue-900'>
                Créer un nouveau projet
            </h1>
            <input
                type='text'
                placeholder='Titre du projet'
                required
                className='p-3 rounded-md border-2 border-blue-300 focus:border-blue-500 focus:outline-none'
            />
            <input
                type='text'
                placeholder='Slug du projet'
                required
                className='p-3 rounded-md border-2 border-blue-300 focus:border-blue-500 focus:outline-none'
            />
            <textarea
                placeholder='Texte du projet'
                required
                className='p-3 h-32 rounded-md border-2 border-blue-300 focus:border-blue-500 focus:outline-none'
            />
            <input
                type='text'
                placeholder='Description SEO du projet'
                required
                className='p-3 rounded-md border-2 border-blue-300 focus:border-blue-500 focus:outline-none'
            />
            <input
                type='text'
                placeholder='Title SEO du projet'
                required
                className='p-3 rounded-md border-2 border-blue-300 focus:border-blue-500 focus:outline-none'
            />
            <button
                type='submit'
                className='p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
                Créer le projet
            </button>
        </form>
    );
};

export default NewProject;
