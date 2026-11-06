
import AgregarArticulo from './pages/AgregarArticulo'
import Carrito from './pages/Carrito'
import DetalleArticulo from './pages/DetalleArticulo'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Inicio from './pages/Inicio'
import Inventario from './pages/Inventario'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />

      <main className="mx-auto max-w-7xl p-6">
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/inventario" element={<Inventario />} />

          <Route path="/inventario/:id" element={<DetalleArticulo />} />

          <Route path="/agregar" element={<AgregarArticulo />} />

          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
