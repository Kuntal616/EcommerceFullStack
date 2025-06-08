const Order = require('../models/orders');
const OrderItem = require('../models/orderItems');

async function createOrder(req, res) {
    const { orderItems,shippingAddress1,shippingAddress2,city,zip,country,phone,totalPrice,} = req.body;

    try {
         // Save each order item
    const savedOrderItems = await Promise.all(
      orderItems.map(async item => {
        const newItem = new OrderItem({
          quantity: item.quantity,
          product: item.product
        });
        return await newItem.save();
      })
    );
     const order = new Order({
      orderItems: savedOrderItems.map(item => item._id),
      shippingAddress1,
      shippingAddress2,
      city,
      zip,
      country,
      phone,
      totalPrice,
      user: req.user._id
    });
     const savedOrder = await order.save();
    res.status(201).json({ success: true, savedOrder,message: 'Order created successfully' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
        
    }

}
async function getMyOrders(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('orderItems')
      .populate({ path: 'orderItems', populate: { path: 'product', select: 'name price image' } });

    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

async function getOrderById (req, res) {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate({
        path: 'orderItems',
        populate: { path: 'product', select: 'name image price' }
      });

    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

async function updateOrderStatus(req, res) {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = req.body.status || order.status;
    const updatedOrder = await order.save();

    res.json({ success: true, data: updatedOrder });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus
};