const exercise1 = require('../exercise1');

describe('fizzBuzz function', () => {
        it('should throw a exception if input is not a number', () => {
                expect(() => { exercise1.fizzBuzz("Not a number") }).toThrow
                expect(() => { exercise1.fizzBuzz({}) }).toThrow
                expect(() => { exercise1.fizzBuzz(null) }).toThrow
                expect(() => { exercise1.fizzBuzz(undefined) }).toThrow
                expect(() => { exercise1.fizzBuzz('') }).toThrow
        });

        it('should return FizzBuzz if input is divisible by 3 and 5', () => {
                const result = exercise1.fizzBuzz(15)
                expect(result).toBe('FizzBuzz')
        });

        it('should return Fizz if input is divisible by 3 and not 5', () => {
                const result = exercise1.fizzBuzz(9)
                expect(result).toBe('Fizz')
        })

        it('should return Buzz if input is divisible by 5 and not 3', () => {
                const result = exercise1.fizzBuzz(10)
                expect(result).toBe('Buzz')
        })

        it('should return the input if it is not divisible by 3 or 5', () => {
                const result = exercise1.fizzBuzz(1)
                expect(result).toBe(1)
        });
});
