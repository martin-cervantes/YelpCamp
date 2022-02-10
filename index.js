const express = require('express');
const app = express();

const port_num = process.env.PORT || 3000;

app.listen(port_num, () => {
  console.log(`Listening on port ${port_num}`);
});
