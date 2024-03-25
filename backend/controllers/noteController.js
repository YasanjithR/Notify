const Category = require('../models/Category')
const Note = require("../models/Note");



const createNote = async (req, res) => {
  const { title, content, category } = req.body;

  if (!title) {
    return res.status(404).json({ msg: "Please enter a title" });
  }

  if (!content) {
    return res.status(404).json({ msg: "Please enter content" });
  }

  if (!category) {
    return res.status(404).json({ msg: "Please enter a Category" });
  }

  try {
    const existingCategory = await Category.findById(category);

    if (!existingCategory) {
      return res.status(404).json({ msg: "Please enter a existing category" });
    }

    const newNote = await Note.create({
      title,
      content,
      category,
    });

    res.status(200).json({ msg: "Note created Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error creating Note" });
  }
};



const getANote = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ msg: "Note does not exist" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching Note" });
  }
};



const deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ msg: "Note does not exist" });
    }

    await note.deleteOne();

    res.status(200).json({ msg: "Note deleted succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error deleting Note" });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    if (!notes) {
      return res.status(404).json({ msg: "Notes does not exist" });
    }

    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching Note" });
  }
};



const updateNotes = async (req, res) => {
  const { title, content, category } = req.body;
  const id = req.params.id;

  if (!title) {
    return res.status(404).json({ msg: "Please enter a title" });
  }

  if (!content) {
    return res.status(404).json({ msg: "Please enter content" });
  }

  if (!category) {
    return res.status(404).json({ msg: "Please enter a Category" });
  }

  try {
    const existingCategory = await Category.findById(category);
    const note = await Note.findById(id);

    if (!existingCategory) {
      return res.status(404).json({ msg: "Please enter a existing category" });
    }

    if (!note) {
      return res.status(404).json({ msg: "Note does not exists" });
    }

    await note.updateOne({
      title,
      content,
      category,
    });

    res.status(200).json({ msg: "Note updated Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching Note" });
  }
};




const getNotesOfCat = async (req, res) => {
  const id = req.params.id;

  try {
    const notes = await Note.find();
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ msg: "Category does not exists" });
    }

    if (!notes) {
      return res.status(404).json({ msg: "Notes does not exist" });
    }

    const filteredNotes = notes.filter(note => note.category.toString() === id);

    if (filteredNotes.length === 0) {
      return res.status(404).json({ msg: "No notes found for the category" });
    }

    res.status(200).json(filteredNotes);

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching Notes" });
  }
};


module.exports={createNote,deleteNote,getANote,getAllNotes,updateNotes,getNotesOfCat}