import express from 'express'
import { deleteById, getByIdNote, getNote, notePost } from '../controller/noteController.js'

const router = express.Router()


router.get('/', getNote)

router.post('/', notePost)

router.get('/:id', getByIdNote)

router.delete('/:id',deleteById)

router.patch('/:id', (req, res) => {
    //req.params.id
    res.json({msg: 'update metod'})
})

export default router