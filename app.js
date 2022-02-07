const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const {get404} = require('./controllers/error');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use(get404);

app.listen(3000);