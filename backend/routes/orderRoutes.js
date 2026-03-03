import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Get all orders (Admin)
router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

router.post("/create-order", async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const lastOrder = await Order.findOne().sort({ createdAt: -1 });

    let newOrderNumber = 1001;

    if (lastOrder && lastOrder.orderId) {
      const lastNumber = parseInt(lastOrder.orderId.replace("KP", ""));

      // Safety check: if previous ID is too large, reset properly
      if (!isNaN(lastNumber) && lastNumber < 100000) {
        newOrderNumber = lastNumber + 1;
      }
    }

    const orderId = `KP${newOrderNumber}`;

    const newOrder = new Order({
      orderId,
      items,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      orderId,
    });

  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;