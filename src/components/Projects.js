const Projects = () => {
    return (
        <section id="projects">
            <div className="container mx-auto flex px-10 py-20 cursor-pointer md:flex-row flex-col items-center">
                <div className="w-full text-justify lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 style={{ color: 'var(--blue-one)' }} className="sm:text-4xl text-3xl font-medium title-font">
                        Proyectos
                    </h1>
                </div>
                <div className="w-full text-justify lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./job-model.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
