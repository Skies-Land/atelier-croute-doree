// DEPENDENCIES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import { HomePage } from './pages/home-page'
import { ScrollUp } from './components/features/scroll-up/scroll-up'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ScrollUp />
    </BrowserRouter>
  )
}