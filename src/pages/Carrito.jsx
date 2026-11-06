
import { Link } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext'
import ItemCarrito from '../components/ItemCarrito'

function Carrito() {
  const { carrito, dispatch } = useInventario()

  const total = carrito.reduce(
    (acumulado, articulo) =>
      acumulado + articulo.precio * articulo.cantidad,
    0
  )

  const cantidadTotal = carrito.reduce(
    (acumulado, articulo) => acumulado + articulo.cantidad,
    0
  )

  return (
    <section className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Carrito de compras
        </h2>

        <p className="mt-2 text-gray-600">
          Administra los artículos que seleccionaste.
        </p>
      </div>

      {carrito.length === 0 ? (

        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <div className="mb-4 text-5xl">🛒</div>

          <h3 className="mb-3 text-xl font-bold text-gray-800">
            Tu carrito está vacío
          </h3>

          <p className="mb-6 text-gray-600">
            Agrega artículos desde nuestro inventario.
          </p>

          <Link
            to="/inventario"
            className="inline-block rounded-lg bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Ir al inventario
          </Link>
        </div>

      ) : (

        <>
          <div className="space-y-4">
            {carrito.map((articulo) => (
              <ItemCarrito
                key={articulo.id}
                articulo={articulo}
                dispatch={dispatch}
              />
            ))}
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-bold text-gray-800">
              Resumen de compra
            </h3>

            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="text-gray-600">
                Cantidad de unidades
              </span>

              <span className="font-semibold">
                {cantidadTotal}
              </span>
            </div>

            <div className="flex justify-between pt-4">
              <span className="text-lg font-bold text-gray-800">
                Total
              </span>

              <span className="text-2xl font-bold text-green-800">
                ${total.toLocaleString('es-CL')}
              </span>
            </div>

            <Link
              to="/inventario"
              className="mt-6 block rounded-lg bg-green-800 px-6 py-3 text-center font-semibold text-white hover:bg-green-700"
            >
              Seguir comprando
            </Link>
          </div>
        </>

      )}

    </section>
  )
}

export default Carrito
