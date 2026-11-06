
import { Link, useParams } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext'

function DetalleArticulo() {
  const { id } = useParams()
  const { articulos, dispatch } = useInventario()

  const articulo = articulos.find(
    (item) => item.id === id
  )

  if (!articulo) {
    return (
      <section className="rounded-xl bg-white p-8 text-center shadow">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Artículo no encontrado
        </h2>

        <Link
          to="/inventario"
          className="font-semibold text-green-800 underline"
        >
          Volver al inventario
        </Link>
      </section>
    )
  }

  const agregarAlCarrito = () => {
    dispatch({
      type: 'AGREGAR_CARRITO',
      payload: articulo.id,
    })
  }

  return (
    <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">

      <Link
        to="/inventario"
        className="mb-6 inline-block font-semibold text-green-800 hover:underline"
      >
        ← Volver al inventario
      </Link>

      <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
        {articulo.categoria}
      </span>

      <h2 className="mb-3 text-3xl font-bold text-gray-800">
        {articulo.nombre}
      </h2>

      <div className="space-y-4 text-gray-600">

        <p>
          <strong>Marca:</strong> {articulo.marca}
        </p>

        <p>
          <strong>Descripción:</strong> {articulo.descripcion}
        </p>

        <p>
          <strong>Precio:</strong>{' '}
          <span className="text-xl font-bold text-green-800">
            ${articulo.precio.toLocaleString('es-CL')}
          </span>
        </p>

        <p>
          <strong>Stock disponible:</strong>{' '}
          <span className={articulo.stock > 0 ? 'font-bold text-green-700' : 'font-bold text-red-600'}>
            {articulo.stock} unidades
          </span>
        </p>

      </div>

      <button
        onClick={agregarAlCarrito}
        disabled={articulo.stock <= 0}
        className="mt-8 w-full rounded-lg bg-green-800 px-6 py-4 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {articulo.stock > 0
          ? 'Agregar al carrito'
          : 'Producto sin stock'}
      </button>

    </section>
  )
}

export default DetalleArticulo
