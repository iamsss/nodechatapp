var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', (done) => {
      var res = generateMessage('saurav','hi')
        expect(res.from).toBe('saurav');
        expect(res.text).toBe('hi')
        expect(typeof res.createdAt).toBe('number');
        done();
    })

});