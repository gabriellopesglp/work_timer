import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { History } from './pages/History/index'
import { Home } from './pages/Home/index'

export function Router() {
  return (
    <Routes>
      {/* work_timer (github pages deploy) */}
      <Route path="/work_timer" element={<DefaultLayout />}>
        <Route path="/work_timer" element={<Home />} />
        <Route path="/work_timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
