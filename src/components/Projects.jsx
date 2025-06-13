import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import './Projects.css';

const Projects = () => {
  const [largeProject, setLargeProject] = useState('');
  const [smallProjects, setSmallProjects] = useState([]);

  useEffect(() => {
    const files = ['project1.md', 'project2.md', 'project3.md'];

    const loadMarkdown = async (file) => {
      const res = await fetch(`/projects/${file}`);
      const text = await res.text();
      return marked.parse(text);
    };

    const loadAll = async () => {
      const large = await loadMarkdown(files[0]);
      const small = await Promise.all(files.slice(1).map(file => loadMarkdown(file)));
      setLargeProject(large);
      setSmallProjects(small);
    };

    loadAll();
  }, []);

  return (
    <section id="projects">
      <h2>Selected Work</h2>
      <div className="project-grid">
        <div className="project-large" dangerouslySetInnerHTML={{ __html: largeProject }} />
        <div className="project-small-container">
          {smallProjects.map((html, index) => (
            <div className="project-small" key={index} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
