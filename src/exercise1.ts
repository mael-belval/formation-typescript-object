/**
 * Exercise 1
 * 
 * 1. Create a class Fraction with two properties: numerator and denominator, both of type number.
 * 
 * 2.   Prevent access to the properties from outside the class.
 *      Create two getters, one for each property : getNumerator() and getDenominator().
 *      The getters should return the value of the properties.
 *      Create a setter : setFraction(numerator, denominator) that sets the values of the properties.
 *      Make sure that the values are numbers and that the denominator is not 0.
 * 
 * 3.   Add a constructor that takes two parameters: numerator and denominator.
 *      You may set default values for the parameters.
 * 
 * 4.   Add the following private method: simplify() that simplifies the fraction. (provided below)
 *      Use this method in the constructor and/or in the setter when you think it is useful.
 * 
 * 5.   Write the method sum() which allow to add two fractions. Remember that a/b + c/d = (a*d + b*c) / (b*d)
 *      Think about the return type of the method.
 * 
 * 6. Add a log in the constructor to display the fraction when it is created. Write a small program to test your class.
 * 
 * 7. Create the UML diagram of the class. (with PlantUML or MermaidJS)
 */




/*
private simplify(): void {
    // if numerator is 0, denominator is set to 1
    if (this.numerator === 0) {
        this.denominator = 1;
        return;
    }

    // if denominator is 1, nothing to simplify
    if (this.denominator === 1) {
        return;
    }

    // if numerator and denominator are negative, they are made positive
    let pgcdA = Math.abs(this.numerator);
    let pgcdB = Math.abs(this.denominator);

    // Euclidean algorithm
    while (pgcdA !== pgcdB) {
        if (pgcdA > pgcdB) {
            pgcdA -= pgcdB;
        } else {
            pgcdB -= pgcdA;
        }
    }

    // numerator and denominator are divided by the greatest common divisor
    this.numerator /= pgcdA;
    this.denominator /= pgcdA;

    // if denominator is negative, we move the sign to the numerator
    if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
    }
}
*/
