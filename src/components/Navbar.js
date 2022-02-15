import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const scrollTop = () => {
        window.scrollTo(0,0);
    }

    const showHideMenu = () => {
        const menu = document.getElementById('menu'); // Menu
        if(menu.classList.contains('block')) {
            menu.classList.remove('block');
            menu.classList.add('hidden');
        } else {
            menu.classList.remove('hidden');
            menu.classList.add('block');
        }
        
    }

    return (
        <header className="md:block h-20 shadow-md bg-gray-100 sticky top-0 z-50">
            <div className="container justify-between mx-auto flex flex-wrap p-5 flex-row sm:items-center">
                
                <nav
                    className="
                        text-base
                        font-bold
                        flex flex-wrap
                        items-center
                        justify-between
                        w-full
                        py-4
                        md:
                        py-0
                        px-4
                        text-lg text-blue-500
                    "
                    /* className="font-bold mb-4 sm:text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 
                    md:border-gray-700 flex flex-nowrap items-center text-base justify-center" */
                >
                    <h3 
                    onClick={scrollTop}
                    style={{ color: 'var(--blue-one)' }} 
                    className="flex title-font font-medium mb-4 cursor-pointer md:mb-4 hover:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </h3>
                    <Link
                        to="about"
                        smooth={true}
                        duration={1000}
                        className="hidden md:flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to="job"
                        smooth={true}
                        duration={1000}
                        className="hidden md:flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Servicios
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={1000}
                        className="hidden md:flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Flujo
                    </Link>
                    <Link
                        to="professionals"
                        smooth={true}
                        duration={1000}
                        className="hidden md:flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Profesionales
                    </Link>
                    <Link
                        to="credentials"
                        smooth={true}
                        duration={1000}
                        className="hidden md:flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Credenciales
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={1000}
                        className="hidden md:flex cursor-pointer mr-5 hover:opacity-50"
                    >
                        Contacto
                    </Link>

                    {/* Hamburger Icon */}
                    <svg
                        xmlns="<http://www.w3.org/2000/svg>"
                        id="menu-button"
                        className="h-8 w-8 mb-5 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={showHideMenu}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div className="hidden p-10 shadow-md bg-gray-100 sticky top-0 z-50 w-full md:hidden md:items-center md:w-auto " id="menu">
                    <ul
                        className="
                        text-lg text-blue-500
                        pt-4
                        md:flex
                        md:justify-between
                        md:pt-0"
                    >
                        <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={1000}
                            className="md:flex cursor-pointer ml-3 p-5 hover:opacity-50"
                        >
                            Nosotros
                        </Link>
                        </li>
                        <li>
                            <Link
                                to="job"
                                smooth={true}
                                duration={1000}
                                className="md:flex cursor-pointer ml-3 p-5 hover:opacity-50"
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={1000}
                                className="md:flex cursor-pointer ml-3 p-5 hover:opacity-50"
                        >
                            Flujo
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="professionals"
                                smooth={true}
                                duration={1000}
                                className="md:flex cursor-pointer ml-3 p-5 hover:opacity-50"
                        >
                            Profesionales
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="credentials"
                                smooth={true}
                                duration={1000}
                                className="md:flex cursor-pointer ml-3 p-5 hover:opacity-50"
                            >
                            Credenciales
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={1000}
                                className="md:flex cursor-pointer ml-3 p-5 hover:opacity-50"
                            >
                            Contacto
                            </Link>
                        </li>
                    </ul>
        </div>
                </nav>
                
            </div>
        </header>
    )
}

export default Navbar
