import React from 'react'

const JuniperModal = () => (
  <>
    <h2>Juniper – UX Case Study</h2>

    {/* Overview */}
    <section>
      <h3>📌 Project Overview</h3>
      <p>
        <strong>Juniper</strong> is a responsive web application designed for discovering, exploring,
        and saving movies to personal watchlists. It was created to offer a clutter-free, mobile-first
        experience that balances visual immersion with usability.
      </p>
    </section>

    {/* Goals */}
    <section>
      <h3>🎯 Project Goals</h3>
      <ul>
        <li>Make movie discovery intuitive and enjoyable</li>
        <li>Enable fast, filterable search with meaningful results</li>
        <li>Allow users to easily build and manage personal watchlists</li>
        <li>Ensure the platform is fully responsive and accessible</li>
      </ul>
    </section>

    {/* Problem Statement */}
    <section>
      <h3>❓ Problem</h3>
      <p>
        Existing movie platforms are often cluttered, ad-heavy, and hard to navigate — especially
        on mobile. Users find it difficult to search, compare, and remember movies they want to watch.
        Juniper solves this by offering a clean, minimal interface focused on user needs.
      </p>
    </section>

    {/* Competitive Analysis */}
    <section>
      <h3>🔍 Competitive Assessment</h3>
      <p>
        I analyzed platforms like IMDb, Letterboxd, and JustWatch to understand gaps and strengths.
        While IMDb offers detailed content, its UI is cluttered. Letterboxd excels in aesthetics but
        lacks intuitive navigation. JustWatch is strong in search but weak in personalization.
      </p>
      <p><strong>Key Opportunity:</strong> Combine aesthetic clarity with strong utility.</p>

      <p><strong>Image Placeholder:</strong> Competitive audit comparison chart</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Competitive Matrix ]
      </div>
    </section>

    {/* User Research */}
    <section>
      <h3>👥 User Research</h3>
      <p>
        I conducted 6 user interviews (3 casual movie watchers, 3 film enthusiasts) and collected 28
        survey responses to better understand behaviors and frustrations around movie discovery.
      </p>

      <ul>
        <li>🧭 Users want simple ways to “just find something to watch.”</li>
        <li>🔖 People forget movie names unless they’re saved easily.</li>
        <li>📱 Mobile users get frustrated with unresponsive filtering UIs.</li>
      </ul>

      <p><strong>Image Placeholder:</strong> Quotes or affinity map clusters</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ User Quotes / Research Highlights ]
      </div>
    </section>

    {/* Personas */}
    <section>
      <h3>🧑‍🎤 User Personas</h3>
      <p>I created two primary personas based on research patterns:</p>

      <ul>
        <li><strong>“Jess” – The Casual Viewer</strong><br />
          Needs fast access to summaries and trailers, often watches on mobile.
        </li>
        <li><strong>“Dylan” – The Film Enthusiast</strong><br />
          Loves exploring cast, ratings, and genre-based filters. Wants to save and categorize films.
        </li>
      </ul>

      <p><strong>Image Placeholder:</strong> Persona cards</p>
      <div style={{ background: '#eee', height: '200px', textAlign: 'center', lineHeight: '200px' }}>
        [ Persona: Jess / Dylan ]
      </div>
    </section>

    {/* Requirements */}
    <section>
      <h3>🧾 Functional Requirements</h3>
      <ul>
        <li>Responsive layout across all screen sizes</li>
        <li>Search by title, genre, release year, rating</li>
        <li>Detailed movie info in modals (not separate pages)</li>
        <li>One-click "Add to Watchlist" with visual feedback</li>
        <li>Persistent watchlist storage (login optional)</li>
      </ul>
    </section>

    {/* Design */}
    <section>
      <h3>🎨 Design Process</h3>
      <p>
        Using insights from research, I began wireframing in Figma with a mobile-first approach.
        I designed a dark, cinematic UI using Bootstrap components and custom styles.
      </p>

      <ul>
        <li>🗺️ Low-fidelity wireframes to test navigation and info hierarchy</li>
        <li>🧱 Grid-based layout for responsive design</li>
        <li>🎬 Movie modals to reduce page reloads and keep users in flow</li>
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
        I tested a working prototype with 6 users and received detailed feedback on mobile and
        desktop interactions. I iterated based on pain points around discoverability and touch targets.
      </p>

      <ul>
        <li>📱 Made watchlist buttons more prominent on mobile</li>
        <li>🎛️ Adjusted filter layout for better visibility</li>
        <li>🧠 Added skeleton loaders for better feedback during content loading</li>
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
        <li>⏱️ Users completed tasks 60% faster vs competitor sites</li>
        <li>👍 90% user satisfaction rating in prototype testing</li>
        <li>📱 Mobile engagement increased by 40%</li>
      </ul>
    </section>

    {/* Reflection */}
    <section>
      <h3>💭 Reflections</h3>
      <ul>
        <li>🔍 Simplicity drives engagement — the fewer barriers, the better</li>
        <li>📐 Early user testing is critical for shaping hierarchy and clarity</li>
        <li>♿ Designing for accessibility benefits all users</li>
      </ul>
    </section>

    {/* Next Steps */}
    <section>
      <h3>🚀 Future Improvements</h3>
      <ul>
        <li>Social features: shared watchlists, movie reactions</li>
        <li>Personalized recommendations based on viewing behavior</li>
        <li>Longitudinal A/B testing with analytics tracking</li>
      </ul>
    </section>
  </>
)

export default JuniperModal