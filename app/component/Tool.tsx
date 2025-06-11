'use client';

import { IconType } from 'react-icons';
import { FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiFramer, SiMiro, SiJira, SiHostinger } from 'react-icons/si';

type Tool = {
  icon: IconType;
  name: string;
  description: string;
};

const tools: Tool[] = [
  { icon: SiFramer, name: 'Framer', description: 'Web design' },
  { icon: FaFigma, name: 'Figma', description: 'UI UX design' },
  { icon: SiMiro, name: 'Miro', description: 'Low fidelity' },
  { icon: SiJira, name: 'Jira', description: 'Project management' },
  { icon: SiHostinger, name: 'Hostinger', description: 'Hosting' },
  { icon: FaGitAlt, name: 'Git', description: 'Web design' },
];

export default function Tool() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10">
          <div className="mb-4 text-sm tracking-widest text-gray-400 uppercase">
            <span className="text-red-500 font-bold">02</span> / Recent Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Selection of experienced product design <br />
            solutions and innovative digital concepts
          </h2>
        </div>


{/* Tools Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {tools.map((tool, index) => (
    <div
      key={index}
      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-6 py-5 flex items-center gap-4 hover:bg-[#252525] transition"
    >
      <tool.icon className="text-white text-2xl shrink-0" />
      <div>
        <h4 className="font-semibold text-white">{tool.name}</h4>
        <p className="text-sm text-gray-400">{tool.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
