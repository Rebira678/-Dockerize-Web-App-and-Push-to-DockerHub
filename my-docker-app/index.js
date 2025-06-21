const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker World! I am Rebira Adugna i am cloud and devops engineer and i going to be the founder of the biggest compan of REZADAY');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
