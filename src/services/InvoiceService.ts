interface CreatePaymentDto {
  currency: string;
  urlSuccess: string;
  urlFail: string;
  courseId: number;
  tariffId: number;
  email: string;
  customerName?: string;
  paymentMethodId?: number;
}

interface CreatePaymentResponse {
  paymentId: string;
  paymentUrl: string;
  status: string;
  currency: string;
  orderId: string;
  redirectRequired: boolean;
  additionalData: any;
}

export class InvoiceService {
  static async createInvoice(data: {
    courseId: number;
    courseUrlParam: string;
    tariffId: number;
    currencyCode: string;
    email: string;
    name?: string;
    paymentMethodId?: number;
  }): Promise<string> {
    const PAYMENT_RESULT_URL = `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/payment/result`; // Default for development

    const createPaymentDto: CreatePaymentDto = {
      currency: data.currencyCode,
      paymentMethodId: data.paymentMethodId,
      urlFail: PAYMENT_RESULT_URL,
      urlSuccess: PAYMENT_RESULT_URL,
      courseId: data.courseId,
      tariffId: data.tariffId,
      email: data.email,
      customerName: data.name,
    };

    const response = await fetch(`/api/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createPaymentDto),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create invoice');
    }

    const responseData: CreatePaymentResponse = await response.json();
    return responseData.paymentUrl;
  }
}
