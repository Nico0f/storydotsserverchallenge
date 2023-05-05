import express from 'express'
import prisma from './prisma'
import { app } from './app'
import { config } from "dotenv";
config();

const port: number = Number(process.env.PORT) || 3000

app.get('/', async (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})