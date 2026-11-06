
import { useMemo, useState } from 'react'
import { useInventario } from '../context/InventarioContext'
import FiltroCategoria from '../components/FiltroCategoria'
import TarjetaArticulo from '../components/TarjetaArticulo'
import TablaInventario from '../components/TablaInventario'

function Inventario() {
  const { articulos } = useInventario()

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState('Todas')

  const [vista, setVista] = useState('tarjetas')

  const categorias = useMemo(
    () => [...new Set(articulos.map((articulo) => articulo.categoria))],
    [articulos]
  )

  const articulosFiltrados = articulos.filter((articulo) =>
    categoriaSeleccionada === 'Todas'
      ? true
      : articulo.categoria === categoriaSeleccionada
  )

  return (
    <section className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Inventario de artículos
        </h2>

        <p className="mt-2 text-gray-600">
          Consulta los productos y sus cantidades disponibles.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center">

        <FiltroCategoria
          categorias={categorias}
          categoriaSeleccionada={categoriaSeleccionada}
          onCambiar={setCategoriaSeleccionada}
        />

        <span className="font-semibold text-gray-700">
          Artículos encontrados: {articulosFiltrados.length}
        </span>

      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">

        <h3 className="text-xl font-bold text-gray-800">
          Productos disponibles
        </h3>

        <div className="flex gap-2">

          <button
            onClick={() => setVista('tarjetas')}
            className={`rounded-lg px-4 py-2 font-semibold transition ${
              vista === 'tarjetas'
                ? 'bg-green-800 text-white'
                : 'bg-white text-gray-700 hover:bg-green-100'
            }`}
          >
            ▦ Tarjetas
          </button>

          <button
            onClick={() => setVista('tabla')}
            className={`rounded-lg px-4 py-2 font-semibold transition ${
              vista === 'tabla'
                ? 'bg-green-800 text-white'
                : 'bg-white text-gray-700 hover:bg-green-100'
            }`}
          >
            ☷ Tabla
          </button>

        </div>

      </div>

      {articulosFiltrados.length > 0 ? (

        vista === 'tarjetas' ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articulosFiltrados.map((articulo) => (
              <TarjetaArticulo
                key={articulo.id}
                articulo={articulo}
              />
            ))}
          </div>

        ) : (

          <TablaInventario articulos={articulosFiltrados} />

        )

      ) : (

        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-semibold text-gray-700">
            No hay artículos en esta categoría.
          </p>
        </div>

      )}

    </section>
  )
}

export default Inventario
