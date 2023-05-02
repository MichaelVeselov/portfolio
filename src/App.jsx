import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SingleProjectPage } from './pages/SingleProjectPage';
import { SkillPage } from './pages/SkillPage';
import { WorkExperiencePage } from './pages/WorkExperiencePage';
import { EducationPage } from './pages/EducationPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: '',
      children: [
        { index: true, element: <HomePage /> },
        { path: '/projects', element: <ProjectsPage /> },
        { path: '/project/:id', element: <SingleProjectPage /> },
        { path: '/skills', element: <SkillPage /> },
        { path: '/experience', element: <WorkExperiencePage /> },
        { path: '/education', element: <EducationPage /> },
        /* { path: '*', element: <NotFoundPage /> }, */
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
