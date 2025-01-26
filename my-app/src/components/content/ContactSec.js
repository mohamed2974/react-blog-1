import React, { useEffect } from 'react';

export default function ContactSec() {
     // useEffect für die Initialisierung des Sternchens
    useEffect(() => {
        // Alle Inputs mit required finden und den Stern hinzufügen
        const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
        
        requiredInputs.forEach(input => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label) {
                if (!label.querySelector('.required-star')) {
                    const star = document.createElement('span');
                    star.style.color = 'red';
                    star.textContent = ' *';
                    star.classList.add('required-star');  // Eine Klasse hinzufügen, um es später zu identifizieren
                    label.appendChild(star);
                }
            }
        });
    }, [ ]);

    return (
        <section className="bg-gray-100 shadow-2xl select-none">
            <div className="mx-auto">
                <div className='text-center mb-8'>
                    <h2 className="text-3xl font-bold py-4">Schreib mir</h2>
                    <p className='text-xl md:w-8/12 mx-auto text-slate-700'>
                    Hast du Fragen, Anregungen oder möchtest mit mir zusammenarbeiten? Fülle einfach das Formular aus, und ich melde mich schnellstmöglich bei dir!
                    </p>
                </div>
                <form className=" mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between flex-wrap">
                    <div className='w-full md:w-[40%]' >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Dein Vor- und Nachname"
                                required
                                minLength={3}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            E-Mail-Adresse
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="deinname@email.de"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6 w-full md:w-[60%] md:pl-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Nachricht
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-screen"
                            id="message"
                            rows="10"
                            placeholder="Deine Nachricht..."
                            required
                            minLength={20}
                        ></textarea>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Nachricht senden
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};


