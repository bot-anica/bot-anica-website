interface CreatePaymentDto {
  amount: number;
  currency: string;
  paymentSystem: string;
  urlSuccess: string;
  urlFail: string;
  courseId: number;
  tariffId: number;
  email: string;
  customerName?: string;
}

interface CreatePaymentResponse {
  paymentId: string;
  paymentUrl: string;
  status: string;
  amount: number;
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
    amount: number;
    currencyCode: string;
    email: string;
    name?: string;
  }): Promise<string> {
    const PAYMENT_RESULT_URL = `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/payment/result`; // Default for development

    const createPaymentDto: CreatePaymentDto = {
      // TODO: change back to dynamic amount and currency
      // amount: data.amount,
      amount: 1000,
      // currency: data.currencyCode,
      currency: "RUB",
      
      paymentSystem: "P2R",
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
