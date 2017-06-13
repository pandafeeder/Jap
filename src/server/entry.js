import express from 'express';
import { configStore } from '../store';
import { renderHtmlTempalte } from './helper';
import apiRouter from './api';
import { 
  StaticRouter as Router,
} from 'react-router-dom';
import { Provider } from 'redux';
import App from '../client/containers/App';
import { queryAll, queryChar } from './middlewares';
import ReactDOMServer  from 'react-dom/server';

const app = express();
app.use('/api', apiRouter)

app.use('*', (req, res) => {
  const context = {}
  const reactApp = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router context={context} location={req.url}>
        <App />
      </Router>
    </Provider>
  )
  const html = renderHtmlTempalte(reactApp, store)
  res.send(html)
})

app.listen(8000, () => {
  console.log("listening on 8000")
})
