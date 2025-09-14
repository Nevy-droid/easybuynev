import express from "express";
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  getCategory,
  updateCategory,
} from "../controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", fetchCategories);
categoryRouter.post("/category", createCategory);
categoryRouter.put("/category/:id", updateCategory);
categoryRouter.get("/category/:id", getCategory);
categoryRouter.delete("/category/:id", deleteCategory);

export default categoryRouter;
