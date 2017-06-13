import React from 'react';
import express from 'express';
import { configStore } from '../store';
import { renderHtmlTempalte } from './helper';
import apiRouter from './api';
import { normalize } from 'normalizr';
import { charListSchema } from '../store/'
import {
  StaticRouter as Router,
} from 'react-router-dom';
import { Provider } from 'redux';
import App from '../client/containers/App';
import { queryAll } from './middlewares';
import ReactDOMServer  from 'react-dom/server';

const app = express();
app.use('/api', apiRouter)

app.use('*', queryAll, (req, res) => {
  const preLoadedState = normalize(res.charTable, charListSchema)
  const store = configStore({
    entities: preLoadedState.entities,
    result: preLoadedState.result,
  })
  const context = {}
  const reactApp = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router context={context} location={req.url}>
        <App />
      </Router>
    </Provider>
  )
  const html = renderHtmlTempalte(reactApp, preLoadedState)
  res.send(html)
})

app.listen(8000, () => {
  console.log("listening on 8000")
})
