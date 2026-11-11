import { useEffect } from "react"
import { fetchDatoCmsData } from "./lib/datocms";

//This App component is only for testing DatoCMS GraphQL API

const App = () => {
  useEffect(()=>{
    const testConnection = async ()=>{
      const query = `
      {
      __typename
      }
      `;
      try {
        const result = await fetchDatoCmsData(query);
        console.log("datoCms connected successfully!");
        console.log(result);
      } catch (error) {
        console.log("Connection Failed!");
        console.error(error);
      }
    }
    testConnection();
  },[])
  return (
       <div>
      <h1>DatoCMS Connection Test</h1>
      <p>Check your browser console.</p>
    </div>
  )
}

export default App