'use strict'

const func = function () {
    this.a += 1;
    console.log(`this.a=${this.a}`)
}

const obj = {
    a: 1,
    plus: func,
}

function closure() {
    const b = 222;
    function inner() {
        return b;
    }
    return inner;
}

obj.plus()
console.log(obj.a)
console.log(closure()())

func.call(obj)
func.apply(obj)
func.apply(obj)

const f = func.bind(obj)
f()