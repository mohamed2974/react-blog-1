import React from 'react';
import Card from '../utils/Card';

const projects = [
    // {
    //     title: 'Project One',
    //     description: 'This is a brief description of Project One.',
    //     imageUrl: 'path/to/project-one-image.jpg',
    //     demoLink: 'https://live-demo-link.com',
    //     repoLink: 'https://github.com/username/project-one'
    // },
    // Add more projects as needed
];

export default function ProjectsSec() {
    return (
        <section className="select-none bg-gray-100 shadow-2xl flex justify-center items-center">
            <div>
                {/* titel und beschreibung */}
                <div className='mb-8 text-center'>
                    <h2 className="text-3xl font-bold py-4">Meine Projekte</h2>
                    <p className='text-xl md:w-8/12 mx-auto text-slate-700'>Eine Auswahl meiner bisherigen Arbeiten. Klicke auf die Links, um mehr zu erfahren!</p>
                </div>
                {/* projekte */}
                {projects.length > 0 ? 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Projects /> 
                </div>
                : <NoProjects />}
            </div>
        </section>
    );
};

//supcom ######################### PROJEKTS ######################### //
function Projects(){
    return (
    projects.map((project, index) => (
        <Card img={project.imageUrl} titel={project.title} description={project.description} links={[
            {name: 'Live Demo', link: `${project.demoLink}`, linkTarget: '_blank'},
            {name: 'GitHub', link: `${project.repoLink}`, linkTarget: '_blank'}
        ]}/>
    ))
    )
}

//supcom ######################### NO PROJEKTS ######################### //
function NoProjects() {
    return (
        <div className="flex justify-center items-center text-center py-32 px-10 bg-blue-50 border border-blue-200 rounded-lg shadow-lg">
            <div className="space-y-4">
                <div className="text-4xl font-semibold text-gray-800">🚧</div> {/* Beispiel-Icon */}
                <p className="text-xl text-gray-700 font-medium">
                    <span className="text-blue-600">Projekte kommen bald!</span> Meine neuesten Projekte werden bald veröffentlicht. Danke für dein Interesse!
                </p>
                <div className="text-lg text-gray-500 italic">
                    Bleibt dran für spannende Updates!
                </div>
            </div>
        </div>
    );
}