"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/lib/store"
import { removeFromCart, updateQuantity } from "@/lib/store/cartSlice"

export default function ShoppingCart() {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  className="bg-gray-200 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  className="bg-gray-200 px-2 py-1 rounded-r"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  )
}

