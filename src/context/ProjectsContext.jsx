import { createContext, useEffect, useState } from "react";
import { fetchDatoCmsData } from "../lib/datocms";
import { GET_PROJECTS } from "../graphql/projectQueries";

export const ProjectsContext = createContext();

export const ProjectProvider = ({children})=>{
    const [projects, setProjects] =  useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(projects)
    useEffect(()=>{
        const getProjects = async ()=>{
            try {
               const data = await fetchDatoCmsData(GET_PROJECTS);
               setProjects(data.allProjects)
            } catch (error) {
               setError(error.message);
            } finally{
               setLoading(false);
            }
        }
        getProjects()
    },[])

    return(
        <ProjectsContext.Provider value={{projects, loading, error}}>
            {children}
        </ProjectsContext.Provider>
    )
}