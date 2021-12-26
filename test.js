

// start your first test
    test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js')

    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 114.41 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(1)

    // if 1 dollar is 114.41 yen, then 3.5 dollars should be (3.5 * 114.41)
    const expected = 3.5 * 114.41; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(400.435);
})

test("One Yen should be .0065 Pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)

    // if 1 yen is .0065 pound, then 3.5 yen should be (3.5 * .0065)
    const expected = 3.5 * .0065; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02275); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})