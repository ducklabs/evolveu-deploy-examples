var {expect, assert} = require('chai')

describe('json', function() {
    describe('can create an object', function(){
        it('should create a simple object', function(){
            const foo = {}

            expect(foo).to.eql({})
        })
        it ('should be able to create and retrieve an attribute', function(){
            const foo = {['an attribute']: 7}

            expect(foo['an attribute']).to.equal(7)
        })
        it('should be able to add and retrieve an attribute', function(){
            const foo = {}
            foo.a = 7

            expect(foo.a).to.equal(7)
        })
        it('should be able to an attribue with a complex name and retrieve it', function(){
            const foo = {}
            foo['my attribute'] = 7

            expect(foo['my attribute']).to.equal(7)
        })
        it('should be able to use a nuber for an attribute', function(){
            const foo = {}
            foo[8] = 8
            
            expect(foo[8]).to.equal(8)
        })
    })

    describe('mixed with arrays', function(){
        it('should be able to include arrays', function(){
            const foo={a: [1,2,3]}

            expect(foo.a).to.eql([1,2,3])
        })
        
        it('should be able to be included in arrays', function(){
            const foo = [{index: 1}, {index: 2}]

            expect(foo).to.eql([{index: 1}, {index: 2}])
        })

        it('should be able to next deeper', function(){
            const foo = {foo: {foo: {foo: [7]}}}

            expect(foo.foo.foo.foo).to.eql([7])
        })
    })

    describe('functions as entries', function(){
        it('should be able to put a functoin in an object', function(){
            const myFunction = function(x) {return x*2;}
            const foo = {
                do: myFunction
            }
            expect(foo.do(3)).to.equal(6)
        })
        it('should be able to put a function in an object', function(){
            const foo = {
                do: function(x){return 2*x},
                dotoo: x => 2*x
            }

            expect(foo.do(3)).to.equal(6)
            expect((foo.dotoo(4))).to.equal(8)
        })
        it('should be able to put functions in arrays too', function(){
            const foo = [
                function(x){return 2*x}, 
                (x)=>{return 2*x}]

            expect(foo[0](2)).to.equal(4)
            expect(foo[1](3)).to.equal(6)
        })
    })

    describe('object functios', function(){
        it('object.keys should be able to get array of the keys', function(){
            var foo = {foo: 1, ['foo too']: 2}
            foo[3] = 3

            var result = Object.keys(foo)
            expect(result).to.eql(['3', 'foo', 'foo too'])
        })
        it('object.values should be able to get any array of the values', function(){
            var foo = {foo: 1, ['foo too']: 2}
            foo[3] = 3

            var result = Object.values(foo)
            expect(result).to.eql([3, 1,2])
        })
    })

    describe('spread {...}', function(){
        it('should be able to spread to make a copy with a new attribute', function(){
            var foo = {x: 1}
            
            var value = {...foo, y: 2}
            expect(value).to.eql({x: 1, y:2})
            expect(foo).to.eql({x: 1})
        })
    })

    describe('json functions', function(){
        it('should be able to turn into JSON string', function(){
            const foo = {x: 1}

            const result = JSON.stringify(foo)
            expect(result).to.eql('{"x":1}')
        })
        it('should be able to json parse into an object', function(){
            const foo = '{"x":1}'
            const result = JSON.parse(foo)
            expect(result).to.eql({x: 1})
        })
    })

})