import mongoose, { mongo, Mongoose } from "mongoose";

const categoryDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryImageUrl: {
    type: String,
    required: true,
  },
});

const categorySchema = new mongoose.Schema({
    categories: {
        type: [categoryDetailsSchema],
        required: true
    }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
