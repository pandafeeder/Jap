import express from 'express';
import {
  queryAll,
  queryChar
} from '../middlewares'

const apiRouter = express.Router([{mergeParams: true}])

apiRouter.get('/', queryAll, (req, res, next) => {
  res.send(res.charTable)
});

apiRouter.get('/char/:pron', queryChar, (req, res, next) => {
  res.send(res.char)
});

export default apiRouter
