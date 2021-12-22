const JobModel = () => {
    return (
        <section id="job">
            <div className="container mx-auto flex px-10 py-28 cursor-pointer md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div>
                        <h1 style={{ color: 'var(--blue-one)' }} className="sm:text-4xl text-3xl font-medium title-font mb-5">
                            Modelo de Trabajo
                        </h1>
                        <h3 style={{ color: 'var(--blue-two)' }}  className="sm:text-2xl text-3xl font-medium title-font mb-4 text-gray-900">
                            Asignación de Recursos Especializados
                        </h3>
                        <div className="text-xl" style={{ color: 'var(--blue-one)' }}>
                            Modelo flexible que permite a nuestros clientes
                            contar con profesionales especializados para
                            que trabajen bajo su propia supervisión en una
                            modalidad flexible.
                        </div>
                    </div>
                    </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <h3 
                        style={{
                        font: 'bold',
                        color: 'var(--green)'
                    }}
                        className="sm:text-4xl text-3xl font-medium title-font mb-5"
                    >
                        Beneficios:
                    </h3>
                    <ul style={{ textAlign: 'justify'}}>
                        <li>• Pago bajo demanda</li>
                        <li>• Focalizado en las necesidades específicas</li>
                        <li>• Flexible</li>
                        <li>• Escalable</li>
                        <li>• Adecuada gestión de riesgos laborales</li>
                    </ul>
                </div>
                </div>
        </section>
    )
}

export default JobModel
