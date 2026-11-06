
import { createContext, useContext, useEffect, useReducer } from 'react'

import {
  inventarioInicial,
  inventarioReducer,
} from '../reducer/inventarioReducer'

const InventarioContext = createContext(null)

function obtenerEstadoInicial() {
  try {
    const datosGuardados = localStorage.getItem('supermercadoEstado')

    if (datosGuardados) {
      return JSON.parse(datosGuardados)
    }
  } catch (error) {
    console.error('No se pudieron recuperar los datos:', error)
  }

  return inventarioInicial
}

export function InventarioProvider({ children }) {
  const [state, dispatch] = useReducer(
    inventarioReducer,
    undefined,
    obtenerEstadoInicial
  )

  useEffect(() => {
    try {
      localStorage.setItem('supermercadoEstado', JSON.stringify(state))
    } catch (error) {
      console.error('No se pudieron guardar los datos:', error)
    }
  }, [state])

  return (
    <InventarioContext.Provider
      value={{
        articulos: state.articulos,
        carrito: state.carrito,
        dispatch,
      }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  const context = useContext(InventarioContext)

  if (!context) {
    throw new Error(
      'useInventario debe utilizarse dentro de InventarioProvider'
    )
  }

  return context
}
