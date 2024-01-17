"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Chargement en cours...</p>;
    }

    return (
        <>
            <head>
                <title>Portfolio</title>
                {/* Assurez-vous que vos polices sont chargées ici */}
            </head>
            <body className='bg-radial-gradient text-white font-sans'>
                {/* Conteneur principal */}
                <div className='flex flex-col lg:flex-row justify-between items-center h-screen px-4 md:px-10 lg:px-20 xl:px-40 mx-auto'>
                    {/* Navigation de gauche en mode desktop */}
                    <div className='nav-left hidden lg:flex flex-col items-center justify-start fixed top-0 left-0 h-screen'>
                        <a
                            href='https://www.linkedin.com/in/lauren-waller-46a95317/'
                            className='nav-left-item my-6 text-lg hover:text-gray-300 font-grandstander'>
                            LI
                        </a>
                        <a
                            href='https://twitter.com/waller_texas'
                            className='nav-left-item my-6 text-lg hover:text-gray-300 font-grandstander'>
                            TW
                        </a>
                        <a
                            href='https://dribbble.com/waller_texas'
                            className='nav-left-item my-6 text-lg hover:text-gray-300 font-grandstander'>
                            DR
                        </a>
                        <div className='w-px h-24 bg-gray-600 my-8'></div>
                        <div className='copyright text-xs'>© 2023</div>
                    </div>

                    {/* Navigation en haut en mode mobile */}
                    <div className='w-full lg:hidden flex justify-between items-center py-4'>
                        <a
                            href='https://www.linkedin.com/in/lauren-waller-46a95317/'
                            className='text-lg hover:text-gray-300 font-grandstander'>
                            LI
                        </a>
                        <a
                            href='https://twitter.com/waller_texas'
                            className='text-lg hover:text-gray-300 font-grandstander'>
                            TW
                        </a>
                        <a
                            href='https://dribbble.com/waller_texas'
                            className='text-lg hover:text-gray-300 font-grandstander'>
                            DR
                        </a>
                    </div>
                    <div className='w-full lg:hidden bg-gray-600 h-px my-4'></div>
                    <div className='hidden lg:hidden text-xs mb-4'>© 2023</div>

                    {/* Section pour Kévin Da Silva et les descriptions */}
                    <div className='flex flex-col items-center lg:items-start lg:w-1/2 space-y-2 lg:space-y-3 xl:space-y-4 mt-8 lg:mt-0 text-center lg:text-left'>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold font-prompt'>
                            Kévin Da Silva
                        </h2>
                        <p className='text-base lg:text-lg xl:text-xl font-prompt'>
                            Product Designer / Webflow Developer / Framer
                            Developer and Partner.
                        </p>
                        <p className='text-base lg:text-lg xl:text-xl font-prompt'>
                            Currently working full-time as a Senior Product
                            Designer at Detail Technologies
                        </p>
                    </div>

                    {/* Conteneur pour les titres H1 */}
                    <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-9 lg:space-y-8 xl:space-y-10 mb-10 lg:mb-0'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer hover:text-gray-300'>
                            Work
                        </h1>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer hover:text-gray-300'>
                            About
                        </h1>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer hover:text-gray-300'>
                            Shop
                        </h1>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer hover:text-gray-300'>
                            Contact
                        </h1>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Dashboard;
