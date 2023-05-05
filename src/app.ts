import express from "express";
import routes from './routes/index'
import cors from "cors";

export const app = express()
// app.use(morgan('dev'));
app.use(express.json())
// app.use(fileUpload({
//   useTempFiles : true,
//   tempFileDir : './temporalImg/'
// }))

app.use(cors({
    origin: "*",
  }))

app.use('/', routes);