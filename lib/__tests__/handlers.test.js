const handlers = require('../handlers')

/**
 * npm test --watch -> 코드를 실시간으로 감지하여 자동으로 테스트하는 모드
 * npm test -- --coverage -> 코드가 얼만큼 테스트되고 있는지를 나타내는 소프트웨어 품질 지표
 */
test('home page renders', () =>{
    const req = {}
    const res = { render: jest.fn() }

    handlers.home(req, res)
    expect(res.render.mock.calls.length).toBe(1) // 한번만 호출 되었는지 확인
    expect(res.render.mock.calls[0][0]).toBe('home') // 첫 번째 호출된 상황[0]에서 전달받은 매개변수 중 첫 번째[0] 이 때 매개변수는 'home'
})

test('about page renders with fortune', () =>{
    const req = {}
    const res = { render: jest.fn() }

    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1])
        .toEqual(expect.objectContaining({fortune: expect.stringMatching(/\W/)}))
})

test('404 handler renders', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('500 handler renders', () =>{
    const err = new Error('Some Error')
    const req = {}
    const res = { render: jest.fn() }
    const next = jest.fn()
    handlers.serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})



