const { createServer } = require("http")

const htmlContent = `
    <!DOCTYPE html>
  <html>
    <head>
      <title>Node.js Server</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is an HTML response from Node.js.</p>
    </body>
  </html>
`

const server = createServer((req,res)=>{
    res.end(htmlContent)
})

server.listen(3000,()=>{
    console.log('Server listening at https://localhost:3000')
})