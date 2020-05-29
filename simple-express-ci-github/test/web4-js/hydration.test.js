var {expect, assert} = require('chai')

const students = [
    {id: 7, name: 'chris'}, 
    {id: 9, name: 'sheldon'},
    {id: 10, name: 'jen'}
]

const marks = [
    {studentid: 7, mark: 75},
    {studentid: 9, mark: 85}
]

describe('json', function() {
    describe('can create a hydrated object by combinin', function(){
        it('should run', function(){
            marks.forEach(function(markRecord){
                const student = students.find(function(student){ return student.id === markRecord.studentid;})
                student.mark = markRecord.mark
            })
            expect(students).to.eql(
                [
                    {id: 7, name: 'chris', mark: 75}, 
                    {id: 9, name: 'sheldon', mark: 85},
                    {id: 10, name: 'jen'}
                ]
            )

            var studentRecordsByName = {}
            students.forEach((studentRecord)=>
                studentRecordsByName[studentRecord.name] = studentRecord)

            // var chrisRecord = students.find(function(studentRecord){
            //     return studentRecord.name === 'chris'
            // })
            expect(studentRecordsByName['chris'].mark).to.equal(75)
        })
    })
})