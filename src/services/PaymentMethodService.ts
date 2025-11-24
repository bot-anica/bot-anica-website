import { PaymentMethod } from "@/types/payment";

export class PaymentMethodService {
  static async getPaymentMethods(): Promise<PaymentMethod[]> {
    const response = await fetch(`/api/payment-methods`, { method: "GET" });

    if (!response.ok) {
      throw new Error("Failed to fetch payment methods");
    }

    return response.json();
  }
}
