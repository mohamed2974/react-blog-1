import React from 'react';

export default function InfosSec() {
    return (
        <div className="py-40 md:px-20 px-4 bg-gray-100 rounded-lg shadow-md text-center">
            <h2 className="font-bold mb-4 text-5xl">About Me</h2>
            <p className="text-lg mb-6">Hello! I'm a passionate developer with experience in various projects. Feel free to explore my work and download my CV.</p>
            <button className="w-full md:w-fit mb-4 md:mb-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 md:mr-4 ">
                See My Projects
            </button>
            <button className="w-full md:w-fit bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" >
                Download My CV
            </button>
        </div>
    );
};


