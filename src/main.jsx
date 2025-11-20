import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddNotesPage from './pages/AddNotesPage.jsx'
import ListNotesPage from './pages/ListNotesPage.jsx'
import AddCoursesPage from './pages/AddCoursesPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/CreateNotes",
    Component: AddNotesPage
  },
  {
    path: "/ListNotes",
    Component: ListNotesPage
  },
  {
    path: "/AddCourses",
    Component: AddCoursesPage
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
