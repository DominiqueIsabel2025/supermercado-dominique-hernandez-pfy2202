
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext'

function AgregarArticulo() {
  const { dispatch } = useInventario()
  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
    nombre: '',
    marca: '',
    categoria: '',
    descripcion: '',
    precio: '',
    stock: '',
  })

  const [error, setError] = useState('')

  const manejarCambio = (e) => {
    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value,
    })
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    setError('')

    const { nombre, marca, categoria, descripcion, precio, stock } =
      formulario

    if (
      !nombre.trim() ||
      !marca.trim() ||
      !categoria ||
      !descripcion.trim() ||
      precio === '' ||
      stock === ''
    ) {
      setError('Completa todos los campos antes de guardar.')
      return
    }

    if (
      !Number.isFinite(Number(precio)) ||
      !Number.isInteger(Number(stock)) ||
      Number(precio) <= 0 ||
      Number(stock) < 0
    ) {
      setError('El precio debe ser mayor que cero y el stock un número entero igual o mayor que cero.')
      return
    }

    const nuevoArticulo = {
      id: crypto.randomUUID(),
      nombre: nombre.trim(),
      marca: marca.trim(),
      categoria,
      descripcion: descripcion.trim(),
      precio: Number(precio),
      stock: Number(stock),
    }

    dispatch({
      type: 'AGREGAR_ARTICULO',
      payload: nuevoArticulo,
    })

    navigate('/inventario')
  }

  return (
    <section className="mx-auto max-w-3xl">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Agregar nuevo artículo
        </h2>

        <p className="mt-2 text-gray-600">
          Completa la información para registrar un producto.
        </p>
      </div>

      <form
        onSubmit={manejarEnvio}
        className="space-y-6 rounded-2xl bg-white p-8 shadow-md"
      >

        <div>
          <label htmlFor="nombre" className="mb-2 block font-semibold text-gray-700">
            Nombre del artículo
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Ejemplo: Fideos espagueti"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div>
          <label htmlFor="marca" className="mb-2 block font-semibold text-gray-700">
            Marca
          </label>

          <input
            id="marca"
            name="marca"
            type="text"
            value={formulario.marca}
            onChange={manejarCambio}
            placeholder="Ejemplo: Carozzi"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div>
          <label htmlFor="categoria" className="mb-2 block font-semibold text-gray-700">
            Categoría
          </label>

          <select
            id="categoria"
            name="categoria"
            value={formulario.categoria}
            onChange={manejarCambio}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
          >
            <option value="">Selecciona una categoría</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Frutas y verduras">Frutas y verduras</option>
            <option value="Congelados">Congelados</option>
          </select>
        </div>

        <div>
          <label htmlFor="descripcion" className="mb-2 block font-semibold text-gray-700">
            Descripción
          </label>

          <textarea
            id="descripcion"
            name="descripcion"
            value={formulario.descripcion}
            onChange={manejarCambio}
            rows="3"
            placeholder="Describe las características del artículo"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          <div>
            <label htmlFor="precio" className="mb-2 block font-semibold text-gray-700">
              Precio (CLP)
            </label>

            <input
              id="precio"
              name="precio"
              type="number"
              min="1"
              step="1"
              value={formulario.precio}
              onChange={manejarCambio}
              placeholder="Ejemplo: 1500"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div>
            <label htmlFor="stock" className="mb-2 block font-semibold text-gray-700">
              Stock inicial
            </label>

            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={formulario.stock}
              onChange={manejarCambio}
              placeholder="Ejemplo: 20"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
            />
          </div>

        </div>

        {error && (
          <p role="alert" className="rounded-lg bg-red-100 p-3 text-sm font-medium text-red-700">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">

          <button
            type="submit"
            className="flex-1 rounded-lg bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-700"
          >
            Guardar artículo
          </button>

          <button
            type="button"
            onClick={() => navigate('/inventario')}
            className="rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-300"
          >
            Cancelar
          </button>

        </div>

      </form>
    </section>
  )
}

export default AgregarArticulo
