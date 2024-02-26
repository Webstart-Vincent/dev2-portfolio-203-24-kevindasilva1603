"use clients";
import "./globals.css";

export default function Work() {
    return (
        <div className='bg-[#0d0d0d] text-gray-300 min-h-screen p-5'>
            <div className='max-w-6xl mx-auto rounded-lg bg-[#1a1a1a] shadow-2xl p-8 md:p-12'>
                <h1 className='text-5xl md:text-6xl font-bold text-gray-100 mb-6'>
                    🌤 Projet Météo
                </h1>
                <p className='text-lg md:text-xl font-grandstander text-gray-300 mb-8'>
                    Découvrez la météo dans différentes capitales du monde avec
                    une interface épurée et une expérience utilisateur
                    conviviale.
                </p>

                <div className='border-l-4 border-gray-700 pl-4 mb-8'>
                    <h2 className='text-3xl font-bold text-gray-100 mt-5 mb-3'>
                        📜 Table des Matières
                    </h2>
                    <ul className='list-disc list-inside space-y-2 text-gray-400'>
                        <li>Description</li>
                        <li>Fonctionnalités</li>
                        <li>Technologies</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='my-8'>
                    <h2 className='text-3xl font-bold text-gray-100 mt-5 mb-3'>
                        🔍 Description
                    </h2>
                    <p className='mb-8 text-gray-400'>
                        Ce projet vise à afficher des prévisions météorologiques
                        précises pour différentes capitales du monde, en
                        utilisant l'API Weather pour récupérer les données en
                        temps réel.
                    </p>
                </div>

                <a
                    href='https://weatherappterre.netlify.app/'
                    className='inline-block px-6 py-3 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out font-bold rounded-md'>
                    Visitez le site du projet Météo
                </a>

                <div className='my-8'>
                    <h2 className='text-3xl font-bold text-gray-100 mt-5 mb-3'>
                        ✨ Fonctionnalités
                    </h2>
                    <ul className='list-disc list-inside space-y-2 text-gray-400'>
                        <li>Récupération et affichage des données météo.</li>
                        <li>Interface utilisateur intuitive et réactive.</li>
                        <li>
                            Intégration avec l'API Weather pour des données en
                            temps réel.
                        </li>
                    </ul>
                </div>

                <div className='my-8'>
                    <h2 className='text-3xl font-bold text-gray-100 mt-5 mb-3'>
                        🛠 Technologies
                    </h2>
                    <ul className='list-disc list-inside space-y-2 text-gray-400'>
                        <li>HTML, CSS, JavaScript</li>
                        <li>
                            Framework Tailwind CSS pour un design responsive
                        </li>
                        <li>API Weather pour les données météorologiques</li>
                    </ul>
                </div>

                <div className='my-8'>
                    <h2 className='text-3xl font-bold text-gray-100 mt-5 mb-3'>
                        📬 Contact
                    </h2>
                    <p className='text-gray-400'>
                        Pour toute question ou discussion sur ce projet,
                        n'hésitez pas à me contacter.
                    </p>
                    <p className='mt-4'>
                        <a
                            href='mailto:exemple@domaine.com'
                            className='inline-block px-6 py-3 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out font-bold rounded-md'>
                            Envoyer un email
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
