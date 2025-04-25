import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, desc, workpage, code, back, height }) => {
    return (
        <div className="project-card" style={{ height }}>
            <div className="project-card-inner" onClick={() => workpage && window.open(workpage, '_blank')}>
                <h4>{name}</h4>
                {desc && <p className="project-desc">{desc}</p>}
                <ul>
                    {workpage && <li><a href={workpage} target="_blank" rel="noreferrer">👉 WorkPage</a></li>}
                    {code
                        ? <li><a href={code} target="_blank" rel="noreferrer">👉 View code on GitHub</a></li>
                        : <li><i>Code available on demo only</i></li>}
                    {back && <li><a href={back} target="_blank" rel="noreferrer">👉 Backend code</a></li>}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;