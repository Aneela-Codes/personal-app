import React from 'react'
// import projects_data from '../components/Data/projects_data'

const ProjectCard = ({projects_data: {image, name, link}}) => {
    return (
        <div className="col-lg-6">
        <div className="card">
        <h5>{name} </h5>
            <img src={image} alt="" />
            <div className="card-content">
               
                <a href=" https://aneela-codes.github.io/Blue-Marketing/"><i className="fab fa-github"></i> View In Github</a>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard
