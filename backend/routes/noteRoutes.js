const express = require('express')
const {createNote,deleteNote,getANote,getAllNotes,updateNotes,getNotesOfCat} = require('../controllers/noteController')

const router = express.Router()

router.post('/new',createNote)
router.get('/:id',getANote)
router.get('/',getAllNotes)
router.patch('/update/:id',updateNotes)
router.delete('/delete/:id',deleteNote)
router.get('/category/:id',getNotesOfCat)

module.exports=router