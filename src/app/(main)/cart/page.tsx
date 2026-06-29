'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { cartService, type CartItem } from '@/services/cart.service';
import { Loader2 } from 'lucide-react';
import Cart from '../products/[id]/cart';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [removing, setRemoving] = useState<string | null>(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await cartService.getCart();
      setCartItems(data.items || []);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    try {
      setUpdating(productId);
      await cartService.updateCartItem(productId, { quantity: newQuantity });
      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    } catch (error) {
      console.error('Failed to update quantity:', error);
    } finally {
      setUpdating(null);
    }
  };

  const removeItem = async (productId: string) => {
    try {
      setRemoving(productId);
      await cartService.removeFromCart(productId);
      setCartItems((prev) => prev.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error('Failed to remove item:', error);
    } finally {
      setRemoving(null);
    }
  };

  const clearCart = async () => {
    try {
      await cartService.clearCart();
      setCartItems([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 100000 ? 0 : 5000; // Free shipping over ₦100,000
  const tax = subtotal * 0.075; // 7.5% VAT
  const total = subtotal + shipping + tax;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="my-3">
          <AnimatePresence>
            <Cart />
          </AnimatePresence>
    </div>
  );
}
