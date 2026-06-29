import { apiClient } from '@/lib/api-client';

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  avatar?: string;
  profileImage?: string;
  role: string;
  status: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
}

export interface UpdateProfileData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface UserStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  totalSpent: number;
}

class UserService {
  async getProfile(): Promise<UserProfile> {
    return await apiClient.get<UserProfile>('/auth/profile');
  }

  async updateProfile(data: UpdateProfileData): Promise<UserProfile> {
    return await apiClient.put<UserProfile>('/user/profile', data);
  }

  async getUserStats(): Promise<UserStats> {
    return await apiClient.get<UserStats>('/user/stats');
  }

  // Admin Methods
  async getUsers(params?: { page?: number; limit?: number; role?: string; search?: string }): Promise<{ data: UserProfile[]; total: number; page: number; limit: number }> {
    return await apiClient.get<{ data: UserProfile[]; total: number; page: number; limit: number }>('/admin/users', { params });
  }

  async getUserById(id: string): Promise<UserProfile> {
    return await apiClient.get<UserProfile>(`/admin/users/${id}`);
  }

  async createUser(data: any): Promise<UserProfile> {
    return await apiClient.post<UserProfile>('/admin/users', data);
  }

  async updateUserRole(id: string, data: { role: string; status?: string }): Promise<UserProfile> {
    return await apiClient.put<UserProfile>(`/admin/users/${id}/role`, data);
  }

  async deleteUser(id: string): Promise<{ success: boolean }> {
    return await apiClient.delete<{ success: boolean }>(`/admin/users/${id}`);
  }
}

export const userService = new UserService();

