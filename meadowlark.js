/**
 * './'는 node_modules 디렉토리에서 찾지 않겠다는 뜻
 */


/**
 * 원래라면 server.js에서 url 경로를 받지만 handlers라는 미들웨어를 만들어서 handlers.js에서 컨트롤한다
 */
const handlers = require('./lib/handlers')

const express = require('express')

const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

const weatherMiddleware = require('./lib/middleware/weather')

const bodyParser = require('body-parser')

/**
 * 뷰 엔진 생성하고 Express에서 이 엔진을 기본값으로 사용
 */
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    helpers:{
        section: function (name, options){
            if(!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        },
    },
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

/**
 * url을 받아서 해당 url에 맞는 handlers의 메소드 실행하여 view 렌더링
 */

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/section-test', handlers.sectionTest)
app.use(bodyParser.json())

app.get('/newsletter-signup', handlers.newsletterSignup)
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou)
app.get('/attendance', handlers.attendance)
app.get('/freeBoard', handlers.freeBoard)
app.get('/freeEdit', handlers.freeEdit)

app.get('/newsletter', handlers.newsletter)
app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

app.use(weatherMiddleware)
app.use(bodyParser.urlencoded({ extended: true }))

//가장 마지막에 위치함 => 위 URL을 찾고 없는 경우 실행
app.use(handlers.notFound)
app.use(handlers.serverError)

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

/*
app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    res.render('about', {fortune:fortune.getFortune()})
})

// 404 Custom page
app.use((req, res) =>{
    res.status(404)
    res.render('404')
})

//500 Custom page
app.use((req, res, next) =>{
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate`
))
 */

if(require.main === module){
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port}` +
            '; press Ctrl-C to terminate.' )
    })
}else{
    module.exports = app
}


