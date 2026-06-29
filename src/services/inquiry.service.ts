export interface CustomPowerInquiryDto {
  propertyType: string;
  monthlyBill: number;
  roofType: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const inquiryService = {
  submitCustomPowerInquiry: async (data: CustomPowerInquiryDto) => {
    // We are simulating an API call here since the backend doesn't have an explicit inquiry table yet
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Inquiry submitted successfully',
          data
        });
      }, 1500);
    });
  }
};
