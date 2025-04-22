import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }} className="container">
      <h1>Search with GPT</h1>
      <p>This Chrome Extension enhances your search engine with GPT-powered answers.</p>

      <h2>📦 Features</h2>
      <ul>
        <li>💡 Auto-generated GPT summaries</li>
        <li>🌐 Works on Google, Bing, DuckDuckGo</li>
        <li>⚡ Minimal UI and blazing fast</li>
      </ul>

      <h2>📄 Documentation</h2>
      <p>Learn how to install and use the extension below.</p>

      <h3>Installation</h3>
      <ol>
        <li>Download the extension from GitHub.</li>
        <li>Go to chrome://extensions.</li>
        <li>Enable "Developer mode".</li>
        <li>Click "Load unpacked" and select the project folder.</li>
      </ol>

      <h3>🔗 GitHub Link</h3>
      <a href="https://github.com/Mori-Labs/search-with-gpt" target="_blank">View on GitHub</a>
    </div>
  );
}

export default App;

