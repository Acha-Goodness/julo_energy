import apiClient from '@/lib/api-client';

export interface AIRecommendationCalculationData {
  applianceIds: string[];
  customAppliances?: {
    name: string;
    powerWatts: number;
    quantity: number;
    hoursPerDay: number;
  }[];
  propertyType?: string;
  backupDurationHours?: number;
}

export const aiRecommendationService = {
  getAppliances: async () => {
    const response = await apiClient.get('/ai-recommendations/appliances');
    return response.data;
  },

  calculateQuery: async (data: AIRecommendationCalculationData) => {
    const response = await apiClient.post('/ai-recommendations/calculate', data);
    return response.data;
  },

  calculateAuthenticatedQuery: async (data: AIRecommendationCalculationData) => {
    const response = await apiClient.post('/ai-recommendations/calculate-authenticated', data);
    return response.data;
  }
};
