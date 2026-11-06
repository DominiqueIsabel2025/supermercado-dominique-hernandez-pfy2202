
function ItemCarrito({ articulo, dispatch }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">
          {articulo.nombre}
        </h3>

        <p className="text-sm text-gray-500">
          Marca: {articulo.marca}
        </p>

        <p className="mt-2 font-semibold text-green-800">
          ${articulo.precio.toLocaleString('es-CL')} por unidad
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Subtotal: ${(articulo.precio * articulo.cantidad).toLocaleString('es-CL')}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">

        <button
          onClick={() =>
            dispatch({
              type: 'DISMINUIR_CANTIDAD',
              payload: articulo.id,
            })
          }
          className="h-10 w-10 rounded-lg bg-gray-200 text-xl font-bold text-gray-800 hover:bg-gray-300"
          aria-label={`Disminuir cantidad de ${articulo.nombre}`}
        >
          −
        </button>

        <span className="min-w-8 text-center text-lg font-bold">
          {articulo.cantidad}
        </span>

        <button
          onClick={() =>
            dispatch({
              type: 'AUMENTAR_CANTIDAD',
              payload: articulo.id,
            })
          }
          className="h-10 w-10 rounded-lg bg-green-800 text-xl font-bold text-white hover:bg-green-700"
          aria-label={`Aumentar cantidad de ${articulo.nombre}`}
        >
          +
        </button>

        <button
          onClick={() =>
            dispatch({
              type: 'ELIMINAR_CARRITO',
              payload: articulo.id,
            })
          }
          className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-200"
        >
          Eliminar
        </button>

      </div>
    </article>
  )
}

export default ItemCarrito
