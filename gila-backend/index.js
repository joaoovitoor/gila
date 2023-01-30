const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const notificationsRouter = require('./routes/notificationRouter');

app.use(bodyParser.json());
app.use(cors());

app.use('/notifications', notificationsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
