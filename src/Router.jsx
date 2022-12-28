import { Routes, Route } from 'react-router-dom'
import { Goals } from './pages/Goals'
import { Areas } from './pages/Areas'
import { Origins } from './pages/Origins'
import { Skills } from './pages/Skills'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Goals />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/origins" element={<Origins />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  )
}