// var {expect, assert} = require('chai')

// describe('practice', function() {
//     describe('mild', function(){
//         it('should concenat an address', function(){
//             const number = 17
//             const street = 'Fox Wood'

//             var result 
//             expect(result).to.equall('17 Fox Wood')
//         })
//         it ('should format a date', function(){
//             const date = new Date('24/05/2020')
//             var result
//             expect(result).to.equal('2020-05-24')
//         })
//         it('should be able to interpert false')
//         {
//             var foo
//             var result = 'not false'
//             if (!foo)
//                 result = 'false'
//             expect(result).to.be
//         }
//         it('shoudl be able to merge strings', function(){
//             var arr1 = [1,2]
//             var arr2 = [3,4]
            
//             var result
//             expect(result).to.equal([3,4,1,2])
//         })
//         it('should be able to find out if an arry includes 2', function(){
//             var array = [1,2,3,4]
//             var constains2 
//             expect(contains2).to.be.true
//         })
//         it('should be able to create json stringify of an object', function(){
//             var foo = {x: 1}
            
//             var result = JSON.stringify(foo)
//             expect(result).to.equal
//         })
//         it('should be able to add a number as a key to an object', function(){
//             var foo = {}
//             //
//             expect(foo).to.equal({'3': 4})
//         })
//         it('can use a loop to sum all entries in an array', function(){
//             var foo = [1,2,3]
//             const total = 0
//             for(var i; ; )
//                 total += foo[i]
//             expect(total).to.equal(6)
//         })
//         it('can sort an array', function(){
//             var foo = [3,8,2,7]
//             var result = foo.sort(function())
//             expect(result).to.eql([2,3,7,8])
//         })
//         it('can filter an array to get rid of numbers less than 5', function(){
//             var foo = [3,8,2,7]
//             var result = foo.filter(function(){})
//             expect(result).to.eql([8,7])
//         })
//         it('can find the first number greater than 5', function(){
//             var foo = [3,8,2,7]
//             var result = foo.find(function())
//             expect(result).to.equal(8)
//         })
//     })
//     describe('medium', function(){
//         it('can use foreach sum all entries in an array', function(){
//             var foo = [1,2,3]
//             const total = 0
//             foo.forEach(function(){

//             })
//             expect(total).to.equal(6)
//         })
//         it('can double all the numbers in an array using a map', function(){
//             var foo = [1,2,3]
//             var result = foo.map(function(){

//             })
//             expect(result).to.eql([2,4,6])
//         })
//         it('can add all the numbers in an array with reduce', function(){
//             var foo = [1,2,3]
//             var result = foo.reduce(function(){}, 0)
//             expect(result).to.equal(6)
//         })
//         it('can hydrate a list (with or with a dictionary)', function(){
//             const students = [
//                 {id: 7, name: 'chris'},
//                 {id: 8, name: 'tony'}
//             ]
//             const enrollment = [
//                 {studentid: 7, major: 'Computer Science'},
//                 {studentid: 8, major: 'Interpretive Dance'}
//             ]

//             var result

//             expect(result).to.equal([
//                 {id: 7, name: 'chris', major: 'Computer Science'},
//                 {id: 8, name: 'tony', major: 'Interpretive Dance'}
//             ])
//         })

//     })
//     describe('spicy', function(){
//         it('can hydrate a list (by using a dictionary)', function(){
//             const students = [
//                 {id: 7, name: 'chris'},
//                 {id: 8, name: 'tony'}
//             ]
//             const enrollment = [
//                 {studentid: 7, major: 'Computer Science'},
//                 {studentid: 8, major: 'Interpretive Dance'}
//             ]

//             var result

//             expect(result).to.equal([
//                 {id: 7, name: 'chris', major: 'Computer Science'},
//                 {id: 8, name: 'tony', major: 'Interpretive Dance'}
//             ])
//         })
//          it ('can sum sales', function(){
//              const salesPeople = [
//                 {name: 'Chris', id: 7},
//                 {name: 'Tony', id: 8}
//                ]
//          const products = [
//              {name: 'Fish', price: 7},
//              {name: 'Chips', price: 5 }
//            ]
//          const sales = [
//              {salesPerson: 7, product: 'Fish'},
//              {salesPerson: 7, product: 'Fish'},
//              {salesPerson: 7, product: 'Chips'},
//              {salesPerson: 8, product: 'Chips'},
//          ]
//
//          var result      // feel free to use multiple lines but come up with a strategy, imagine there are thousands of data rows instead of less than 10
//
//          expect(result).to.eql(
//              [
//                  {name: 'Chris', sales: 19},
//                  {name: 'Tony', sales: 5}
//              ])
//          })
//     })
// })