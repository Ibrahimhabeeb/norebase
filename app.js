const express = require('express');
const incrementlike = require('./controller/articlecont');
const app = express();
const port = 3000;


app.patch("/api/v1/article/:id/likes", incrementlike);

app.use((req, res) => {
    res.status(404).send('404: Route Not Found');
  });



  
app.listen(port, ()=>{
  console.log('Server is listening on port 3000')
})
        
  