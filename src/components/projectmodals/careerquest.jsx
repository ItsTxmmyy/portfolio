import React from 'react';

const CareerQuestModal = () => (
  <div>
    <h2>CareerQuest – Internship & Career Discovery Platform</h2>
    
    <p>
      <strong>Live Demo:</strong>{' '}
      <a 
        href="https://main.d2avs5kpfmpgfb.amplifyapp.com/home-page" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </p>

    <p>
      CareerQuest is a web application that helps students discover internship and job opportunities. 
      The platform allows users to browse listings, create profiles, and apply directly to opportunities relevant to their career interests.
    </p>

    <div style={{ marginTop: '1.5rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Key Features & Technologies</h3>
      <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
        <li>Fully responsive frontend built with <strong>React</strong> and <strong>Tailwind CSS</strong></li>
        <li>Dynamic routing and state management with <strong>React Router</strong> and <strong>Context API</strong></li>
        <li>Integrated user flows: user contact support, login, profile creation, dark/light mode</li>
        <li>Real-time UI feedback and validations for better user experience</li>
        <li>Deployed via <strong>AWS Amplify</strong> for continuous delivery</li>
      </ul>
    </div>


    <div style={{ marginTop: '2rem' }}>

      <h3>My Role – Frontend Lead</h3>
      <p>
        I led the design and development of the entire frontend. I was responsible for creating reusable UI components, 
        ensuring responsive design across devices, and building smooth user flows from landing to application. I collaborated 
        closely with our backend team to integrate AWS services and implemented user authentication with AWS Authenticator.
      </p>
      <p>
        I also focused on accessibility and performance optimization, aiming to create an intuitive, fast, and inclusive experience for users.
      </p>
    </div>
  </div>
);

export default CareerQuestModal;

