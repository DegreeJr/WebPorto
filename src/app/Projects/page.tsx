"use client";

import ProjectCard from '@/components/ui/ProjectCard';
import { Projects } from '@/constants';
import React from 'react';

const ProjectPage = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-black bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] -mt-50">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
