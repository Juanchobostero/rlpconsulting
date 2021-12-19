import React from 'react';

const Top = () => {
    return (
        <section id="top">
            <div className="container mx-auto flex px-10 py-20 cursor-pointer md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-20 items-center text-center">
                    <h1 className="title-font sm:text-6xl mb-2 font-medium">
                        <span style={{ color: 'var(--blue-one)' }}>RLP </span><span style={{ color: 'var(--green)' }}>Consulting</span>
                    </h1>
                    <h1 style={{ color: 'var(--green)' }} className="mb-4 leading-relaxed text-3xl">
                        Systems, IT y Cloud Solutions    
                    </h1>
                    <h1 style={{ color: 'var(--blue-two)' }} className="mb-8 font-semibold leading-relaxed text-3xl">
                        Ayudando en la creación de valor y en la gestión de riesgos    
                    </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./rlp.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Top;
