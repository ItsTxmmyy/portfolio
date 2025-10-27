import React, { useState } from 'react'
import JuniperModal from './projectmodals/juniper.jsx'
import MelodifyModal from './projectmodals/melodify.jsx'
import DearDiaryModal from './projectmodals/deardiary.jsx'
import CareerQuestModal from './projectmodals/careerquest.jsx'


const Projects = () => {
  const projects = [
    {
      name: 'Melodify',
      description: 'A music application crafted to deliver an intuitive and seamless listening experience, featuring a sleek interface and enhanced usability.',
      technologies: ['User Research', 'UI/UX Design', 'HTML/CSS', 'React', 'Tailwind CSS'],
      ModalComponent: MelodifyModal,
    },
    {
      name: 'Juniper',
      description: 'A web app where users can browse and search movies, view detailed info, and create watchlists to track what they want to watch.',
      technologies: ['User Research', 'UI/UX Design', 'HTML/CSS', 'Vue.js', 'Bootstrap'],
      ModalComponent: JuniperModal,
    },
    {
      name: 'Dear Diary',
      description: 'A journaling app that uses AI to help users reflect on their day, set goals, and improve their mental well-being through personalized prompts and mood tracking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chakra UI'],
      ModalComponent: DearDiaryModal,
    },
    {
      name: 'CareerQuest',
      description: 'A job search platform that connects students with internship and job opportunities, featuring resume building tools and interview preparation resources.',
      technologies: ['Vue.js', 'Python', 'AWS Lambda', 'DynamoDB', 'APIs'],
      ModalComponent: CareerQuestModal,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="organizations">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
        </div>

        <div className="organizations-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`organization-card horizontal-card ${index % 2 !== 0 ? 'reverse' : ''}`}
              onClick={() => handleCardClick(project)}
              style={{ cursor: 'pointer' }}
            >

            {/*
              <div className="org-image">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
              </div>
            */}

              <div className="org-content">
                <h3>{project.name}</h3>
                <p className="org-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }} onClick={closeModal}>
            <div className="modal-content" style={{
              background: '#fff',
              padding: '2.5rem',
              borderRadius: '12px',
              maxWidth: '1100px',
              width: '95%',
              minHeight: '400px',
              position: 'relative',
              boxShadow: '0 2px 32px rgba(0,0,0,0.25)',
              overflowY: 'auto',
              maxHeight: '90vh'
            }} onClick={e => e.stopPropagation()}>
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={selectedProject.image} alt={selectedProject.name} style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem' }} />
              {selectedProject.ModalComponent && <selectedProject.ModalComponent />}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
