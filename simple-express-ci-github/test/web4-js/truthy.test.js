var {expect, assert} = require('chai')

describe('truthy/falsey', function() {
    describe('== vs ===', function(){
        it('null == undefined', function(){
            var foo
            var fu = null
            expect(foo == fu).to.be.true
            expect(foo === fu).to.be.false
        })
    })
    describe('things that are falsy', function(){
        it('undefined is falsey', function(){
            var foo
            expect(foo).to.be.undefined
            expect(!!foo).to.be.false
        })
        it ('null is falsy', function(){
            var foo = null
            expect(foo).to.be.null
            expect(!!foo).to.be.false
        })
        it ('empty string should be falsy', function(){
            var foo = ''
            expect(!!foo).to.be.false
        })
        it('expect 0 should be falsy', function(){
            var foo = 0
            expect(!!foo).to.be.false
        })    
        it  ('expect {} is not folsy', function(){
            var foo = {}
            expect(!!foo).to.be.true
            expect(foo==false).to.be.false
        })
        it  ('expect [] is not folsy', function(){
            var foo = []
            expect(!!foo).to.be.true
            expect(foo==false).to.be.true                   // here's one
        })
    })

    describe ('can use with ||', function(){
        it('expect undefined || thing to be the thing',
            function() {
                var foo

                var result = foo || 'not foo'
                expect(result).to.equal('not foo')
            })
        it('expect null || thing to be the thing',
        function() {
            var foo = null

            var result = foo || 'not foo'
            expect(result).to.equal('not foo')
        })    
        it('expect 0 || thing to be the thing',
        function() {
            var foo = 0

            var result = foo || 'not foo'
            expect(result).to.equal('not foo')
        })    
        it('expect [] || thing to be []...',            // notice this one
        function() {
            var foo = []

            var result = foo || ['not foo']
            expect(result).not.to.equal([])             // !! these are not the same array
            expect(result).to.eql([])                   // !! but deeply equal? ya.. it's weird
        })    
    })    
    
    describe('some use of truthy', function(){
        it('should be useable as in an if', function(){ 
            var f = 'false'
            var result = 'one'
            if (f)
                result = 'two'
            expect(result).to.equal('two')
        })
        it('can be tricky with numbers', function(){    // be careful with this one
            var f = 0
            var result = 'one'
            if (f)
                result = 'two'
            expect(result).to.equal('one')              // 0 is falsy!
        })
    })

    describe('things can be weird', function(){
        expect(null == false).to.be.false
        expect(!!null == false).to.be.true
        expect((null || 3) == (false ||3)).to.be.true
    })
})