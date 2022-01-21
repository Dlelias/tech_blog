// path = node module to handle tranforming file paths 
const path = require('path');
// express frame work handles http request
const express = require('express');

const session = require('express-session');
// creates a handlebar view engine for express 
const exphbs = require("express-handlebars");
// imports routes create with express
const routes = require('./controllers');
// imports out auth and format_date helpers
const helpers = require('./utils/helpers');
// imports connection to sequelize
const sequelize = require('./config/connection');
// class will creat instance fot SQL session store using sequelize 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

// setting up handlebars.js engine to help with custom helpers 
const hbs = exphbs.create({ helpers });

const sess = {
    // require to sign the session ID cookie 
    secret:  'rule number one no one talks about secrets',
    // specific number of miliseconds use to  calc xpire set- cookie attribute
    cookie: { maxAge: null },
    // false typically recommended 
    resave: false,
    // forces session to be save to the store 
    //false is preferred here to implement login sessions
    saveUninitilized: true,
    // session store instance defaults to new memory story instance 
    store: new SequelizeStore({
        db: sequelize
    }) 
};
// middleware 
app.use(session(sess));

// inform Express.js on which template engine to use 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(()=> {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT} 🚀 !`)); 
});

