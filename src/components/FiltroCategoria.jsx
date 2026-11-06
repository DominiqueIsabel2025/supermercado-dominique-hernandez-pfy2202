
function FiltroCategoria({ categorias, categoriaSeleccionada, onCambiar }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <label
        htmlFor="categoria"
        className="font-semibold text-gray-700"
      >
        Filtrar por categoría:
      </label>

      <select
        id="categoria"
        value={categoriaSeleccionada}
        onChange={(e) => onCambiar(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
      >
        <option value="Todas">Todas las categorías</option>

        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategoria
