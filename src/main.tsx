import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/App.tsx'
import "normalize.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
