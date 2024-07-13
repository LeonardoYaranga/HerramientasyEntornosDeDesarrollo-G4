import React from "react";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
        <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div class="sm:col-span-2">
                    <a href="#" class="inline-flex items-center">
                        <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" class="h-8 w-8" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">Miaw</span>
                    </a>
                    <div class="mt-6 lg:max-w-xl">
                        <p class="text-sm text-gray-800">
                            El compromiso de Miaw es brindar a los estudiantes una plataforma para adoptar gatitos y asi darles un nuevo hogar.
                            </p>
                    </div>
                </div>

                <div class="flex flex-col gap-2 text-sm">
                    <p class="text-base font-bold tracking-wide text-gray-900">Quiero Adoptar</p>
                    <Link to="/">Home</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/galeria">Galería</Link>
                </div>

                <div>
                    <p class="text-base font-bold tracking-wide text-gray-900">ENCUENTRA A MIAW EN:</p>
                    <div class="flex items-center gap-1 px-2">
                        <a href="#" class="w-full min-w-xl">
                            <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                                class="h-10" />
                        </a>
                        <a class="w-full min-w-xl" href="https://www.youtube.com/watch?v=0KFDWqRZJaQ">
                            <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                                class="h-28" />
                        </a>
                    </div>
                    <p class="text-base font-bold tracking-wide text-gray-900">Contacto</p>
                    <div class="flex">
                        <p class="mr-1 text-gray-800">Email:</p>
                        <a href="#" title="send email">miaw@hotmail.com</a>
                    </div>
                </div>

            </div>

        </footer>
    </div>   
  );
}

export default Footer;
