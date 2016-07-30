var React = require("react");
var ReactDOM = require('react-dom');
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

describe('App', () => {
    it('should properly run tests', () => {
        expect(1 + 1).toEqual(2);
    });
});

// describe('App', () => {
//     it('should properly run tests', () => {
//         expect(app).toExist();
//     });
// });