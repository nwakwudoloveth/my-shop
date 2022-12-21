require('dotenv').config({ debug: process.env.DEBUG, path: '../.env' })
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const cors = require('cors')
const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()
// app.use(cors())
app.use(
  cors({
    // enables requests from any domain, not safe, further add only the domain you want
    origin: true,
    // allows cookies
    credentials: true,
  })
)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// set proxy
app.set('trust proxy', 1)

// app.set('io', socketService)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    secret: 'thisisasupersecuresecret',
    store: MongoStore.create(mongooseConnection),
  })
)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'images', 'favicon.ico')))

app.use('/api/', indexRouter)
app.use('/api/users', usersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
