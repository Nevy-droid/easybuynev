import User from "../model/userModel.js";

export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: true,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, address, role, image } = req.body;

    const getUser = await User.findOne({ email });

    if (getUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    await User.create({
      name,
      email,
      password,
      phone,
      address,
      role,
      image,
    });

    res.status(201).json({
      status: true,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password, phone, address, role, image } = req.body;

    const getUser = await User.findOne({ _id: id });

    if (!getUser) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    await User.updateOne(
      { _id: id },
      {
        name,
        email,
        password,
        phone,
        address,
        role,
        image,
      }
    );

    res.status(200).json({
      status: true,
      message: "User updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const getUser = await User.findOne({ _id: id });

    if (!getUser) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: getUser,
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const getUser = await User.findByIdAndDelete({ _id: id });

    if (!getUser) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    // await User.deleteOne({ _id: id });
    return res.status(200).json({
      status: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: err.message || "Something went wrong",
    });
  }
};
