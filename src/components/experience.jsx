import React from 'react'
import universityLogo from '../assets/universityiowa.png'
import allicenter from '../assets/allicenter.jpg'
import legacyagencies from '../assets/legacyagencies.png'
import expertmedicalbilling from '../assets/emb.jpg'
import academia from '../assets/academia.png'

const Experience = () => {
  const experiences = [
    {
      company: 'Expert Medical Billing',
      title: 'Technical Program Manager Intern',
      period: 'Jan 2026',
      description: 'Building a ReactJS client dashboard for healthcare providers to consolidate insurance and patient financial data with real-time updates, secure AWS database integration, data visualizations, and Slack-enabled messaging.',
      technologies: ['ReactJS', 'AWS (S3, RDS, Cognito)','AWS (API Getaway, Lambda)', 'Socket.io', 'APIs'],
      type: 'experience',
      logo: expertmedicalbilling
    },
    {
      company: 'University of Iowa Libraries - DSPS',
      title: 'Junior Software Developer',
      period: 'Oct 2025 - Present',
      description: 'Working as a Junior Developer at the University of Iowa’s Digital Scholarship & Publishing Studio, focusing on digital accessibility. Reviewed and remediated websites and digital content for ADA compliance, implemented accessible design practices, and supported development efforts to ensure inclusive, user-friendly experiences.',
      technologies: ['ReactJS', 'AWS (S3, RDS, Cognito)','AWS (API Getaway, Lambda)', 'Socket.io', 'APIs'],
      type: 'experience',
      logo: universityLogo
    },
    {
      company: 'Legacy Agencies',
      title: 'Software Engineering Intern',
      period: 'May 2025 - Aug 2025',
      description: 'Building a ReactJS client dashboard for healthcare providers to consolidate insurance and patient financial data with real-time updates, secure AWS database integration, data visualizations, and Slack-enabled messaging.',
      technologies: ['React', 'MySQL', 'PHP', 'Figma', 'Front End Development'],
      type: 'experience',
      logo: legacyagencies
    },
    {
      company: 'Alli Center',
      title: 'Web Developer',
      period: 'Aug 2023 - Aug 2024',
      description: 'Worked on a custom clinic Chrome Extension, an extension for clinicians and therapists to easily access mental health resources and tools during telehealth sessions, aswell as managed patient data through MySQL.',
      technologies: ['HTML/CSS', 'JavaScript', 'MySQL', 'UI/UX Design', 'Project Management'],
      type: 'experience',
      logo: allicenter
    },
  ]

  const organizations = [
    {
      name: 'University of Iowa - CS Department',
      role: 'Undergraduate Teaching Assistant',
      period: 'Aug 2026',
      description: 'Dedicated 6 hours a week for in-class help and office hours to aid 100+ students in Server-Side Development and Software Engineering Fundamentals',
      technologies: ['Communication', 'Lesson Planning'],
      type: 'organization',
      logo: universityLogo
    },
    {
      name: 'Dear Diary',
      role: 'Project Coordinator - Frontend Development',
      period: 'Apr 2025 - Present',
      description: 'Leading a team of 5 in developing a short-form journaling platform for University of Iowa writers, inspired by TikTok. The app allows users to share creative, diary-style entries in a scrollable feed designed to foster expression, storytelling, and community.',
      technologies: ['Leadership', 'Networking', 'Career Development'],
      type: 'organization',
      logo: universityLogo
    },
    {
      name: 'Academic Tutor',
      role: 'Self-Employed',
      period: 'May 2023 - Aug 2024',
      description: 'Leading fundraising efforts to host technical workshops, networking events, and provide resources to help low-income students thrive in tech-related careers',
      technologies: ['Fundraising', 'Mentorship', 'Event Planning', 'Community Building'],
      type: 'organization',
      logo: academia
    },
  ]

  // Create pairs of experiences and organizations
  const maxLength = Math.max(experiences.length, organizations.length)
  const timelineItems = []

  for (let i = 0; i < maxLength; i++) {
    timelineItems.push({
      experience: experiences[i] || null,
      organization: organizations[i] || null
    })
  }

  return (
    <section id="experience" className="experience-projects">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              
              {/* Left side - Experience */}
              <div className="timeline-content">
                {item.experience ? (
                  <div className="experience-card">
                    {item.experience.logo && (
                      <div className="card-logo">
                        <img 
                          src={item.experience.logo} 
                          alt={`${item.experience.company} logo`}
                          className="logo-icon"
                        />
                      </div>
                    )}
                    <div className="experience-header">
                      <h3>{item.experience.company}</h3>
                      <div className="experience-meta">
                        <span className="title">{item.experience.title}</span>
                        <span className="period">{item.experience.period}</span>
                      </div>
                    </div>
                    <p className="experience-description">{item.experience.description}</p>
                    <div className="technologies">
                      {item.experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="timeline-content-placeholder"></div>
                )}
              </div>

              {/* Right side - Organization */}
              <div className="timeline-content">
                {item.organization ? (
                  <div className="project-card">
                    <div className="card-logo">
                      <img 
                        src={item.organization.logo} 
                        alt={`${item.organization.name} logo`}
                        className="logo-icon"
                      />
                    </div>
                    <div className="project-header">
                      <h3>{item.organization.name}</h3>
                      <div className="project-meta">
                        <span className="project-type">{item.organization.role}</span>
                        <span className="period">{item.organization.period}</span>
                      </div>
                    </div>
                    <p className="project-description">{item.organization.description}</p>
                    <div className="technologies">
                      {item.organization.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="timeline-content-placeholder"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience