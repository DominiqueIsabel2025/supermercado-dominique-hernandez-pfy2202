
import { Link } from 'react-router-dom'

function TablaInventario({ articulos }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="w-full min-w-[750px] border-collapse text-left">
        <thead className="bg-green-800 text-white">
          <tr>
            <th className="px-5 py-4">Artículo</th>
            <th className="px-5 py-4">Marca</th>
            <th className="px-5 py-4">Categoría</th>
            <th className="px-5 py-4">Precio</th>
            <th className="px-5 py-4">Stock</th>
            <th className="px-5 py-4">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {articulos.map((articulo) => (
            <tr
              key={articulo.id}
              className="border-b border-gray-200 transition hover:bg-green-50"
            >
              <td className="px-5 py-4 font-semibold text-gray-800">
                {articulo.nombre}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {articulo.marca}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {articulo.categoria}
              </td>

              <td className="px-5 py-4 font-semibold text-green-800">
                ${articulo.precio.toLocaleString('es-CL')}
              </td>

              <td className="px-5 py-4">
                <span className={
                  articulo.stock > 0
                    ? 'font-semibold text-green-700'
                    : 'font-semibold text-red-600'
                }>
                  {articulo.stock}
                </span>
              </td>

              <td className="px-5 py-4">
                <Link
                  to={`/inventario/${articulo.id}`}
                  className="font-semibold text-green-800 hover:underline"
                >
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaInventario
