import React from 'react';

const DearDiaryModal = () => (
  <div>
    <h2>Dear Diary – Short-Form Journaling Platform for Writers (In Progress)</h2>

    <p>
      Dear Diary is a startup project in development for writers at the University of Iowa. 
      Inspired by platforms like TikTok, it enables users to share short-form, diary-style content — blending creativity, storytelling, and personal reflection in a social, scrollable feed.
    </p>

    <h3 style={{ marginBottom: '0.5rem' }}>Current Features & Development Focus</h3>
    <ul style={{ paddingLeft: '1.25rem', marginTop: 0 }}>
      <li>Vertical feed for short-form text and creative entries</li>
      <li>User profiles and post interaction (likes, saves – in progress)</li>
      <li>Clean, minimal writing interface focused on expression</li>
      <li>Frontend built with <strong>React</strong> and styled using <strong>Chakra UI</strong></li>
      <li>Backend setup with <strong>MongoDB</strong> for post storage</li>
    </ul>

    <p style={{ marginTop: '1rem' }}>
      I’m currently working on building out the post feed and interaction logic, 
      and exploring how to structure user discovery and content browsing to encourage engagement within the University of Iowa writing community.
    </p>
  </div>
);

export default DearDiaryModal;

