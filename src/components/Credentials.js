const Credentials = () => {
    return (
        <section id="credentials">
            <div className="container mx-auto flex px-10 py-28 cursor-pointer md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-2/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-20 md:mb-0 items-center text-center">
                    <h1 style={{ color: 'var(--blue-one)' }} className="mb-5 sm:text-4xl text-3xl font-medium title-font">
                        Credenciales
                    </h1>
                    <p>
                        Nuestros 3 socios, con más de 20 años de experiencia cada uno, han trabajado con múltiples
                        compañías, tanto nacionales cómo internacionales, que les han permitido obtener know-how
                        del mundo real para enfocar sus conocimientos en la creación de valor. Algunas de nuestras
                        experiencias en Chile fueron:
                    </p>
                    <div className="w-2/2 mx-auto my-auto">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="./credentials.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Credentials
