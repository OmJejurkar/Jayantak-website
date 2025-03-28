import React, { FC } from 'react';
import SPPU from "../images/SPPU.jpg";
import Rayat from "../images/Rayat.jpg";
import Punefest from "../images/Punefest.jpg";
import Yashwantrao from "../images/Yashwantrao.jpg";

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
}

const Project: FC<ProjectProps> = ({
    title,
    description,
    technologies,
    imageUrl,
    githubUrl
}) => {
    if (!title || !description) {
        return <div>Invalid project data</div>;
    }

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md mb-4">
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-64 object-cover rounded mb-4"
                />
            )}
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap mt-4">
                {technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-gray-200 text-gray-800 py-1 px-2 rounded mr-2 mb-2 text-sm">
                        {tech}
                    </span>
                ))}
            </div>
            {githubUrl && (
                <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition duration-300"
                >
                    View Project Details
                </a>
            )}
        </div>
    );
};

// Sample project data with more detailed information
const projectsData = [
    {
        title: "Political Campaign 2023",
        description: "Managed comprehensive political campaign including digital strategy, event organization, and media coordination.",
        technologies: ["Event Management", "Digital Marketing", "Campaign Strategy"],
        imageUrl: Yashwantrao,
        githubUrl: "#"
    },
    {
        title: "Corporate Event - SPPU",
        description: "Organized and executed large-scale corporate event for Savitribai Phule Pune University with full logistics and planning.",
        technologies: ["Event Planning", "Logistics", "Corporate Communications"],
        imageUrl: SPPU,
        githubUrl: "#"
    },
    {
        title: "Rayat Educational Campaign",
        description: "Developed and implemented educational awareness campaign for Rayat institution with multimedia content strategy.",
        technologies: ["Education", "Content Strategy", "Campaign Management"],
        imageUrl: Rayat,
        githubUrl: "#"
    },
    {
        title: "Pune Fest Management",
        description: "Successfully managed and coordinated the Pune Fest, including vendor management and event programming.",
        technologies: ["Festival Management", "Event Coordination", "Marketing"],
        imageUrl: Punefest,
        githubUrl: "#"
    }
];

// Component to render the list of projects
const ProjectList: FC = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Complete Portfolio</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our full range of successful projects and campaigns that showcase our expertise in event management, political campaigns, and creative services.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <Project 
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            imageUrl={project.imageUrl}
                            githubUrl={project.githubUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
