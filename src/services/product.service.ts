import apiClient from '@/lib/api-client';
import { StaticImageData } from "next/image";

export interface Sponsor {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: StaticImageData;
  icon?: string;
  _count?: {
    products: number;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: StaticImageData;
  icon?: string;
  _count?: {
    products: number;
  };
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: StaticImageData;
  icon?: string;
  _count?: {
    products: number;
  };
}

export interface ProductT {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  salePrice?: number;
  productType: string;
  image: StaticImageData;
  type?: StaticImageData;
  categoryId?: string;
  category?: Category;
  brand?: string;
  specifications?: any[];
  stock: number;
  rating?: number;
  tags?: string[];
  reviewCount?: number;
  averageRating?: number;
  isFeatured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  salePrice?: number;
  productType: string;
  images: string[];
  categoryId: string;
  category: Category;
  brand?: string;
  specifications?: any[];
  stock: number;
  rating?: number;
  reviewCount?: number;
  averageRating?: number;
  isFeatured?: boolean;
}

export interface OrderProd {
  id: number,
  name: string;
  title?: string;
  date: string;
  price: string;
  initilStatus?: string;
  currentStatus?: string;
  finalStatus?: string;
  img: StaticImageData;
  payment?: string;
  paymethod: string;
}

export interface AIRecommendationRequest {
  userId?: string;
  category?: string;
  priceRange?: { min: number; max: number };
  currentProductId?: string;
  limit?: number;
}

export interface AIRecommendationResponse {
  recommendations: Product[];
  reason: string;
}

class ProductService {
  async getProducts(params?: {
    page?: number;
    limit?: number;
    categoryId?: string;
    subcategoryId?: string;
    productType?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    isFeatured?: boolean;
  }): Promise<{ data: Product[]; pagination: { page: number; limit: number; total: number; totalPages: number } }> {
    return await apiClient.get<any>(
      '/products',
      { params }
    );
  }

  async getProductById(id: string): Promise<Product> {
    return await apiClient.get<Product>(`/products/${id}`);
  }

  async searchProducts(query: string): Promise<Product[]> {
    return await apiClient.get<Product[]>('/products/search', { params: { query } });
  }

  async getCategories(): Promise<Category[]> {
    return await apiClient.get<Category[]>('/products/categories/all');
  }

  async getRecommendations(data?: AIRecommendationRequest): Promise<AIRecommendationResponse> {
    return await apiClient.post<AIRecommendationResponse>('/products/ai-recommendations', data || {});
  }

  // Admin Methods
  async createProduct(data: any): Promise<Product> {
    return await apiClient.post<Product>('/products', data);
  }

  async updateProduct(id: string, data: any): Promise<Product> {
    return await apiClient.put<Product>(`/products/${id}`, data);
  }

  async deleteProduct(id: string): Promise<{ success: boolean }> {
    return await apiClient.delete<{ success: boolean }>(`/products/${id}`);
  }
}

export const productService = new ProductService();
