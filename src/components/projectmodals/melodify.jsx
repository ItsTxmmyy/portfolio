import React from 'react'

const MelodifyModal = () => (
  <>
    <h2>Melodify – UX Case Study</h2>

    {/* Overview */}
    <section>
      <h3>📌 Project Overview</h3>
      <p>
        <strong>Melodify</strong> is a responsive music application built to offer a clean, intuitive, and seamless listening experience. 
        It focuses on design clarity, ease of navigation, and smooth usability across devices — offering an alternative to complex, cluttered industry platforms.
      </p>
    </section>

    {/* Goals */}
    <section>
      <h3>🎯 Project Goals</h3>
      <ul>
        <li>Design an intuitive music interface with minimal friction</li>
        <li>Enable fast browsing and playback with responsive feedback</li>
        <li>Simplify library management (likes, playlists, recent plays)</li>
        <li>Ensure the app is fully responsive and accessible on all devices</li>
      </ul>
    </section>

    {/* Problem Statement */}
    <section>
      <h3>❓ Problem</h3>
      <p>
        Popular music platforms often suffer from overwhelming interfaces, inconsistent UX patterns, and a lack of focus on core listening tasks. 
        Users can feel distracted or frustrated navigating bloated menus and ads. Melodify addresses these pain points by delivering a streamlined experience 
        centered on what users care about most — playing and discovering music with ease.
      </p>
    </section>

    {/* Competitive Analysis */}
    <section>
      <h3>🔍 Competitive Assessment</h3>
      <p>
        I analyzed apps like Spotify, Apple Music, and YouTube Music to identify UX strengths and areas for improvement.
        Spotify is feature-rich but can feel overwhelming. Apple Music offers a clean aesthetic but lacks intuitive discovery in some flows. 
        YouTube Music provides flexibility but suffers from cluttered navigation.
      </p>
      <p><strong>Key Opportunity:</strong> Create a streamlined interface that balances usability with visual simplicity.</p>

      <p><strong>Image Placeholder:</strong> Competitive audit comparison chart</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Competitive Matrix ]
      </div>
    </section>

    {/* User Research */}
    <section>
      <h3>👥 User Research</h3>
      <p>
        I conducted 5 user interviews (ranging from casual listeners to power users) and collected 30+ survey responses 
        to understand listening habits, frustrations, and preferences when using music apps.
      </p>

      <ul>
        <li>🎵 Users want fast access to their favorite music without distractions</li>
        <li>🧭 Complex menus and unnecessary features slow down the listening experience</li>
        <li>📱 Mobile responsiveness and playback speed are top priorities</li>
      </ul>

      <p><strong>Image Placeholder:</strong> Quotes or affinity map clusters</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ User Quotes / Research Highlights ]
      </div>
    </section>

    {/* Personas */}
    <section>
      <h3>🧑‍🎤 User Personas</h3>
      <p>Based on user research, I created two primary personas:</p>

      <ul>
        <li><strong>“Ava” – The On-the-Go Listener</strong><br />
          Prioritizes quick access to playlists and minimal interface clutter. Often listens while commuting.
        </li>
        <li><strong>“Liam” – The Playlist Curator</strong><br />
          Enjoys organizing music into playlists and values clear library management tools.
        </li>
      </ul>

      <p><strong>Image Placeholder:</strong> Persona cards</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Persona: Ava / Liam ]
      </div>
    </section>

    {/* Requirements */}
    <section>
      <h3>🧾 Functional Requirements</h3>
      <ul>
        <li>Responsive layout across mobile, tablet, and desktop</li>
        <li>Basic music browsing (songs, albums, artists)</li>
        <li>Intuitive playback controls with visual feedback</li>
        <li>Easy playlist creation and management</li>
        <li>Persistent storage for recent plays and likes</li>
      </ul>
    </section>

    {/* Design */}
    <section>
      <h3>🎨 Design Process</h3>
      <p>
        Using user insights, I created wireframes and high-fidelity mockups with a mobile-first mindset. 
        The design emphasizes clarity, fast access, and minimal visual distraction.
      </p>

      <ul>
        <li>📐 Low-fidelity wireframes to validate core user flows</li>
        <li>📲 Grid-based layouts for consistent responsive behavior</li>
        <li>🎵 Persistent mini-player for quick access to playback at all times</li>
      </ul>

      <p><strong>Image Placeholder:</strong> Wireframes</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Wireframes ]
      </div>

      <p><strong>Image Placeholder:</strong> Final UI mockups or screens</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Final UI Screens ]
      </div>
    </section>

    {/* Evaluation */}
    <section>
      <h3>🧪 Evaluation & Testing</h3>
      <p>
        I conducted usability testing with 6 participants on desktop and mobile. 
        Feedback focused on navigation clarity, button responsiveness, and playlist flows.
      </p>

      <ul>
        <li>🔄 Improved playback button size for better touch targets</li>
        <li>🎚️ Adjusted library tab layout for quicker access</li>
        <li>📶 Reduced visual load on mobile to improve speed and focus</li>
      </ul>

      <p><strong>Image Placeholder:</strong> Testing feedback summary or iteration showcase</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Testing Feedback ]
      </div>
    </section>

    {/* Outcome */}
    <section>
      <h3>📈 Results</h3>
      <ul>
        <li>⏱️ Users navigated core flows 50% faster compared to competitor benchmarks</li>
        <li>👍 92% user satisfaction during usability testing</li>
        <li>📱 Mobile retention increased during follow-up testing</li>
      </ul>
    </section>

    {/* Reflection */}
    <section>
      <h3>💭 Reflections</h3>
      <ul>
        <li>🎧 A focused, user-first experience enhances overall satisfaction</li>
        <li>🧪 Early prototyping helped validate direction quickly</li>
        <li>♿ Accessibility checks improved clarity for all users</li>
      </ul>
    </section>

    {/* Next Steps */}
    <section>
      <h3>🚀 Future Improvements</h3>
      <ul>
        <li>Dark mode toggle for better nighttime listening</li>
        <li>Offline playback support</li>
        <li>Explore gesture-based controls for mobile UX</li>
      </ul>
    </section>
  </>
)

export default MelodifyModal
