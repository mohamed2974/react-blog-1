

const Services = [
    ["Service One", "Description of service one."],
    ["Service Two", "Description of service two."],
    ["Service Three", "Description of service three."]
]

export default function ServicesSec(){
    return (
        <section className="py-20 px-4 md:px-20 bg-gray-100 container shadow-2xl">
            <div className="container mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Services.map((service, index) => (
                        <div key={index} className='service-item p-6 bg-white rounded-lg shadow-md'>
                            <h3 className="text-xl font-semibold mb-4">{service[0]}</h3>
                            <p className="text-gray-600">{service[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

