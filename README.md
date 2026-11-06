
# Sistema de Gestión de Supermercado

## Descripción del proyecto

Aplicación web desarrollada con React que permite gestionar el inventario de un supermercado y administrar un carrito de compras mediante una interfaz intuitiva y adaptable a distintos dispositivos.

El sistema permite registrar productos, consultar artículos disponibles, filtrar por categorías, visualizar detalles y gestionar las cantidades de productos seleccionados.

## Funcionalidades principales

- Visualización del inventario mediante tarjetas y tabla.
- Filtrado dinámico de artículos por categoría.
- Registro de nuevos productos.
- Validación de los datos ingresados en el formulario.
- Visualización del detalle de cada artículo.
- Incorporación de productos al carrito de compras.
- Descuento automático del stock al agregar productos.
- Aumento y disminución de cantidades en el carrito.
- Actualización automática del inventario al modificar el carrito.
- Eliminación de productos del carrito.
- Persistencia de inventario y carrito mediante localStorage.
- Diseño responsive para dispositivos móviles y escritorio.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- Context API
- useReducer
- useState y useEffect
- Tailwind CSS
- HTML5

## Estructura del proyecto

```text
src/
├── components/
│   ├── FiltroCategoria.jsx
│   ├── ItemCarrito.jsx
│   ├── Menu.jsx
│   ├── TarjetaArticulo.jsx
│   └── TablaInventario.jsx
├── context/
│   └── InventarioContext.jsx
├── pages/
│   ├── Inicio.jsx
│   ├── AgregarArticulo.jsx
│   ├── Inventario.jsx
│   ├── DetalleArticulo.jsx
│   └── Carrito.jsx
├── reducer/
│   └── inventarioReducer.js
├── App.jsx
├── main.jsx
└── index.css
```

## Instalación y ejecución

### Requisitos previos

- Node.js
- npm

### Pasos

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Ingresar a la carpeta del proyecto:

```bash
cd NOMBRE_DEL_REPOSITORIO
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección local indicada por Vite.

## Compilación para producción

Para generar la versión optimizada de la aplicación:

```bash
npm run build
```

Los archivos de producción se generan en la carpeta `dist`.

## Persistencia de datos

La aplicación utiliza localStorage para conservar el inventario y el carrito de compras en el navegador, incluso después de actualizar la página.

## Autora

Dominique Hernandez Vallejos

## Institución

Duoc UC

## Asignatura

Desarrollo Frontend II
