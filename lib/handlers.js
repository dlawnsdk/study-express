const fortune2 = require('./fortune2')



// ======= 페이지 이동 URL =========
exports.home = (req, res) => res.render('home')
exports.about = (req, res) => res.render('about', { fortune2: fortune2.getFortune() })
exports.freeBoard = (req, res) => res.render('freeBoard')
exports.attendance = (req, res) => res.render('attendance')
exports.freeEdit = (req, res) => res.render('freeEdit')
exports.freeBoardContents = (req, res) => {
    //req.body: post방식 데이터 요청
    //req.query: get방식 데이터 요청
    console.log("title : " + req.body.title)
    console.log("contents : " + req.body.contents)
    res.render('freeEdit', { alert: '글 등록 성공' })
}

exports.notFound = (req, res) => res.render('404')
// 익스프레스는 매개변수가 네 개 있어야 오류 핸들러를 인식하므로 next 매개변수를 제거할 수 없음.
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */



exports.sectionTest = (req, res) => res.render('section-test')



