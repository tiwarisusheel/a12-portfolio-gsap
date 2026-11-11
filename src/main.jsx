import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { ProjectProvider } from './context/ProjectsContext.jsx'


createRoot(document.getElementById('root')).render(
    <ProjectProvider>
     <AppRoutes />
    </ProjectProvider>
)
