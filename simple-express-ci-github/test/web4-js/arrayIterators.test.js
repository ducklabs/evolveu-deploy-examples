var {expect, assert} = require('chai')

describe('array iterators', function(){
    describe('foreach', function(){
        it('can do something foreach element', function(){
            const foo = {a: 1, b:2}
            const fooKeys = []
            
            Object.keys(foo).forEach(function(key){
                fooKeys.push(key)
            })
            expect(fooKeys).to.eql(['a','b'])
        })
        it('break does not work in foreach', function(){
            const foo = {a: 1, b:2}
            const fooKeys = []
            
            Object.keys(foo).forEach(function(key){
                fooKeys.push(key)
                // break                                -- throws an exception
            })
            expect(fooKeys).to.eql(['a','b'])
        })
    })
    describe('map', function(){
        it('can create a new array from another array', function(){
            var foo = ['a', 'b', 'c']
            var footoo = {a: 1, b: 3, c: 9}

            var result = foo.map(function(entry){
                return footoo[entry]
            })
            expect(result).to.eql([1,3,9])
        })
    })
});