import { useState } from 'react';
import './App.css';

function App() {
  const handleGitHubClick = () => {
    window.open('https://github.com/Mori-Labs/search-with-gpt', '_blank');
  };

  return (
    <div className="makecenter">
      <h1 className="title">Search with GPT</h1>
      <div className="btns">
        <button onClick={handleGitHubClick}>View on GitHub</button>
      </div>

      <div className="about-section">
        <h3>About Search with GPT</h3>
        <p>This Chrome Extension enhances your search engine with GPT-powered answers.</p>
      </div>

      <div className="installation-section">
        <h3>Installation</h3>
        <ol>
          <li>Download the extension from GitHub.</li>
          <li>Go to chrome://extensions.</li>
          <li>Enable "Developer mode".</li>
          <li>Click "Load unpacked" and select the project folder.</li>
        </ol>
      </div>

      <div className="documentation-section">
        <h3>Documentation</h3>
        <p>Learn how to install and use the extension below.</p>
      </div>

      <div className="btns">
        <button onClick={handleGitHubClick}>View on GitHub</button>
      </div>
    </div>
  );
}

export default App;
