import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rec1 from './assets/rec1.gif';
import rec2 from './assets/rec2.gif';

gsap.registerPlugin(ScrollTrigger);

const GIF = () => {
    const gifRef1 = useRef(null);
    const gifRef2 = useRef(null);

    useEffect(() => {
        const elements = [gifRef1.current, gifRef2.current];

        elements.forEach((el) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    y: 1000,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true, // enable to debug
                    }
                }
            );
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-[50vh] bg-gray-100 text-black w-full px-5 py-20 font-['Poppins']">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div
                    ref={gifRef1}
                    className="flex flex-col items-center text-center max-w-sm transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={rec2}
                        alt="rec2"
                        className="w-full h-auto rounded-xl shadow-xl border border-gray-300"
                    />
                    <p className="mt-4 text-base">
                        Select any text, right-click, and click on the 'Search with GPT' extension in the popup.
                    </p>
                </div>

                <div
                    ref={gifRef2}
                    className="flex flex-col items-center text-center max-w-sm transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={rec1}
                        alt="rec1"
                        className="w-full h-auto rounded-xl shadow-xl border border-gray-300"
                    />
                    <p className="mt-4 text-base">
                        The quick view of the extension displaying recent searches.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GIF;
