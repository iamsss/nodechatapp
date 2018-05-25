var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', (done) => {
      var res = generateMessage('saurav','hi')
        expect(res.from).toBe('saurav');
        expect(res.text).toBe('hi')
        expect(typeof res.createdAt).toBe('number');
        done();
    })

});


describe('generateLocationMessage', () => {
    
        it('should generate correct message Location object', (done) => {
         
            var latitude = 3432;
            var longitude = 23423;
            var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

            var res = generateLocationMessage('Admin',latitude,longitude);
            expect(res.from).toBe('Admin');
            expect(res.url).toBe(url);
            expect(typeof res.createdAt).toBe('number');
            done();
        })
    
    });