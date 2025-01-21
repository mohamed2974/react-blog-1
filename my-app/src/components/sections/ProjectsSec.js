import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        imageUrl: 'path/to/project-one-image.jpg',
        demoLink: 'https://live-demo-link.com',
        repoLink: 'https://github.com/username/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        imageUrl: 'path/to/project-two-image.jpg',
        demoLink: 'https://live-demo-link.com',
        repoLink: 'https://github.com/username/project-two'
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        imageUrl: 'path/to/project-two-image.jpg',
        demoLink: 'https://live-demo-link.com',
        repoLink: 'https://github.com/username/project-two'
    },
    {
        title: 'Project Four',
        description: 'This is a brief description of Project Four.',
        imageUrl: 'path/to/project-two-image.jpg',
        demoLink: 'https://live-demo-link.com',
        repoLink: 'https://github.com/username/project-two'
    },
    {
        title: 'Project Five',
        description: 'This is a brief description of Project Five.',
        imageUrl: 'path/to/project-two-image.jpg',
        demoLink: 'https://live-demo-link.com',
        repoLink: 'https://github.com/username/project-two'
    },
    // Add more projects as needed
];

const ProjectsSec = () => {
    return (
        <section className="py-20 bg-gray-100 container px-4 md:px-20 shadow-2xl">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Meine Projekte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSec;