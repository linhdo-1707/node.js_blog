const express = require('express') // import thư viện vào
// const: tạo biến, tạo hằng
const app = express() // lúc này express() là 1 function
const port = 3000 

app.get('/tin-tuc', (req, res) => {
  var a = 1;
  var b = 2;
  
  var c = a + b;

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
