const express = require('express')
const {createCategory,getACategory,getAllCategories,deleteCategory,updateCategory,} = require('../controllers/categoryController')

const router = express.Router()

router.post('/new',createCategory)
router.get('/',getAllCategories)
router.get('/:id',getACategory)
router.patch('/update/:id',updateCategory)
router.delete('/delete/:id',deleteCategory)

module.exports=router
