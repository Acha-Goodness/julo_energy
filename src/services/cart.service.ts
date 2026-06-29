import { apiClient } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  description: string;
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    stock: number;
    description: string;
  };
}

export interface Cart {
  id: string;
  items: CartItem[];
  total: number;
  subtotal: number;
}

export interface AddToCartData {
  productId: string;
  quantity: number;
}

export interface UpdateCartItemData {
  quantity: number;
}

class CartService {
  async getCart(): Promise<Cart> {
    return apiClient.get<Cart>(API_ENDPOINTS.CART.GET);
  }

  async addToCart(data: AddToCartData): Promise<Cart> {
    return apiClient.post<Cart>(API_ENDPOINTS.CART.ADD, data);
  }

  async updateCartItem(itemId: string, data: UpdateCartItemData): Promise<Cart> {
    return apiClient.patch<Cart>(
      API_ENDPOINTS.CART.UPDATE(itemId),
      data
    );
  }

  async removeFromCart(itemId: string): Promise<Cart> {
    return apiClient.delete<Cart>(API_ENDPOINTS.CART.REMOVE(itemId));
  }

  async clearCart(): Promise<{ message: string }> {
    return apiClient.post(API_ENDPOINTS.CART.CLEAR);
  }
}

export const cartService = new CartService();
export default cartService;
