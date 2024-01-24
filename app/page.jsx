// app/page.jsx

import Image from "next/image";

export default function Home() {
    if (typeof window !== "undefined") {
        // Exécutez le code client ici avec useEffect ou toute autre logique côté client
        window.addEventListener("DOMContentLoaded", (event) => {
            var dataText = [
                "Kévin Da Silva.",
                "Web Developer.",
                "Portfolio.",
                "Thanks!",
            ];

            function typeWriter(text, i, fnCallback) {
                if (i < text.length) {
                    document.querySelector("h2").innerHTML =
                        text.substring(0, i + 1) +
                        '<span aria-hidden="true"></span>';

                    setTimeout(function () {
                        typeWriter(text, i + 1, fnCallback);
                    }, 100);
                } else if (typeof fnCallback == "function") {
                    setTimeout(fnCallback, 700);
                }
            }

            function startTextAnimation(i) {
                if (typeof dataText[i] == "undefined") {
                    setTimeout(function () {
                        startTextAnimation(0);
                    }, 20000);
                } else {
                    typeWriter(dataText[i], 0, function () {
                        startTextAnimation(i + 1);
                    });
                }
            }
            startTextAnimation(0);
        });
    }
    return (
        <>
            <head>
                <title>Portfolio</title>
            </head>
            <body className='bg-[#1b1b1d]  text-body-text'>
                <div className='flex flex-col lg:flex-row justify-between items-center h-screen px-4 md:px-10 lg:px-20 xl:px-40 mx-auto'>
                    <div className='nav-left hidden lg:flex flex-col items-center justify-start fixed top-0 left-0 h-screen'>
                        <a
                            href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
                            className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text '>
                            LI
                        </a>
                        <a
                            href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
                            className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text'>
                            TW
                        </a>
                        <a
                            href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
                            className='nav-left-item my-6 text-lg bg-body-bg font-grandstander body-bg text-body-text'>
                            DR
                        </a>
                        <div className='w-px h-24 bg-gray-600 my-8'></div>
                        <div className='copyright text-xs text-body-text'>
                            © 2023
                        </div>
                    </div>

                    <div className='w-full lg:hidden flex justify-between items-center py-4'>
                        <a
                            href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
                            className='text-lg bg-body-bg font-grandstander text-body-text'>
                            LI
                        </a>
                        <a
                            href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
                            className='text-lg bg-body-bg font-grandstander text-body-text'>
                            TW
                        </a>
                        <a
                            href='https://www.linkedin.com/in/k%C3%A9vin-da-silva-069755258/'
                            className='text-lg bg-body-bg font-grandstander text-body-text'>
                            DR
                        </a>
                    </div>
                    <div className='w-full lg:hidden bg-gray-600 h-px my-4'></div>
                    <div className='hidden lg:hidden text-xs mb-4 text-body-text'>
                        © 2023
                    </div>

                    <div className='flex flex-col items-center lg:items-start lg:w-1/2 space-y-2 lg:space-y-3 xl:space-y-4 mt-8 lg:mt-0 text-center lg:text-left'>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold font-prompt text-body-text'>
                            Kévin Da Silva
                        </h2>
                        <p className='text-base lg:text-lg xl:text-xl font-prompt text-body-text'>
                            Product Designer / Webflow Developer / Framer
                            Developer and Partner everything dont ask.
                        </p>
                        <p className='text-base lg:text-lg xl:text-xl font-prompt text-body-text'>
                            Currently working full-time as a BOSS yeahhh
                            Designer at Detail Technologies
                        </p>
                    </div>

                    <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-9 lg:space-y-8 xl:space-y-10 mb-10 lg:mb-0'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text'>
                            Work
                        </h1>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text'>
                            About
                        </h1>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text'>
                            Shop
                        </h1>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold font-prompt cursor-pointer bg-body-bg text-body-text'>
                            Contact
                        </h1>
                    </div>
                </div>
            </body>
        </>
    );
}
