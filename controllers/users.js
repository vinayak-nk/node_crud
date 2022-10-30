import { v4 as uuidv4 } from 'uuid';
const users = []

export const getUsers = () => (req, res) => res.send(users)

export const deleteUser = () => (req, res) => {
  users.splice(users.findIndex((user) => user.userId === req.params.userId), 1)
  res.send('User reomved')
}

export const createUser = () => (req, res) => {
  users.push({...req.body, userId: uuidv4()}) 
  res.send(`User ${req.body.fname} added`)
}

export const getUser = () => (req, res) => {
  res.send(users.filter((user) => user.userId === req.params.userId ))
}

