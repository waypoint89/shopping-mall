'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { products, type Product } from '@/lib/shop-data'

const STORAGE_KEY = 'odette-cart'

type CartItem = { id: string; quantity: number }

export type CartLine = Product & { quantity: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  ready: boolean
  addItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setItems(JSON.parse(saved))
    } catch {}
    setReady(true)
  }, [])

  // Writing before the initial load finishes would wipe the saved cart.
  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, ready])

  const addItem = useCallback((id: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id)
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { id, quantity: 1 }]
    })
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const value = useMemo(() => {
    const lines = items.flatMap((item) => {
      const product = products.find((p) => p.id === item.id)
      return product ? [{ ...product, quantity: item.quantity }] : []
    })
    return {
      lines,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      subtotal: lines.reduce((sum, line) => sum + line.price * line.quantity, 0),
      ready,
      addItem,
      updateQuantity,
      removeItem,
    }
  }, [items, ready, addItem, updateQuantity, removeItem])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
