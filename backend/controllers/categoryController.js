const Category = require("../models/Category");



const createCategory = async (req, res) => {
  const { catName, colorID } = req.body;

  if (!catName) {
    return res.status(400).json({ msg: "Please enter a category name" });
  }

  if (!colorID) {
    return res.status(400).json({ msg: "Please enter a Color ID" });
  }

  try {
    const newCategory = await Category.create({
    catName,
      colorID,
    });

    await newCategory.save();
    res.status(200).json({ msg: "Category created Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error creating Category" });
  }
};



const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      return res.status(404).json({ msg: "No categories Exists" });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error creating Category" });
  }
};



const getACategory = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ msg: "Category Could not be found" });
    }

    res.status(200).json({ msg: "Category fetched Successfully!", category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching Category" });
  }
};



const deleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ msg: "Category Could not be found" });
    }

    await category.deleteOne();
    res.status(200).json({ msg: "Category Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error deleting Category" });
  }
};



const updateCategory = async (req, res) => {
  const id = req.params.id;
  const { catName, colorID } = req.body;

  if (!catName) {
    return res.status(400).json({ msg: "Please enter a category name" });
  }

  if (!colorID) {
    return res.status(400).json({ msg: "Please enter a Color ID" });
  }

  try {
    const category = await Category.findById(id)

    if (!category) {
      return res.status(404).json({ msg: "Category Could not be found" });
    }

    await category.updateOne({
    catName,
      colorID,
    });

    await category.save();
    res.status(200).json({ msg: "Category Updated Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error updating Category" });
  }
};

module.exports = {
  createCategory,
  getACategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
};
