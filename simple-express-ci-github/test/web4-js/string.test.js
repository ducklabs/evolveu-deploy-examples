var { expect, assert } = require('chai')

describe('String Tests', function () {
  describe('concatenation', function () {
    it('should concatenat with +', function () {
      const fname = 'Chris';
      const lname = 'Desmarais';

      const result = fname + ' ' + lname      // !!
      expect(result).to.equal('Chris Desmarais');
    })
    it('should concatenat with backticks', function () {
      const fname = 'Chris';
      const lname = 'Desmarais';

      const result = `${fname} ${lname}`      // !!
      expect(result).to.equal('Chris Desmarais');
    })
  })

  describe('formatting numbers', function () {
    it('should round at 3 decimal digits', function () {
      const number = 3.1415926;

      const result = number.toFixed(3);
      expect(result).to.equal('3.142')
    })
  });

  describe('formatting date', function () {
    it.skip('should be pretty awful', function () {
      const sunday = '5/24/2020'
      const date = new Date(sunday);

      expect(date.toString()).to.equal('Sun May 24 2020 00:00:00 GMT-0600 (Mountain Daylight Time)')
    })
    it('should be my date format', function () {
      const sunday = '5/24/2020'
      const date = new Date(sunday);

      const result = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      expect(result).to.equal('5/24/2020')
    })
    it('should show day of week', function () {
      const sunday = '5/24/2020'
      const date = new Date(sunday);

      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      const dayName = daysOfWeek[date.getDay()]
      expect(dayName).to.equal('Sunday')
    })
  })


})
