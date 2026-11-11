import { executeQuery } from "@datocms/cda-client"

const  token = import.meta.env.VITE_DATOCMS_API_TOKEN

export const fetchDatoCmsData = async (query)=>{

   if(!token){
     throw new Error("Datocms API Token is Missing!");
   }
     try {
        const data = await executeQuery(query,{token})
        return data;
     } catch (error) {
        console.error("Datocms Error", error);
        throw error
     }
}