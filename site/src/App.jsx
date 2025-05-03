import { useState } from 'react';

function App() {
  const handleGitHubClick = () => {
    window.open('https://github.com/Mori-Labs/search-with-gpt', '_blank');
  };

  return (
    <div className="min-h-full w-full bg-white text-black font-['Poppins']">
      <div className="max-w-7xl mx-auto py-8 px-8 flex flex-col items-center">
        <h1 className="flex justify-center text-4xl mb-6">Search with GPT</h1>

        <div className="flex justify-center my-5">
          <button 
            onClick={handleGitHubClick}
            className="px-6 py-3 text-white font-bold bg-gradient-to-r from-[#a259ff] to-[#f64c72] rounded-full hover:bg-gradient-to-r hover:from-[#f64c72] hover:to-[#a259ff] transition-all duration-300 hover:scale-105"
          >
            View on GitHub
          </button>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold">About Search with GPT</h3>
          <p className="mt-2 text-gray-700">This Chrome Extension enhances your search engine with GPT-powered answers.</p>
        </div>
        
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold">About Mori Labs</h3>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            Mori Labs is dedicated to creating tools that empower users to take control of their digital experiences. With a focus on privacy, productivity, and user-centric design, Mori Labs strives to develop innovative solutions that enhance social media engagement without the unnecessary distractions.
          </p>
        </div>

        <div className="text-left ml-5 mt-5">
          <h3 className="text-2xl font-semibold">Installation</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li className="my-2.5">Download the extension from GitHub.</li>
            <li className="my-2.5">Go to chrome://extensions.</li>
            <li className="my-2.5">Enable "Developer mode".</li>
            <li className="my-2.5">Click "Load unpacked" and select the project folder.</li>
          </ol>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold">Documentation</h3>
          <p className="mt-2 text-gray-700">Learn how to install and use the extension below.</p>
        </div>

        <div className="flex justify-center my-5">
          <button 
            onClick={handleGitHubClick}
            className="px-7 py-3.5 text-white font-bold bg-gradient-to-r from-[#a259ff] to-[#f64c72] rounded-full hover:bg-gradient-to-r hover:from-[#f64c72] hover:to-[#a259ff] transition-all duration-300 hover:scale-105 text-lg"
          >
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
