import apiClient from "@/lib/api-client";

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: string;
  shippingAddress: ShippingAddress;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
  };
  quantity: number;
  price: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
}

export type OrderStatus = 
  | 'PENDING'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED';

export interface CreateOrderData {
  shippingAddress: ShippingAddress;
  paymentMethod: 'CARD' | 'BANK_TRANSFER' | 'WALLET';
}

export interface OrdersResponse {
  data: Order[];
  total: number;
  page: number;
  limit: number;
}

class OrderService {
  async createOrder(data: CreateOrderData): Promise<Order> {
    return await apiClient.post<Order>('/orders', data);
  }

  async getOrders(params?: { page?: number; limit?: number }): Promise<OrdersResponse> {
    return await apiClient.get<OrdersResponse>('/orders', { params });
  }

  async getOrderById(id: string): Promise<Order> {
    return await apiClient.get<Order>(`/orders/${id}`);
  }

  async cancelOrder(id: string): Promise<Order> {
    return await apiClient.put<Order>(`/orders/${id}/cancel`);
  }

  // Admin Methods
  async getAllOrders(params?: { page?: number; limit?: number; status?: string; search?: string }): Promise<OrdersResponse> {
    return await apiClient.get<OrdersResponse>('/admin/orders', { params });
  }

  async updateOrderStatus(id: string, data: { status: OrderStatus; paymentStatus?: string; notes?: string }): Promise<Order> {
    return await apiClient.put<Order>(`/admin/orders/${id}/status`, data);
  }
}

export const orderService = new OrderService();
