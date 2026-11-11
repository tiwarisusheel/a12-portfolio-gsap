import { useContext } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";

const Mypractice = () => {
  console.log("myPractice rendering.....")
  const {projects, loading, error} = useContext(ProjectsContext);

  if(loading) return <p>Loading Projects........</p>
  if(error) return <p>Error: {error}</p>

  const myPractice = projects.filter((project)=>{
    return project.client === "Self"
  })

  console.log("All projects:", projects);
console.log("Filtered projects:", myPractice);

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
      My Practice Projects
    </h1>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {myPractice.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</div>
  )
}

export default Mypractice