import { apiClient } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: 'CUSTOMER' | 'VENDOR' | 'ADMIN';
}

export interface LoginData {
  email: string;
  password: string;
}

export interface VerificationData {
  nin: string,
  bvn: string
}

export interface AddressData {
  name: string,
  phoneNumber: string;
  address: string,
  localGovernment: string
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  emailVerified: boolean;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  newPassword: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

class AuthService {
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );

    if (response.accessToken && response.refreshToken) {
      apiClient.setTokens(response.accessToken, response.refreshToken);
    }

    return response;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );

    if (response.accessToken && response.refreshToken) {
      apiClient.setTokens(response.accessToken, response.refreshToken);
    }

    return response;
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
      apiClient.clearTokens();
    }
  }

  async getProfile(): Promise<{ user: User }> {
    return apiClient.get(API_ENDPOINTS.AUTH.PROFILE);
  }

  async forgotPassword(data: ForgotPasswordData): Promise<{ message: string }> {
    return apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data);
  }

  async resetPassword(data: ResetPasswordData): Promise<{ message: string }> {
    return apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, data);
  }

  async verifyEmail(data: { token: string }): Promise<{ message: string; user: User }> {
    return apiClient.post('/auth/verify-email', data);
  }

  async changePassword(data: ChangePasswordData): Promise<{ message: string }> {
    return apiClient.post(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, data);
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('accessToken');
  }

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  setCurrentUser(user: User) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearCurrentUser() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('user');
  }
}

export const authService = new AuthService();
export default authService;
