import express from 'express'
import prisma from './prisma'
import { app } from './app'

const port: number = 3001

app.get('/', async (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})