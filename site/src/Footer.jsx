import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] py-8 px-5 text-center font-['Poppins'] text-[#ccc] mt-10 w-full">
      <div className="flex flex-wrap justify-center gap-8 mb-5 max-w-7xl mx-auto">
        <div className="flex-1 min-w-[160px]">
          <h3 className="font-bold text-xl mb-2.5 text-white">Search with GPT</h3>
          <p>Smarter, Faster Search powered by AI.</p>
        </div>

        <div className="flex-1 min-w-[160px]">
          <h4 className="font-bold text-base mb-2 bg-gradient-to-r from-[#a259ff] to-[#f64c72] bg-clip-text text-transparent">
            Supported Browsers
          </h4>
          <ul className="list-none p-0">
            <li className="my-1.5 text-sm">Chrome</li>
            <li className="my-1.5 text-sm">Edge</li>
            <li className="my-1.5 text-sm">Firefox</li>
            <li className="my-1.5 text-sm">Brave</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[160px]">
          <h4 className="font-bold text-base mb-2 bg-gradient-to-r from-[#a259ff] to-[#f64c72] bg-clip-text text-transparent">
            Resources
          </h4>
          <ul className="list-none p-0">
            <li className="my-1.5 text-sm">Extension Guide</li>
            <li className="my-1.5 text-sm">Documentation</li>
            <li className="my-1.5 text-sm">Source Code</li>
            <li className="my-1.5 text-sm">Report a Bug</li>
            <li className="my-1.5 text-sm">Community Forum</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[160px]">
          <h4 className="font-bold text-base mb-2 bg-gradient-to-r from-[#a259ff] to-[#f64c72] bg-clip-text text-transparent">
            Coming Soon
          </h4>
          <ul className="list-none p-0">
            <li className="my-1.5 text-sm">Mobile App Support</li>
            <li className="my-1.5 text-sm">Personalized Search</li>
          </ul>
        </div>
      </div>

      <div className="text-xs text-[#777]">
        <p>Made with ❤️ by Mori Labs.</p>
        <p>
          Open-source and community-driven.{' '}
          <a href="https://www.github.com/Mori-Labs/" className="text-[#a259ff] no-underline hover:underline">
            Join us!
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;