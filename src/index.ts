import express from "express"
import morgan from 'morgan'
import { resolve } from "path"

//define our logging
const app = express()
app.use(morgan('dev'))

//define our route 
app.get('/',(req,res) => {
    res.json({hello:'Hillary'});
});

const port = Number(process.env.PORT || 8080)
app.listen(port,'0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${port}`)
})