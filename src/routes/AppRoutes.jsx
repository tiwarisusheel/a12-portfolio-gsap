import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/home"
import Company from "../pages/company"
import Sheryians from "../pages/sheryians"
import Mypractice from "../pages/mypractice"
import Contact from "../pages/contact"
import ProjectDetails from "../pages/ProjectDetails"

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"company",
                    element:<Company />
                },
                {
                    path:"sheryians",
                    element:<Sheryians />
                },
                {
                    path:"mypractice",
                    element:<Mypractice />
                },
                {
                    path:"contact",
                    element:<Contact />
                },
                {
                    path:"project/:slug",
                    element:<ProjectDetails />
                },
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes