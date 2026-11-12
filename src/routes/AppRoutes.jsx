import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/home"
const Company = lazy(()=> import("../pages/company"))
const Sheryians = lazy(()=> import("../pages/sheryians"))
const Mypractice = lazy(()=> import("../pages/mypractice"))
import Contact from "../pages/contact"
import ProjectDetails from "../pages/ProjectDetails"
import { lazy, Suspense } from "react"


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
                    element:(
                        <Suspense fallback={<h1>Company Projects Are Loading...Waiting By Suspense</h1>}>
                            <Company />
                        </Suspense>
                    )
                },
                {
                    path:"sheryians",
                    element:(
                        <Suspense fallback={<h1>Sheriyans Projects Are Loading... Waiting By Suspense </h1>}>
                            <Sheryians />
                        </Suspense>
                    )
                },
                {
                    path:"mypractice",
                    element:(
                        <Suspense fallback={<h1>MyPractice Projects Are Loading.. Waiting By Suspense </h1>}>
                            <Mypractice />
                        </Suspense>
                    )
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