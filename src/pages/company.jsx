import { useContext } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";

const Company = () => {
    console.log("Company rendering.....")
  const {projects, loading, error} = useContext(ProjectsContext);

    if (loading) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-yellow-300 border-t-black"></div>

        <p className="text-lg font-medium text-gray-800 sm:text-xl">
          Loading Projects...
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Please wait while projects are loading.
        </p>
      </div>
    </div>
  );
}

if (error) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl">
          ⚠️
        </div>

        <h2 className="text-xl font-semibold text-red-700 sm:text-2xl">
          Something went wrong
        </h2>

        <p className="mt-2 break-words text-sm text-red-600 sm:text-base">
          {error}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-5 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105 hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

  const companyProjects = projects.filter((project)=>{
    return project.client === "Company"
  })

  console.log("All projects:", projects);
console.log("Filtered projects:", companyProjects);

  return (
   <div className="min-h-screen bg-[#0c0c0f] px-5 py-12 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
     <Link
          to="/"
          className="mb-8 inline-flex text-sm text-gray-400 transition hover:text-orange-400"
        >
          ← Back to Home
        </Link>
    <h1 className="mb-8 text-3xl font-bold text-white">
      Company Projects
    </h1>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {companyProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</div>
  )
}

export default Company