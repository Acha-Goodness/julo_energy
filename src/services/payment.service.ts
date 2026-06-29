import { apiClient } from '@/lib/api-client';

export interface PaymentInitResponse {
  authorizationUrl: string;
  accessCode: string;
  reference: string;
  data?: any;
}

export interface InitializePaymentData {
  orderId: string;
  paymentMethod: 'PAYSTACK' | 'FLUTTERWAVE';
}

export interface VerifyPaymentData {
  reference: string;
}

class PaymentService {
  async initializePayment(data: InitializePaymentData): Promise<PaymentInitResponse> {
    const response = await apiClient.post<PaymentInitResponse>(
      '/payments/initialize',
      data
    );
    return response;
  }

  async verifyPayment(data: VerifyPaymentData): Promise<any> {
    const response = await apiClient.post('/payments/verify', data);
    return response;
  }
}

export const paymentService = new PaymentService();
