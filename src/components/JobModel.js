const JobModel = () => {
    return (
        <section id="job">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <svg style={{ fill: 'var(--blue-one)' }} xmlns="http://www.w3.org/2000/svg" className="inline-block mb-4 h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <h1 style={{ color: 'var(--blue-one)' }} className="sm:text-4xl text-3xl font-medium title-font mb-4">
                    Modelo de Trabajo
                </h1>
                <h3 style={{ color: 'var(--blue-two)' }}  className="sm:text-2xl text-3xl font-medium title-font mb-4 text-gray-900">
                    Asignación Recursos Especializados
                </h3>
                <div className="text-xl" style={{ color: 'var(--blue-one)' }}>
                    Modelo flexible que permite a nuestros clientes
                    contar con profesionales especializados para
                    que trabajen bajo su propia supervisión en una
                    modalidad flexible.
                </div>
                <div className="text-xl">
                        <h3 
                            style={{
                            font: 'bold',
                            color: 'var(--green)'
                        }}
                            className="font-bold mt-10"
                        >
                            Beneficios:
                        </h3>
                        <ul style={{ textAlign: 'center'}}>
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
