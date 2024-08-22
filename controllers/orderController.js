import Order from "../models/OrdersModel.js";
import Menu from "../models/menuModel.js";

export const createOrder = async (req, res) => {
    try {
        const {products} = req.body
        if(!products || products.length == 0) {
            return res.status(400).json({ message: "atleast one item is required" });
        }

        let orderItems = []
        let totalPrice = 0

        for(var product of products) {
            const item = await Menu.findById(product.productId)
            if(!item) {
                return res.status(404).json({ message: "product with given id not found" });
            }
            let productDetails = {
                productName:item.name,
                price:item.price,
                quantity:product.quantity
            }
            totalPrice += (item.price*product.quantity)
            orderItems.push(productDetails)
        }

        const newOrder = new Order({products})
        await newOrder.save()

        let orderDetails = {
            orderItems,
            totalPrice,
            orderId:newOrder._id
        }
        res.status(201).json(orderDetails)
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({ message: "Internal server error" });
    }
}