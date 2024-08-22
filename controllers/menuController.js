import Menu from "../models/menuModel.js";

export const getMenuItems = async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems)
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const createMenuItem = async (req, res) => {
    try {
        const {name, price, rating, imageUrl} = req.body;

        if(!name || !price || !rating || !imageUrl) {
            return res.status(400).json({ message: "enter all fields" });
        }
        
        const newMenuItem = new Menu({name, price, rating, imageUrl});
        console.log(newMenuItem)
        await newMenuItem.save();

        res.status(201).json(newMenuItem);

    }
    catch(err) {
        console.log(err)
        return res.status(500).json({ message: "Internal server error" });
    }
}