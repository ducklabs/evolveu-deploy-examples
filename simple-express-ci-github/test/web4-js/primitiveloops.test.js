var {expect, assert} = require('chai')

describe('primitive loops', function() {
    describe('for loop', function(){
        it('should be able to build an array in a simple for loop', function(){
            var result = []

            for(var index = 0; index < 4; index++)
                result.push(index)

            expect(result).to.eql([0,1,2,3])
        })
        it('can do multiple things in a loop', function(){
            var result = []

            for(var index = 0, otherIndex = 7; index < 4; index++, otherIndex *= 2)
                result.push(otherIndex)

            expect(result).to.eql([7, 14, 28, 56])
        })
    })
    describe('while loop', function(){
        it('should be able to build an object in a simple while loop', function(){
            var result = {}
            
            var index = 0
            while(Object.keys(result).length < 3){
                result[index] = ++index
            }
            expect(result).to.eql({[0]: 1, [1]: 2, [2]:3})
        })
    })
    describe('break', function(){
        it('should break out of a loop early', function(){
            var result = {}

            var index = 0
            while (true)
            {
                if (Object.keys(result).length > 2)
                    break;
                result[index] = index++
            }
            expect(result).to.eql({'0':0, '1': 1, '2':2})
        })
        it('should be able to skip with continue', function(){
            var result = {}

            for(var index = 0; index< 4; index++)
            {
                if (index< 2)
                    continue;
                result[index] = index
            }
            expect(result).to.eql({'2':2, '3':3})
        })
    })
})