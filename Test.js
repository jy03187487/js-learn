

const obj = {
    a: 1,
    plus: function () {
        this.a += 1;
    },
    test: () => this.a,
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
console.log(obj.test())
console.log(closure()())
