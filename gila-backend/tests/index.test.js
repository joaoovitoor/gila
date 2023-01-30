const assert = require('assert');
const request = require('supertest');
const app = require('../index');

const testCases = [
  { 
    userId: 1, 
    userName: 'Joao', 
    userEmail: 'joao@email.com',
    userPhoneNumber: '123456789',
    category: 1,
    sendType: 2,
    message: 'This is a test message',
    timestamp: new Date().toISOString()
  },
  { 
    userId: 2, 
    userName: 'Maria', 
    userEmail: 'maria@email.com',
    userPhoneNumber: '987654321',
    category: 2,
    sendType: 3,
    message: 'This is a second test message',
    timestamp: new Date().toISOString()
  },
  { 
    userId: 3, 
    userName: 'ASDF', 
    userEmail: 'ASDF@email.com',
    userPhoneNumber: '234234234',
    category: 2,
    sendType: 3,
    message: 'This is a third test message',
    timestamp: new Date().toISOString()
  }
];

describe('Notifications', function() {
  testCases.forEach(function(notification) {
    it(`should create a new notification for user "${notification.userName}" on POST`, function(done) {
      request(app)
        .post('/notifications')
        .send(notification)
        .expect(200)
        .end(function(err, res) {
          assert.deepStrictEqual(res.body, notification);
          done();
        });
    });
  });
});
