import { Router } from "express";
import { CreateOrderController } from "../modules/create-order/create-order.controller";
import { UpdateOrderController } from "../modules/update-order/update-order.controller";

const router = Router();

router.post('/orders', (req, res) => {
  new CreateOrderController().handle(req, res);
});

router.patch('/orders', (req, res) => {
  new UpdateOrderController().handle(req, res);
});

export { router };