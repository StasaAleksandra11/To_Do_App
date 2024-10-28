import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import IntroManage from './components/IntroManageComponent.jsx'
import IntroCreateComponent from './components/IntroCreateComponent.jsx'
import IntroOrganizeComponent from './components/IntroOrganizeComponent.jsx'

import IntroStartComponent from './components/IntroStartComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/intro',
        element: <IntroManage/>
      },
      {
        path: '/create',
        element: <IntroCreateComponent/>
      },
      {
        path: '/organize',
        element: <IntroOrganizeComponent/>
      },
      {
        path: '/started',
        element: <IntroStartComponent/>
          }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
