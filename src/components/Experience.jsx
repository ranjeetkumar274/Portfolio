const Experience = () => {  
  return (
    <div className="flex flex-col items-center justify-center dark">
      <h1 className="text-4xl text-center font-bold pb-10">Experience</h1>
      <div
        className="bg-yellow-200 [--color:#000] [--muted:#242424] [--muted-foreground:#9c9c9c] [--border:#2e2e2e] [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white[box-shadow:var(--shadow)] pl-[50px]"
      >
        <div
          className="[--tl-color:#daa520] [--tl-rounded:9999px] [--tl-bullet-size:25px] [--tl-line-width:3px] [--offset:calc(var(--tl-bullet-size)/2+var(--tl-line-width)/2)] [&_[data-child=bullet]]:left-[calc((var(--tl-bullet-size)/2+var(--tl-line-width)/2)*-1)] [&_[data-child=bullet]]:right-auto [&_[data-child=body]]:pl-[var(--offset)] [&_[data-tl=item]]:before:[--timeline-line-left:calc(var(--tl-line-width)*-1)] [&_[data-tl=item]]:before:[var(--timeline-line-right:auto)] [&_[data-tl=item]]:pl-[var(--offset)] p-4 pl-8"
          data-align="left"
          role="group"
        >
          <div
            className="[--item-border-color:#424242] [--tli-border-style:dotted] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&:where(:not(:last-of-type))]:[--timeline-line-display:block] [&:where(:not(:first-of-type))]:mt-8 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
            data-line-active="true"
            data-tl="item"
          >
            <div
              className="bg-[#fff] border-[var(--muted)] text-[var(--muted)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
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
              <span className="font-semibold leading-none font-mono text-sky-600">Commits</span>

              <div className="mt-0" role="group">
                <p className="flex flex-row flex-nowrap items-center gap-2 text-zinc-600 dark:text-zinc-500">
                  <span className="text-sm font-normal font-mono line-clamp-1">john doe</span>
                </p>
              </div>

              <div className="text-sm font-normal font-mono [&_*]:font-mono mt-2 white-space-break-spaces flex-col items-start scrollbar markdown-body line-clamp-2">
                remove docs as they get moved to primer/design.
              </div>
              <div className="relative text-sm flex flex-row items-center gap-2 w-max [text-align:inherit] mt-2" role="group">
                <time className="flex flex-row items-center gap-2 font-mono">on Aug 24, 2023</time>
                <button
                  className="!absolute -bottom-6 left-0 text-sky-600 text-sm mt-2 font-mono hover:underline"
                  type="button"
                >
                  Show more
                </button>
              </div>
            </div>
          </div>

          <div
            className="[--item-border-color:#424242] [--tli-border-style:solid] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&:where(:not(:last-of-type))]:[--timeline-line-display:block] [&:where(:not(:first-of-type))]:mt-8 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
            data-tl="item"
          >       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;