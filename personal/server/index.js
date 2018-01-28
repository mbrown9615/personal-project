require('dotenv').config();
const express =require('express')
    , cors =require('cors')
    , session =require('express-session')
    , bodyParser =require('body-parser')
    , passport =require('passport')
    , Auth0Strategy =require('passport-auth0')
    , massive =require('massive')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);

})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    let { displayName, user_id, picture } = profile;
    const db = app.get('db');
    db.find_user([user_id]).then(function (users) {
        
        if (!users[0]) {
           
            db.create_user([
                displayName,
                picture,
                user_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        } else {
            console.log(users)
            return done(null, users[0].id)
        }

    })
}));

passport.serializeUser((profile,done)=>{
    done(null,profile);
})
passport.deserializeUser((profile,done)=>{
    done(null,profile);
})


//auth points

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: "http://localhost:3000/#/home",
    failureRedirect: "http://localhost:3000/"
}));
app.get('/auth/me', (req, res) => {
    
    if (!req.user) {
        res.status(404).send('User not found')
    } else {
        console.log(req.user)
        res.status(200).json(req.user)
    }
})
app.get('/auth/logout', function(req,res){
    req.logOut();
    res.redirect('http://localhost:3000/')
})

//other points

app.get('/forum/thread', (req,res) => {
    if(!req.thread){
        send('there are none')
    }else {
        send(req.thread._json)
    }
})

// app.post('/forum/new/thread', (req,res)=>{

// })

//  app.delete('/forum/remove', (req, res)=>{

//  })

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
});