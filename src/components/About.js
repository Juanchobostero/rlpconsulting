const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-28 cursor-pointer md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div>
                        <b>RLP Consulting</b> es una consultora boutique especializada en la provisión de servicios
                        tecnológicos a empresas en Chile. Sus
                        socios cuentan con más de 20 años de
                        experiencia prestando servicios en Chile y
                        en la Región y han trabajado en firmas como
                        Deloitte Chile, EY Argentina, EY Estados
                        Unidos, EY Colombia y Entel
                    </div>
                    <div>
                        <h3 
                            style={{
                            font: 'bold',
                            color: 'var(--green)'
                        }}
                            className="font-bold mt-10"
                        >
                            Nuestros servicios principales:
                        </h3>
                        <ul>
                            <li>Asignación de Recursos Especializados</li>
                            <li>Software Factory</li>
                            <li>Proceso de Migración hacia la Nube</li>
                            <li>ERP Solutions</li>
                            <li>Networking y Telecomunicaciones</li>
                            <li>Servicios de Soporte Tecnológico Empresarial</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="about rlp"
                        src="./about.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
