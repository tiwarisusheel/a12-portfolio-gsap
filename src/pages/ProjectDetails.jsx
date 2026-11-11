import { useContext } from "react";
import { Link, useParams } from "react-router";
import { ProjectsContext } from "../context/ProjectsContext";

const ProjectDetails = () => {
  const { projects, loading, error } = useContext(ProjectsContext);
  const { slug } = useParams();

  if (loading) {
    return <p className="pt-28 text-center text-white">Loading project...</p>;
  }

  if (error) {
    return <p className="pt-28 text-center text-red-400">Error: {error}</p>;
  }

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0c0c0f] pt-28 text-center text-white">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  // Description HTML ko browser-readable HTML mein convert karega
  const parseDescription = (html) => {
    if (!html) return "";

    const doc = new DOMParser().parseFromString(html, "text/html");

    return doc.body.innerHTML;
  };

  // TechStack HTML table ko rows mein convert karega
  const parseTechStack = (html) => {
    if (!html) return [];

    const doc = new DOMParser().parseFromString(html, "text/html");

    return Array.from(doc.querySelectorAll("tr")).map((row) => {
      const cells = Array.from(row.querySelectorAll("td"));

      return {
        category: cells[0]?.textContent.trim() || "",
        technology: cells[1]?.textContent.trim() || "",
      };
    });
  };

  const techStack = parseTechStack(project.techStack);

  return (
    <div className="min-h-screen bg-[#0c0c0f] px-5 pt-28 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          to="/mypractice"
          className="mb-8 inline-flex text-sm text-gray-400 transition hover:text-orange-400"
        >
          ← Back to Projects
        </Link>

        {/* ================= IMAGE GALLERY ================= */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.images?.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={image.url}
                alt={image.alt || project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ================= PROJECT HEADER ================= */}
        <div className="max-w-4xl">

          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-orange-400">
            {project.client} Project
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
            >
              Visit Live Project ↗
            </a>

            <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-400">
              {project.projectDate}
            </span>
          </div>
        </div>

        {/* ================= PROJECT DETAILS ================= */}
        <section className="mt-16 max-w-4xl">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Project Details
          </h2>

          <div
            className="prose prose-invert max-w-none text-gray-400
            prose-p:leading-8
            prose-strong:text-white
            prose-li:leading-7"
            dangerouslySetInnerHTML={{
              __html: parseDescription(project.description),
            }}
          />

        </section>

        {/* ================= TECH STACK ================= */}
        <section className="mt-16 max-w-5xl">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Tech Stack
          </h2>

          <div className="overflow-hidden rounded-2xl border border-white/10">

            <table className="w-full text-left">

              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-orange-400">
                    Category
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-orange-400">
                    Technology
                  </th>
                </tr>
              </thead>

              <tbody>
                {techStack.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10"
                  >
                    <td className="px-5 py-4 text-sm font-medium text-white">
                      {item.category}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-400">
                      {item.technology}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </section>

      </div>
    </div>
  );
};

export default ProjectDetails;