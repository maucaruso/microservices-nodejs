import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
  customerId: string,
  status: string
}

export async function createCustomerConsumer() {  
  const consumer = await kafkaConsumer("ORDER_STATUS");
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();
      const statusConsumer = JSON.parse(messageToString) as CustomerConsumer;
      
      // consulta cliente no banco de dados
      // dispara email ao cliente
      console.log(`ATUALIZAÇÃO DE STATUS - Client: ${statusConsumer.status}`)
    }
  });
}

createCustomerConsumer();