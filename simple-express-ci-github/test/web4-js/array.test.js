var {expect, assert} = require('chai')

describe('array', function() {
    describe('reverse', function(){
        it('should reverse the array', function(){
            var arr = [1,2,3]
            
            var result = arr.reverse()
            expect(result).to.eql([3,2,1])
        })
    })

    describe('push', function(){
        it('should be able to push a new entry', function(){
            var arr = [1,2,3]
            arr.push(4)

            expect(arr).to.eql([1,2,3,4])
        })
    })
    
    describe('slice', function(){
        it('should make a copy', function(){
            var arr = [1,2,3]

            var result = arr.slice();
            expect(result).not.to.equal(arr)
            expect(result).to.eql(arr)
        })
        it('should make a copy starting from a point', function(){
            var arr = [1,2,3]

            var result = arr.slice(1);      // 0 index starting point
            expect(result).to.eql([2,3])
        })
        it('should be able to take from the middle', function(){
            var arr = [1,2,3,4,5]

            var result = arr.slice(2,4)     // 0 index starting point, 0 index end point
            expect(result).to.eql([3,4])
        })
    })

    describe('includes', function(){
        it('should return true if contains', function(){
            var arr = [1,2,3]

            expect(arr.includes(2)).to.be.true
        }),
        it('should return false if does not contain', function(){
            var arr = [1,2,3]

            expect(arr.includes(5)).to.be.false
        })
    })

    describe('indexOf', function(){
        it('shoud return the index of a contained entry', function(){
            var arr = [1,2,3]

            expect(arr.indexOf(2)).to.equal(1)
        })
        it('should return the first index if more than one', function(){
            var arr=[1,2,2,3]

            expect(arr.indexOf(2)).to.equal(1)
        }),
        it('should return -1 if missing', function(){
            var arr=[1,2,3]

            expect(arr.indexOf(5)).to.equal(-1)
        })
    })

    describe('concat', function(){
        it('should push two arrays together', function(){
            var a = [1,2]
            var b = [3,4]
            
            var result = a.concat(b)
            expect(result).to.eql([1,2,3,4])
        })
        it('should push two arrays together2', function(){
            var a = [1,2]
            var b = [3,4]
            
            var result = [...a, ...b]
            expect(result).to.eql([1,2,3,4])
        })
        // it('should concat with +', function(){
        //     var a =[1,2]
        //     var b=[3,4]
        //     var result = a + b
        //     expect(result).to.eql([1,2,3,4])
        // })
        it('can change let', function(){
            const a = [1]
            a.push(2)
            expect(a).to.eql([1,2])
        })
    })
})