var {expect, assert} = require('chai')

const students = [
    {id: 7, name: 'chris'}, 
    {id: 9, name: 'sheldon'},
    {id: 10, name: 'jen`'}
]

const studentsToo = [
    {id: 7, name: 'chris'}, 
    {id: 13, name: 'chris'}, 
    {id: 9, name: 'sheldon'},
    {id: 10, name: 'jen`'}
]

const marks = [
    {studentid: 7, mark: 75},
    {studentid: 9, mark: 85}
]

describe('fast lookup object', function() {
    describe('can combine faster with a lookup dictionary', function(){
        const studentLookupDictionary = {}
        students.forEach(function(studentRecord){
            studentLookupDictionary[studentRecord.id] = studentRecord
        })

        marks.forEach(function(markRecord){
            // instead of using find
            // const student = students.find(function(student){ return student.id === markRecord.studentid;})
            student = studentLookupDictionary[markRecord.studentid]

            student.mark = markRecord.mark
        })
        expect(students).to.eql(
            [
                {id: 7, name: 'chris', mark: 75}, 
                {id: 9, name: 'sheldon', mark: 85},
                {id: 10, name: 'jen`'}
            ]
        )
    })
    it('should handle conflicts', function(){
        var dictionaryOfStudentNames = 
        studentsToo.reduce(function(acc, newRecord){
            acc[newRecord.name] = acc[newRecord.name] || []
            acc[newRecord.name].push(newRecord)
            return acc
        }
        , {})

        var studentRecordsForChris = dictionaryOfStudentNames['chris']
        const studentIdsForChris = studentRecordsForChris.map(r => r.id)
        expect(studentIdsForChris).to.eql([7, 13])
    })
})