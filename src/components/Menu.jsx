
import { NavLink } from 'react-router-dom'

function Menu() {
  const enlaces = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Inventario', ruta: '/inventario' },
    { nombre: 'Agregar artículo', ruta: '/agregar' },
    { nombre: 'Carrito', ruta: '/carrito' },
  ]

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <h1 className="text-2xl font-bold">
          Supermercado
        </h1>

        <div className="flex flex-wrap gap-3">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              end={enlace.ruta === '/'}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white text-green-800'
                    : 'text-white hover:bg-green-700'
                }`
              }
            >
              {enlace.nombre}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Menu
