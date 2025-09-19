import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Transacciones from './pages/Transacciones'
import Presupuestos from './pages/Presupuestos'
import Ahorros from './pages/Ahorros'
import Informes from './pages/Informes'
import Cuentas from './pages/Cuentas'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transacciones" element={<Transacciones />} />
          <Route path="/presupuestos" element={<Presupuestos />} />
          <Route path="/ahorros" element={<Ahorros />} />
          <Route path="/informes" element={<Informes />} />
          <Route path="/cuentas" element={<Cuentas />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
