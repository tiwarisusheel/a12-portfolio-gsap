import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const { title, description, images } = project;
  const parseHTML = (html) => {
  if (!html) return [];

  const doc = new DOMParser().parseFromString(html, "text/html");

  return Array.from(doc.querySelectorAll("td"))
    .map((cell) => cell.textContent.trim())
    .filter(Boolean);
};

const techStack = parseHTML(project.techStack);

const parseDescription = (html) => {
  if (!html) return "";

  const doc = new DOMParser().parseFromString(html, "text/html");

  return doc.body.textContent.trim();
};

const plainDescription = parseDescription(description);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717] transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10">
      <Link to={`/project/${project.slug}`} >
      <div className="relative overflow-hidden bg-neutral-800">
        <img
          src={images[0].url}
          alt={title}
          loading="lazy"
          className="h-[85%] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Project Details */}
      <div className="p-5 sm:p-6">
        <h2 className="text-base font-semibold text-white transition-colors group-hover:text-orange-400">
          {title}
        </h2>

        <p className="mt-3 min-h-[3rem] text-sm leading-6 text-gray-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          {plainDescription}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Optional Live Project Link */}
        {/* {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-400"
          >
            View Project
            <span aria-hidden="true">↗</span>
          </a>
        )} */}
      </div>
      </Link>
    </article>
  );
};

export default ProjectCard;