var {expect, assert} = require('chai')

describe('array simplification', function(){
    describe('sort', function(){
        it('can sort an array by subtracting', function(){
            var array = [7,11,3,8]

            var result = array.sort(function(a,b){ return a-b})
            expect(result).to.eql([3,7,8,11])
        })
        it('can sort an array by subtracting in the other order', function(){
            var array = [7,11,3,8]

            var result = array.sort(function(a,b){ return b-a})
            expect(result).to.eql([11,8,7,3])
        })
    })
    describe('filter', function(){
        it('can filter by using a boolean function', function(){
            it('can remove low values', function(){
                var foo = [1,2,3,4,5]

                var result = foo.filter(function(a){ return a > 2})
                expect(result).to.eql([3,4,5])
            })
        })
    })
    describe('find', function(){
        it('can find the first match', function(){
            var foo = [7,11,3,8,2]

            var result = foo.find(function(a){return a < 5})
            expect(result).to.eql(3)
        })
        it('returns undefined if no match', function(){
            var foo = [7,11,3,8]

            var result = foo.find(function(a){return a < 2})
            expect(result).to.be.undefined
        })
    })
    describe('reduce', function(){
        it('can sum the entries', function(){
            var foo = [7,11,3,8]

            var result = foo.reduce(function(a,b){ return a + b}, 0)
            expect(result).to.equal(29)
        })
        it('can build an array like filter', function(){
            var foo = [7,11,3,8]

            var result = foo.reduce(function(accumulator, arrayValue){ 
                if ( arrayValue > 5)
                    accumulator.push( arrayValue)
                return accumulator
            }, [])
            
            expect(result).to.eql([7,11,8])
        })
    })
})
