var {expect, assert} = require('chai')

var addresses = [
    {address: '3 foxwood', postalcode: 'p3l2n7'},
    {address: '2 rabbit court', postalcode: 'p748k2'},
    {address: '3 deer wood', postalcode: 'p3l2n7'},
]

describe('distinct entries', function() {
    it('can use find to get find entries that were already found', function(){
        var postalcodes = []
        addresses.forEach(function(addressInfo){
            const postalcode = addressInfo.postalcode
            if (! postalcodes.includes(postalcode))
            {
                postalcodes.push(postalcode)
            }
        })
        expect(postalcodes).to.eql([
            'p3l2n7',
            'p748k2'
        ])
    })
    it('can can do it better by using an object', function(){
        var postalcodes = {}
        addresses.forEach(function(addressInfo){
            const postalcode = addressInfo.postalcode
            postalcodes[postalcode] = true
        })
        var result = Object.keys(postalcodes)
        expect(result).to.eql([
            'p3l2n7',
            'p748k2'
        ])
    })
})