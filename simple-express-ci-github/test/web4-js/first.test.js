var {expect, assert} = require('chai')

describe('First Test', function(){
  describe('broken', function(){
    it('should be fixed', function(){
      expect(1).not.to.equal(2);
    })
    it('shoudld pass', function(){
      expect(1).to.equal(1);
    })
  })
})


