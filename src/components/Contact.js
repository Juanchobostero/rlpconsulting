const Contact = () => {
    return (
        <section id="contact">
            <div className="container mx-auto flex px-10 py-auto cursor-pointer md:flex-row flex-col items-center">
                <div className="w-full content-center py-20 lg:flex-grow md:w-2/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-20 md:mb-0 items-center text-center">
                    <h3 className="title-font sm:text-4xl mb-2 font-medium">
                        <span style={{ color: 'var(--blue-one)' }}>RLP </span><span style={{ color: 'var(--green)' }}>Consulting</span>
                    </h3>
                    <h3 style={{ color: 'var(--blue-two)' }}  className="text-xl sm:text-2xl font-medium title-font mb-4 text-gray-900">
                        Contactos
                    </h3>
                    <h4 className="text-xl text-xl font-medium title-font mb-4 text-gray-900">
                        Matias Romano, MBA Universidad de Chile
                    </h4>
                    <h4 className="text-xl text-xl font-medium title-font mb-4 text-gray-900">
                        Teléfono: (56-9) 63548362
                    </h4>
                    <h4 className="text-xl text-xl font-medium title-font mb-4 text-gray-900">
                        Email: matias.romano@rlpconsulting.cl
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Contact
