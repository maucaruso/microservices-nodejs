import { prismaClient } from "../../infra/database/prismaClient"

type CreateOrderRequest = {
  customerId: string
  items: [{
    productId: string,
    quantity: number,
  }]
}

export class CreateOrderUseCase {
  constructor() {}
  
  async execute({ customerId, items }: CreateOrderRequest) {
    // Requisição sincrona para API de produtos para verificar se aquele produto está em estoque.
    // axios.get('/products)
    
    const order = await prismaClient.order.create({
      data: {
        customerId: customerId,
        status: "AGUARDANDO_PAGAMENTO",
        OrderItems: {
          createMany: {
            data: items
          }
        }
      }
    });
    
    return order;
  }
}