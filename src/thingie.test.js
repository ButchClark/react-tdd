const thingie =  require('./thingie')

test('thingie does what it says it does...', () =>{
    expect(thingie(2,2)).toBe(4)
})