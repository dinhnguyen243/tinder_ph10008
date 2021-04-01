var express = require('express');
var expressHbs = require('express-handlebars')
var app = express();
app.listen(process.env.PORT || '3000');
app.engine('handlebars', expressHbs({
    layoutsDir: __dirname + '/views/layouts',
    // layout cha mặc định
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (request,
                       response) {
    response.render("main",{layout:'home'});

})
app.get('/login.handlebars', function (request,
                       response) {
    response.render("main",{layout:'login'});

})
app.get('/singup.handlebars', function (request,
                            response) {
    response.render("main",{layout:'singup'});

})
app.get('/user.handlebars', function (request,
                             response) {
    response.render("main",{layout:'user'});

})
app.get('/vewuser.handlebars', function (request,
                             response) {
    response.render("main",{layout:'vewuser'});

})




