import { prismaClient } from "../../infra/database/prismaClient"
import { KafkaSendMessage } from "../../infra/providers/kafka/producer";

type UpdateOrderRequest = {
  id: string,
  status: string
}

export class UpdateOrderUseCase {
  constructor() {}
  
  async execute({ id, status }: UpdateOrderRequest) {
    // Requisição sincrona para API de produtos para verificar se aquele produto está em estoque.
    // axios.get('/products)
    
    const orderUpdate = await prismaClient.order.update({
      where: {
        id,
      },
      data: {
        status
      }
    });
    
    const kafkaSendMessage = new KafkaSendMessage();
    
    await kafkaSendMessage.execute('ORDER_STATUS', {
      customerId: orderUpdate.customerId,
      status: orderUpdate.status,
    });
  }
}