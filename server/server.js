
import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'



//starting server
app.listen(config.port, function onStart(err) {
if (err) {
console.log(err)
}
console.info('Server started on port %s.', config.port)
})

mongoose.Promise = global.Promise
try{
mongoose.connect(config.mongoUri)
console.log('database connected..')
} catch (error) {
    console.log('mongoose error',error)
}
