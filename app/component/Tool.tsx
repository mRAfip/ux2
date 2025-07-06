'use client';

import { IconType } from 'react-icons';
import {
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaChalkboardTeacher,
  FaSitemap,
} from 'react-icons/fa';

import {
  SiFramer,
  SiMiro,
  SiJira,
  SiHostinger,
  SiNextdotjs,
  SiTailwindcss,
  SiWebflow,
  SiWix,
  SiTypescript,
  SiNotion,
  SiAdobexd,
  SiVscodium, // ✅ Replaces SiVisualstudiocode
} from 'react-icons/si';

import {
  MdOutlineDesignServices,
  MdOutlineDraw,
} from 'react-icons/md';

import { BiTestTube } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';

type Tool = {
  icon: IconType;
  name: string;
  description: string;
};

// Tool Arrays
const uxTools: Tool[] = [
  { icon: HiOutlineUserGroup, name: 'User Research', description: 'Interviews, personas, surveys' },
  { icon: FaSitemap, name: 'Information Architecture', description: 'Flows, journey maps' },
  { icon: MdOutlineDraw, name: 'Wireframing', description: 'Low & mid-fidelity wireframes' },
  { icon: BiTestTube, name: 'Usability Testing', description: 'Test & iterate on designs' },
  { icon: SiMiro, name: 'Miro', description: 'UX Mapping & Brainstorming' },
  { icon: FaFigma, name: 'FigJam', description: 'Whiteboarding, flows, feedback' },
];

const uiTools: Tool[] = [
  { icon: FaFigma, name: 'Figma', description: 'UI Design & Prototyping' },
  { icon: SiAdobexd, name: 'Adobe XD', description: 'Visual design tools' },
  { icon: SiFramer, name: 'Framer', description: 'Prototyping & Landing Pages' },
  { icon: SiWebflow, name: 'Webflow', description: 'No-code responsive builder' },
  { icon: SiWix, name: 'Wix', description: 'Quick website builder' },
];

const devTools: Tool[] = [
  { icon: FaHtml5, name: 'HTML5', description: 'Structure of web pages' },
  { icon: FaCss3Alt, name: 'CSS3', description: 'Styling' },
  { icon: FaJs, name: 'JavaScript', description: 'Basic interactivity' },
  { icon: SiTypescript, name: 'TypeScript', description: 'Typed JavaScript' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', description: 'Utility-first CSS' },
  { icon: SiNextdotjs, name: 'Next.js', description: 'React-based frontend framework' },
  { icon: FaGitAlt, name: 'Git & GitHub', description: 'Version control' },
  { icon: SiVscodium, name: 'VS Code', description: 'Code Editor' },
];

const pmTools: Tool[] = [
  { icon: SiJira, name: 'Jira', description: 'Agile & Sprint Planning' },
  { icon: SiNotion, name: 'Notion', description: 'Docs & Collaboration' },
  { icon: SiMiro, name: 'Miro', description: 'Team Brainstorming' },
];

const trainingTools: Tool[] = [
  { icon: FaChalkboardTeacher, name: 'Workshops & Webinars', description: 'Live & recorded training' },
  { icon: MdOutlineDesignServices, name: 'UX Consultation', description: 'Client-focused UX design' },
];

export default function Tool() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="mb-10 border-b-1 border-gray-500 py-6">
          <div className="mb-4 text-sm tracking-widest text-gray-400 uppercase">
            <span className="text-[#FF531A] font-bold">04</span> / WHAT I USE EVERYDAY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Shaping Ideas with the Right Tools & Techniques
          </h2>
        </div>

        {/* Tools Section Renderer */}
        {[
          { title: 'UX Design', tools: uxTools },
          { title: 'UI Design', tools: uiTools },
          { title: 'Front-End Development', tools: devTools },
          { title: 'Project Management & Collaboration', tools: pmTools },
          { title: 'Training & Consultation', tools: trainingTools },
        ].map((section, i) => (
          <div key={i} className="mt-16">
            <h5 className="text-lg text-gray-600 mb-6">{section.title}</h5>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.tools.map((tool, index) => (
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
        ))}
      </div>
    </section>
  );
}
