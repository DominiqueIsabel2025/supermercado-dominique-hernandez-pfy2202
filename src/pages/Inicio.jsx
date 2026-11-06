
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="space-y-10">

      {/* Presentación */}
      <div className="rounded-2xl bg-green-800 px-8 py-14 text-white shadow-lg md:px-14">
        <p className="mb-3 font-semibold uppercase tracking-widest text-green-200">
          Gestión de supermercado
        </p>

        <h2 className="mb-5 text-4xl font-bold md:text-5xl">
          ¡Bienvenido a nuestro supermercado!
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-green-100">
          Administra tus artículos, consulta el inventario
          y gestiona tus compras desde un solo lugar.
        </p>

        <Link
          to="/inventario"
          className="inline-block rounded-lg bg-white px-6 py-3 font-bold text-green-800 transition hover:bg-green-100"
        >
          Ver inventario
        </Link>
      </div>

      {/* Accesos principales */}
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-800">
          ¿Qué deseas hacer?
        </h3>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            to="/inventario"
            className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">🛒</div>
            <h4 className="mb-2 text-xl font-bold text-gray-800">
              Inventario
            </h4>
            <p className="text-gray-600">
              Consulta los artículos disponibles y sus categorías.
            </p>
          </Link>

          <Link
            to="/agregar"
            className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">📦</div>
            <h4 className="mb-2 text-xl font-bold text-gray-800">
              Agregar artículos
            </h4>
            <p className="text-gray-600">
              Registra nuevos productos en el supermercado.
            </p>
          </Link>

          <Link
            to="/carrito"
            className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">🧺</div>
            <h4 className="mb-2 text-xl font-bold text-gray-800">
              Carrito de compras
            </h4>
            <p className="text-gray-600">
              Revisa y administra los artículos seleccionados.
            </p>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Inicio
