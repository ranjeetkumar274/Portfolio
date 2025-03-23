import React, { useState } from 'react';
import experienceData from '../data/experienceData';

const Experience = () => {
  // State to track which experience items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle expanded state for an experience item
  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center font-bold pb-10 text-white">Experience</h1>
      <div
        className="bg-gray-800 [--color:#fff] [--muted:#d1d5db] [--muted-foreground:#9ca3af] [--border:#374151] [--shadow:rgba(0,0,0,0.3)_0_1px_2px_0,rgba(0,0,0,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl border border-gray-700 pl-[50px]"
      >
        <div
          className="timeline-container [--tl-color:#6366f1] [--tl-rounded:9999px] [--tl-bullet-size:25px] [--tl-line-width:3px] [--offset:calc(var(--tl-bullet-size)/2+var(--tl-line-width)/2)] [&_[data-child=bullet]]:left-[calc((var(--tl-bullet-size)/2+var(--tl-line-width)/2)*-1)] [&_[data-child=bullet]]:right-auto [&_[data-child=body]]:pl-[var(--offset)] [&_[data-tl=item]]:before:[--timeline-line-left:calc(var(--tl-line-width)*-1)] [&_[data-tl=item]]:before:[var(--timeline-line-right:auto)] [&_[data-tl=item]]:pl-[var(--offset)] p-4 pl-8"
          data-align="left"
          role="group"
        >
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="[--item-border-color:#4b5563] [--tli-border-style:dotted] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-gray-300 [&:where(:not(:last-of-type))]:[--timeline-line-display:block] [&:where(:not(:first-of-type))]:mt-8 pb-4 before:absolute before:pointer-events-none before:top-0 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
              data-line-active="true"
              data-tl="item"
            >
              <div
                className="bg-gray-800 border-[var(--tl-color)] text-[var(--tl-color)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
                data-active="true"
                data-child="bullet"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M12 3l0 6"></path>
                  <path d="M12 15l0 6"></path>
                </svg>
              </div>

              <div className="" data-child="body">
                {/* Title and period */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                  <span className="font-semibold text-lg font-mono text-indigo-400">{exp.title}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full inline-block bg-indigo-900/40 text-indigo-300">
                    {exp.period}
                  </span>
                </div>

                {/* Company and location */}
                <div className="mt-1" role="group">
                  <p className="flex flex-row flex-nowrap items-center gap-2 text-gray-300">
                    <span className="text-sm font-semibold font-mono">{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-sm italic text-gray-400">{exp.location}</span>
                      </>
                    )}
                  </p>
                </div>

                {/* Description */}
                <div className={`text-sm font-normal mt-2 flex-col items-start text-gray-400 ${expandedItems[index] ? '' : 'line-clamp-2'}`}>
                  {exp.description}
                </div>
                
                {/* Achievements */}
                {expandedItems[index] && exp.achievements && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold mb-1 text-indigo-300">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 pl-2 text-gray-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Skills section */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Show more/less button */}
                <div className="mt-3">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-indigo-400 text-sm font-mono hover:underline focus:outline-none hover:text-indigo-300"
                  >
                    {expandedItems[index] ? 'Show less' : 'Show more'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;