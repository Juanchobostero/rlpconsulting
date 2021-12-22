import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const scrollTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <header className="h-20 shadow-md bg-gray-100 sticky top-0 z-50">
            <div className="container justify-between mx-auto flex flex-wrap p-5 flex-row sm:items-center">
               
                <h3 
                    onClick={scrollTop}
                    style={{ color: 'var(--blue-one)' }} 
                    className="flex title-font font-medium mb-4 cursor-pointer md:mb-4 hover:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </h3>
                
                <nav
                    className="font-bold mb-4 sm:text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 
                    md:border-gray-700 flex flex-nowrap items-center text-base justify-center"
                >
                    <Link
                        to="about"
                        smooth={true}
                        duration={1000}
                        className="flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to="job"
                        smooth={true}
                        duration={1000}
                        className="flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Servicios
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={1000}
                        className="flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Flujo
                    </Link>
                    <Link
                        to="professionals"
                        smooth={true}
                        duration={1000}
                        className="flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Profesionales
                    </Link>
                    <Link
                        to="credentials"
                        smooth={true}
                        duration={1000}
                        className="flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Credenciales
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={1000}
                        className="flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
