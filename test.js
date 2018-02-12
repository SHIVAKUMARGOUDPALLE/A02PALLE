
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(calculateNext(10,20), 200, 'result 1-Tested with two relatively small positive numbers, calculateSeat(2,3) returns');
    assert.equal(App.calculateSeat(-5, -5), 0, 'result 2-Tested with two negative numbers. Any arguments less than 1 will be set to 0,calculateSeat(-5, -5) returns 0 ');
    assert.equal(App.calculateSeat(500, 500), 0, 'result 3-Testing  "too large" integers return 0, calculateSeat(500, 500) returns 0');
        //throws( block                                    [, expected ] [, message ] ) 
        
    assert.throws(function () { App.calculateSeat(null); }, /The given argument is not a number/, 'result 4-esting missing or invalid arguments return 0 ');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { App.calculateSeat("Christine","Christine"); }, /The given argument is not a number/, 'result 5 Testing two string arguments return 0 ');
	 assert.equal(App.calculateSeat(2.3, 3.3), 0, 'result 6 Tested with two DECIMAL NUMBERS ,calculateSeat(2.3, 3.3), returns 0');
});

