import { IBMPlexMono, PixelifySans } from "@/fonts/fonts";
import Image from "next/image";
import projects from "@/data/projects.json";

const filters = ["all", "web", "tools", "ai", "scraping"];

export default function Projects() {
  return (
    <div className={`${IBMPlexMono.className} text-white min-h-screen px-6 py-16`}>
      {/* Section header */}
      <div className="text-center mb-8">
        <h2 className={`${PixelifySans.className} text-2xl`}>[ projects ]</h2>
      </div>

      {/* Filter tags */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {filters.map((filter, i) => (
          <button
            key={filter}
            className={`border px-4 py-1 text-sm ${
              i === 0
                ? "bg-white text-black border-white"
                : "border-white/30 hover:border-white transition-colors"
            }`}
          >
            [ {filter} ]
          </button>
        ))}
      </div>

      {/* Grid of project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full h-full border border-white/20 p-4 flex flex-col justify-between hover:border-white/50 transition-colors"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold">{project.title}</h3>
                <span className="text-white/50 text-sm">{project.date}</span>
              </div>
              
              {/* 80% Width Borderline under the title */}
              <div className=" h-[1px] bg-white/20 mx-auto mb-3"></div>
              
              <div className="flex gap-3 mb-3">
                {/* Next.js Optimized Image Block */}
                <div className="w-24 h-24 border border-white/20 flex items-center justify-center bg-black shrink-0 overflow-hidden relative">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      width={96}
                      height={96}
                      unoptimized
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-white/30 text-xs">Image</span>
                  )}
                </div>
                {/* End Image Block */}

                <p className="text-sm text-white/70 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/20 px-2 py-0.5 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/20 text-center py-1.5 text-sm hover:border-white/50 transition-colors"
              >
                [ view project ]
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/20 text-center py-1.5 text-sm hover:border-white/50 transition-colors flex items-center justify-center gap-1"
              >
                [ github ]
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
        <button className="md:col-start-2 w-full border border-white/20 py-2 text-sm hover:border-white/50 transition-colors">
          [ view more on github ]
        </button>
      </div>
    </div>
  );
}