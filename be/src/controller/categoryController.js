import Category from "../model/categoryModel";

export const fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: true,
      data: categories,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const getCategory = await Category.findOne({ name });

    if (getCategory) {
      return res.status(400).json({
        status: false,
        message: "Category already exists",
      });
    }

    await Category.create({
      name,
      description,
    });

    res.status(201).json({
      status: true,
      message: "Category created successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;

    const getCategory = await Category.findOne({ _id: id });

    if (!getCategory) {
      return res.status(400).json({
        status: false,
        message: "Category not found",
      });
    }

    await Category.updateOne(
      { _id: id },
      {
        name,
        description,
      }
    );

    res.status(200).json({
      status: true,
      message: "Category updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const getCategory = await Category.findOne({ _id: id });

    if (!getCategory) {
      return res.status(400).json({
        status: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: getCategory,
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const getCategory = await Category.findByIdAndDelete({ _id: id });

    if (!getCategory) {
      return res.status(400).json({
        status: false,
        message: "Category not found",
      });
    }

    // await Category.deleteOne({ _id: id });
    return res.status(200).json({
      status: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};
