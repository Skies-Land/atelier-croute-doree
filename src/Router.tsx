// DEPENDENCIES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import { HomePage } from './pages/HomePage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}