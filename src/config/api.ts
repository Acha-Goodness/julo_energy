// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1000/api/v1',
  TIMEOUT: 30000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CHANGE_PASSWORD: '/auth/change-password',
  },
  
  // Products
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: string) => `/products/${id}`,
    CATEGORIES: '/products/categories',
    SEARCH: '/products/search',
    RECOMMENDATIONS: '/products/recommendations',
  },
  
  // Cart
  CART: {
    GET: '/cart',
    ADD: '/cart/items',
    UPDATE: (itemId: string) => `/cart/items/${itemId}`,
    REMOVE: (itemId: string) => `/cart/items/${itemId}`,
    CLEAR: '/cart/clear',
  },
  
  // Orders
  ORDERS: {
    CREATE: '/orders',
    LIST: '/orders',
    DETAIL: (id: string) => `/orders/${id}`,
    CANCEL: (id: string) => `/orders/${id}/cancel`,
    STATUS: (id: string) => `/orders/${id}/status`,
  },
  
  // Payments
  PAYMENTS: {
    INITIALIZE: '/payments/initialize',
    VERIFY: '/payments/verify',
    VERIFY_BY_REFERENCE: (reference: string) => `/payments/verify/${reference}`,
    TRANSACTIONS: '/payments/transactions',
  },
  
  // Financing
  FINANCING: {
    CALCULATE: '/financing/calculate-eligibility',
    APPLY: '/financing/apply',
    LIST: '/financing/applications',
    DETAIL: (id: string) => `/financing/applications/${id}`,
    REPAYMENTS: (id: string) => `/financing/applications/${id}/repayments`,
  },
  
  // User Profile
  PROFILE: {
    GET: '/profile',
    UPDATE: '/profile',
    UPLOAD_AVATAR: '/profile/avatar',
    ORDERS: '/profile/orders',
    STATS: '/profile/stats',
  },
  
  // Reviews
  REVIEWS: {
    CREATE: '/reviews',
    PRODUCT: (productId: string) => `/reviews/product/${productId}`,
    USER: '/reviews/user',
  },
  
  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    UNREAD_COUNT: '/notifications/unread-count',
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/read-all',
    PREFERENCES: '/notifications/preferences',
  },
};

// Response Types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}
