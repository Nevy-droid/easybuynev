import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
    },
    price: {
      type: Number,
      required: true,
    },
    categoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    image: {
      type: [String],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

export default Product;
