import { useContext } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";

const Company = () => {
    console.log("Company rendering.....")
  const {projects, loading, error} = useContext(ProjectsContext);

  if(loading) return <p>Loading Projects........</p>
  if(error) return <p>Error: {error}</p>

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