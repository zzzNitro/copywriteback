const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../src/app.js');

const agent = session(app);

describe('text iecho options', () => {
    describe('GET / no iecho', () => {
        it('should get 400', () =>
            agent.get('/').expect(400)
        );
    });
    describe('GET / iecho normal text', () => {
        it('should get 200', () =>
            agent.get('/?iecho=hello').expect(200)
        );
    });
    describe('GET / iecho palindrome', () => {
        it('should get 200', () =>
            agent.get('/?iecho=hannah').expect(200)
        );
    });
});