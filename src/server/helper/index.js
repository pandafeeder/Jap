
export const renderHtmlTemplate = (reactApp, preloadedStore) => {
  return `
<!doctype html>
<html>
  <head>
    <title>React Universal Example</title>
  </head>
  <body>
    <div id="app">${reactApp}</div>
    <script>
       window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedStore).replace(/</g, '\\u003c')}
    </script>
    <script src="/static/client_entry.js"></script>
  </body>
</html>
`
}