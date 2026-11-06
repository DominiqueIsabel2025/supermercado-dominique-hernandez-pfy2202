
import { Link } from 'react-router-dom'

function TarjetaArticulo({ articulo }) {
  return (
    <article className="flex flex-col rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
          {articulo.categoria}
        </span>

        <span
          className={`text-sm font-bold ${
            articulo.stock > 0 ? 'text-green-700' : 'text-red-600'
          }`}
        >
          {articulo.stock > 0
            ? `Stock: ${articulo.stock}`
            : 'Sin stock'}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-800">
        {articulo.nombre}
      </h3>

      <p className="mb-2 text-gray-600">
        Marca: {articulo.marca}
      </p>

      <p className="mb-4 flex-grow text-sm text-gray-500">
        {articulo.descripcion}
      </p>

      <p className="mb-4 text-xl font-bold text-green-800">
        ${articulo.precio.toLocaleString('es-CL')}
      </p>

      <Link
        to={`/inventario/${articulo.id}`}
        className="rounded-lg bg-green-800 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700"
      >
        Ver detalle
      </Link>
    </article>
  )
}

export default TarjetaArticulo
