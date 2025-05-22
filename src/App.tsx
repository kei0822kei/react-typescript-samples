import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AppLayout from "./routes/layout/AppLayout"
import Home from "./routes/Home"
import Visjs from "./routes/Visjs"
import NoMatch from "./routes/NoMatch"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/visjs" element={<Visjs />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
