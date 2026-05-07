import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { getProduct } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'delovane_cart_v1'

// État initial : tableau de { productId, quantity }
function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(i => i.productId === action.productId)
      if (existing) {
        return state.map(i =>
          i.productId === action.productId
            ? { ...i, quantity: i.quantity + (action.quantity || 1) }
            : i
        )
      }
      return [...state, { productId: action.productId, quantity: action.quantity || 1 }]
    }
    case 'REMOVE':
      return state.filter(i => i.productId !== action.productId)
    case 'SET_QTY': {
      const qty = Math.max(0, action.quantity)
      if (qty === 0) return state.filter(i => i.productId !== action.productId)
      return state.map(i => i.productId === action.productId ? { ...i, quantity: qty } : i)
    }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, loadInitial)
  const [open, setOpen] = useState(false)

  // Persistance localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  // Données enrichies (produit + qty + sous-total)
  const enriched = items
    .map(({ productId, quantity }) => {
      const product = getProduct(productId)
      if (!product) return null
      return {
        productId,
        product,
        quantity,
        subtotal: (product.price || 0) * quantity,
      }
    })
    .filter(Boolean)

  const totalQty = enriched.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = enriched.reduce((sum, i) => sum + i.subtotal, 0)

  const value = {
    items: enriched,
    totalQty,
    totalPrice,
    open,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    toggleCart: () => setOpen(o => !o),
    addItem: (productId, quantity = 1) => {
      dispatch({ type: 'ADD', productId, quantity })
      setOpen(true)
    },
    removeItem: (productId) => dispatch({ type: 'REMOVE', productId }),
    setQuantity: (productId, quantity) => dispatch({ type: 'SET_QTY', productId, quantity }),
    clear: () => dispatch({ type: 'CLEAR' }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
