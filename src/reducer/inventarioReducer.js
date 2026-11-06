
const inventarioInicial = {
  articulos: [
    {
      id: '1',
      nombre: 'Arroz grano largo',
      marca: 'Tucapel',
      categoria: 'Alimentos',
      descripcion: 'Arroz grano largo de 1 kg.',
      precio: 1590,
      stock: 20,
    },
    {
      id: '2',
      nombre: 'Leche entera',
      marca: 'Colun',
      categoria: 'Lácteos',
      descripcion: 'Leche entera de 1 litro.',
      precio: 1190,
      stock: 15,
    },
    {
      id: '3',
      nombre: 'Bebida cola',
      marca: 'Coca-Cola',
      categoria: 'Bebidas',
      descripcion: 'Bebida cola de 1.5 litros.',
      precio: 1990,
      stock: 12,
    },
    {
      id: '4',
      nombre: 'Aceite vegetal',
      marca: 'Chef',
      categoria: 'Alimentos',
      descripcion: 'Aceite vegetal de 900 ml.',
      precio: 2490,
      stock: 10,
    },
    {
      id: '5',
      nombre: 'Detergente',
      marca: 'Ariel',
      categoria: 'Limpieza',
      descripcion: 'Detergente para ropa de 1 kg.',
      precio: 3990,
      stock: 8,
    },
    {
      id: '6',
      nombre: 'Yogur natural',
      marca: 'Soprole',
      categoria: 'Lácteos',
      descripcion: 'Yogur natural de 125 g.',
      precio: 590,
      stock: 18,
    },
    {
      id: '7',
      nombre: 'Agua mineral',
      marca: 'Cachantun',
      categoria: 'Bebidas',
      descripcion: 'Agua mineral sin gas de 1.5 litros.',
      precio: 990,
      stock: 25,
    },
    {
      id: '8',
      nombre: 'Lavalozas',
      marca: 'Quix',
      categoria: 'Limpieza',
      descripcion: 'Lavalozas líquido de 750 ml.',
      precio: 1790,
      stock: 14,
    },
  ],
  carrito: [],
}

function inventarioReducer(state, action) {
  switch (action.type) {

    // Registrar un nuevo artículo evitando identificadores duplicados
    case 'AGREGAR_ARTICULO': {
      const existe = state.articulos.some(
        (item) => item.id === action.payload.id
      )

      if (existe) return state

      return {
        ...state,
        articulos: [...state.articulos, action.payload],
      }
    }

    // Agregar un artículo al carrito y descontar una unidad del stock
    case 'AGREGAR_CARRITO': {
      const articulo = state.articulos.find(
        (item) => item.id === action.payload
      )

      if (!articulo || articulo.stock <= 0) return state

      const existe = state.carrito.find(
        (item) => item.id === articulo.id
      )

      return {
        articulos: state.articulos.map((item) =>
          item.id === articulo.id
            ? { ...item, stock: item.stock - 1 }
            : item
        ),

        carrito: existe
          ? state.carrito.map((item) =>
              item.id === articulo.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            )
          : [...state.carrito, { ...articulo, cantidad: 1 }],
      }
    }

    // Aumentar cantidad verificando que exista stock disponible
    case 'AUMENTAR_CANTIDAD': {
      const articulo = state.articulos.find(
        (item) => item.id === action.payload
      )

      const existeEnCarrito = state.carrito.some(
        (item) => item.id === action.payload
      )

      if (!articulo || !existeEnCarrito || articulo.stock <= 0) {
        return state
      }

      return {
        articulos: state.articulos.map((item) =>
          item.id === articulo.id
            ? { ...item, stock: item.stock - 1 }
            : item
        ),

        carrito: state.carrito.map((item) =>
          item.id === articulo.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ),
      }
    }

    // Disminuir cantidad y devolver una unidad al inventario
    case 'DISMINUIR_CANTIDAD': {
      const articulo = state.carrito.find(
        (item) => item.id === action.payload
      )

      if (!articulo) return state

      return {
        articulos: state.articulos.map((item) =>
          item.id === articulo.id
            ? { ...item, stock: item.stock + 1 }
            : item
        ),

        carrito: state.carrito
          .map((item) =>
            item.id === articulo.id
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          )
          .filter((item) => item.cantidad > 0),
      }
    }

    // Eliminar artículo del carrito y restaurar todas sus unidades
    case 'ELIMINAR_CARRITO': {
      const articulo = state.carrito.find(
        (item) => item.id === action.payload
      )

      if (!articulo) return state

      return {
        articulos: state.articulos.map((item) =>
          item.id === articulo.id
            ? { ...item, stock: item.stock + articulo.cantidad }
            : item
        ),

        carrito: state.carrito.filter(
          (item) => item.id !== action.payload
        ),
      }
    }

    default:
      return state
  }
}

export { inventarioInicial, inventarioReducer }
