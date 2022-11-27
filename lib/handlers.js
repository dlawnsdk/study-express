const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() })

exports.notFound = (req, res) => res.render('404')

// 익스프레스는 매개변수가 네 개 있어야 오류 핸들러를 인식하므로 next 매개변수를 제거할 수 없음.
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */