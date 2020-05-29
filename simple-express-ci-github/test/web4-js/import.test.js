var {expect, assert} = require('chai')
var {add, subtract} = require('./functions')

describe('import', function(){
    it('should import add for test', function(){
        expect(add(2,3)).to.equal(5)
    })
    it('should import subtract for test', function(){
        expect(subtract(2,3)).to.equal(-1)
    })
})