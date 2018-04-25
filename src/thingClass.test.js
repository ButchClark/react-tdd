import thingClass from "./thingClass";

import tst  from './thingClass'

test('thingClass test', ()=>{
    console.log("thingClass test......")
    const tst = new thingClass()
    expect(tst.summit(3,3)).toBe(6)
})