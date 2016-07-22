var chai = require("chai");
var expect = chai.expect;
var Calculator = require('./../app/Calculator.js');

describe('Calculator', function () {
    it('add should return 4 when add 2 + 2', function () {
        var calculator = new Calculator();
        expect(calculator).to.not.equal(undefined);
        expect(calculator.add(2, 2)).to.equal(4);
    });
});
