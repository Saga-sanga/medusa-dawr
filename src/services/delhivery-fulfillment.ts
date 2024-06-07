import {
  AbstractFulfillmentService,
  Cart,
  Fulfillment,
  LineItem,
  Order,
} from "@medusajs/medusa";
import { CreateReturnType } from "@medusajs/medusa/dist/types/fulfillment-provider";

class DelhiveryFulfillmentService extends AbstractFulfillmentService {
  static identifier = "Delhivery";
  static is_return = true;

  constructor(container, options) {
    super(container);
  }

  async getFulfillmentOptions() {
    return [
      {
        id: "delhivery-standard",
      },
      {
        id: "delhivery-express",
      },
    ];
  }

  async validateFulfillmentData(
    optionData: { [x: string]: unknown },
    data: { [x: string]: unknown },
    cart: Cart
  ): Promise<Record<string, unknown>> {
    if (data.id !== DelhiveryFulfillmentService.identifier) {
      throw new Error("Invalid data");
    }

    return {
      ...data,
    };
  }

  async validateOption(data: { [x: string]: unknown }): Promise<boolean> {
    return !!data.id;
  }

  async canCalculate(data: { [x: string]: unknown }): Promise<boolean> {
    return !!data.id;
  }

  async calculatePrice(
    optionData: { [x: string]: unknown },
    data: { [x: string]: unknown },
    cart: Cart
  ): Promise<number> {
    return cart.items.length * 50;
  }

  async createFulfillment(
    data: { [x: string]: unknown },
    items: LineItem[],
    order: Order,
    fulfillment: Fulfillment
  ): Promise<{ [x: string]: unknown }> {
    return {};
  }

  async cancelFulfillment(fulfillment: { [x: string]: unknown }): Promise<any> {
    return {};
  }

  async createReturn(
    returnOrder: CreateReturnType
  ): Promise<Record<string, unknown>> {
    return {};
  }

  async getFulfillmentDocuments(data: { [x: string]: unknown }): Promise<any> {
    // get return from the delhivery client
  }

  async getReturnDocuments(data: Record<string, unknown>): Promise<any> {}

  async getShipmentDocuments(data: Record<string, unknown>): Promise<any> {}

  async retrieveDocuments(
    fulfillmentData: Record<string, unknown>,
    documentType: "invoice" | "label"
  ): Promise<any> {}
}

export default DelhiveryFulfillmentService;
