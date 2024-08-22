import Category from "../models/CatergoryModel.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}