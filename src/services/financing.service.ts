import { apiClient } from '@/lib/api-client';

export interface CalculateFinancingDto {
  amount: number;
  durationMonths: number;
}

export interface ApplyForFinancingDto {
  amount: number;
  durationMonths: number;
  purpose: string;
  orderId?: string;
  employmentStatus: string;
  monthlyIncome: number;
  bankBvn?: string; // Optional for this mock/flow
}

export const financingService = {
  calculateEligibility: async (data: CalculateFinancingDto) => {
    const response = await apiClient.post('/financing/calculate', data);
    return response.data;
  },  

  applyForFinancing: async (data: ApplyForFinancingDto) => {
    const response = await apiClient.post('/financing/apply', data);
    return response.data;
  },

  getApplications: async (page = 1, limit = 20) => {
    const response = await apiClient.get('/financing/applications', {
      params: { page, limit }
    });
    return response.data;
  },

  getApplicationDetails: async (id: string) => {
    const response = await apiClient.get(`/financing/applications/${id}`);
    return response.data;
  },
  
  // Admin only
  updateStatus: async (id: string, status: string, notes?: string) => {
    const response = await apiClient.put(`/financing/applications/${id}/status`, { status, notes });
    return response.data;
  }
};
