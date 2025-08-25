import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3003  // Galima keisti portą per aplinkos kintamąjį

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const dbURI = 'mongodb+srv://vcs:Test1234@vcs.fpqdkcz.mongodb.net/restapi';
mongoose.connect(dbURI)
    .then(result => {
        app.listen(PORT, () => {
            console.log(`\n======================================`)
            console.log(`Serveris paleistas sėkmingai!`)
            console.log(`Portas: ${PORT}`)
            console.log(`URL: http://localhost:${PORT}`)
            console.log(`MongoDB: Prisijungta`)
            console.log(`======================================\n`)
        })
    })
    .catch(err => {
        console.error('Klaida jungiantis prie MongoDB:', err)
    })

app.set('view engine', 'ejs')

// routes
app.use('/api', apiRoutes)
app.get('/', (req, res) => res.render('home'));
