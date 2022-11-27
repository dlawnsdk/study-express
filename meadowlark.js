/**
 * './'는 node_modules 디렉토리에서 찾지 않겠다는 뜻
 */
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const express = require('express')

const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

/**
 * 뷰 엔진 생성하고 Express에서 이 엔진을 기본값으로 사용
 */
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

/**
 * url을 받아서 view 페이지 렌더링
 */

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)

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
*/
app.listen(port, () => console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate`
))


