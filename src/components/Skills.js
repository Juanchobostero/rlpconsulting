const Skills = () => {
    return (
        <section id="skills">
            <div className="container mx-auto flex px-10 py-20 cursor-pointer md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-20 md:mb-0 items-center text-center">
                        <h1 style={{ color: 'var(--blue-one)' }} className="sm:text-4xl text-3xl font-medium title-font">
                            Nuestros Profesionales
                        </h1>
                        <h3 style={{ color: 'var(--blue-two)' }}  className="sm:text-2xl text-3xl font-medium title-font mb-4 text-gray-900">
                            Algunas certificaciones y habilidades
                        </h3>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="./professionals-skills.png"
                        />
                    </div>
            </div>
        </section>
    )
}

export default Skills
