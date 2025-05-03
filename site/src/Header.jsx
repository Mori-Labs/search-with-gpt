import React from 'react';
import icon128 from './assets/icon128.png';

const Header = () => {
    const buttonClick = () => {
        window.open('https://www.github.com/Mori-Labs/search-with-gpt', '_blank');
    };

    return (
        <header className="w-full bg-white py-2.5 shadow-md border-b border-gray-200">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 box-border">
                <div className="flex items-center">
                    <img src={icon128} alt="Icon" className="w-12 h-12 mr-3" />
                    <h1 className="text-2xl font-bold m-0 text-black">
                        Search with GPT
                    </h1>
                </div>
                <button
                    onClick={buttonClick}
                    className="px-5 py-2.5 text-white font-bold bg-gradient-to-r from-[#a259ff] to-[#f64c72] rounded-[5px] hover:bg-gradient-to-r hover:from-[#f64c72] hover:to-[#a259ff] transition-all duration-300 hover:scale-[1.05] active:scale-100"
                >
                    Get Extension
                </button>
            </div>
        </header>
    );
};

export default Header;
