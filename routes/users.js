import express from "express";
const router = express.Router()

import { getUsers, getUser, createUser, deleteUser } from '../controllers/users.js'

router.get('/', getUsers())
router.post('/', createUser())
router.get('/:userId', getUser())
router.delete('/:userId', deleteUser())

export default router