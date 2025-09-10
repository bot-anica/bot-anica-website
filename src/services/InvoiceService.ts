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
  private static API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'; // Default to localhost

  static async createInvoice(data: {
    courseId: number;
    courseUrlParam: string;
    tariffId: number;
    amount: number;
    currencyCode: string;
    email: string;
    name?: string;
  }): Promise<string> {
    const PAYMENT_SUCCESS_URL = `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/${data.courseUrlParam}/payment/success`; // Default for development
    const PAYMENT_FAIL_URL = `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/${data.courseUrlParam}/payment/fail`; // Default for development

    const createPaymentDto: CreatePaymentDto = {
      // TODO: change back to dynamic amount and currency
      // amount: data.amount,
      amount: 1000,
      // currency: data.currencyCode,
      currency: "RUB",
      
      paymentSystem: "P2R",
      urlFail: PAYMENT_SUCCESS_URL,
      urlSuccess: PAYMENT_FAIL_URL,
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
