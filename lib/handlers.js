const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() })

exports.notFound = (req, res) => res.render('404')

// 익스프레스는 매개변수가 네 개 있어야 오류 핸들러를 인식하므로 next 매개변수를 제거할 수 없음.
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */

exports.sectionTest = (req, res) => res.render('section-test')

exports.newsletterSignup = (req, res) => {
    res.render('newsletter-signup', { csrf: 'CSRF token goes here'})
}
exports.newsletterSignupProcess = (req, res) => {
    console.log('Form (from querystring): ' + req.query.form)
    console.log('CSRF token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.redirect('303', '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => res.render('newsletter-signup-thank-you')

exports.newsletter = (req, res) => {
    res.render('newsletter', { csrf: 'CSRF token goes here' })
}
exports.api = {
    newsletterSignup:(req, res) => {
        console.log('CSRF token (from hidden form field):' + req.body._csrf)
        console.log('Name (from visible form field): ' + req.body.name)
        console.log('Email (from visible form field): ' + req.body.email)
        res.send({ result: 'success'})
    },
}
