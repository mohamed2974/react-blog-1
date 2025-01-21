import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const ToolsSec = () => {
    return (
        <section className="py-20 md:px-20 px-4 bg-gray-100 shadow-2xl">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Skills & Tech-Stack</h2>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="m-4 text-center">
                        <FaReact className="text-6xl text-blue-500 mx-auto" />
                        <p className="mt-2 text-lg">React</p>
                    </div>
                    <div className="m-4 text-center">
                        <FaNodeJs className="text-6xl text-green-500 mx-auto" />
                        <p className="mt-2 text-lg">Node.js</p>
                    </div>
                    <div className="m-4 text-center">
                        <SiMongodb className="text-6xl text-green-600 mx-auto" />
                        <p className="mt-2 text-lg">MongoDB</p>
                    </div>
                    <div className="m-4 text-center">
                        <FaDatabase className="text-6xl text-yellow-500 mx-auto" />
                        <p className="mt-2 text-lg">SQL</p>
                    </div>
                    <div className="m-4 text-center">
                        <SiTailwindcss className="text-6xl text-teal-500 mx-auto" />
                        <p className="mt-2 text-lg">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSec;