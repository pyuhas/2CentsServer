const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const knex        = require('./connection.js')
const app         = module.exports = express()
const port        = parseInt(process.env.PORT || 3000)
const cities = require('./cities.js')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true}))

// List
app.get('/cities', (req, res, next) => {
  cities.list().then(cities => {
    res.status(200).json(cities)
  })
});

// Read
app.get('/cities/:id', (req, res, next) => {
  cities.read(req.params.id).then(city => {
    res.status(200).json({city});
  });
});

// Create
app.post('/cities', (req, res, next) => {
  cities.create(req.body.city).then(city => {
    res.status(201).json({city});
  });
});

// Update
app.put('/cities/:id', (req, res, next) => {
  cities.update(req.params.id, req.body).then(city => {
    res.status(201).json({city});
  });
});

// Delete
app.delete('/cities/:id', (req, res, next) => {
  cities.remove(req.params.id).then(() => {
    res.status(204).json({});
  });
});

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({error: 'Url not found', status: 404, url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));
