// Features.jsx
import { MousePointerClick, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: <MousePointerClick size={40} className="text-[#a259ff]" />,
    title: "Right-Click to Search",
    description: "Highlight any text on a webpage and instantly search it using GPT with a simple right-click – no need to switch tabs.",
  },
  {
    icon: <Bot size={40} className="text-[#f64c72]" />,
    title: "AI-Powered Answers",
    description: "Get intelligent, GPT-powered responses instead of sifting through multiple links. Save time and boost understanding instantly.",
  },
  {
    icon: <Zap size={40} className="text-[#f64c72]" />,
    title: "Lightning Fast Access",
    description: "Designed for speed and convenience – access GPT results in seconds, right from your current page without breaking focus.",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-10 mt-10 shadow-md w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-['Poppins']">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h4 className="mt-4 text-lg font-semibold">{feature.title}</h4>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
