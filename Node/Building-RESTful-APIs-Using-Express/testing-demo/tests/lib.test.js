//! import the module in which you want to run test 
const lib = require('../lib');

describe('absolute function', () => {
        it('should return a positive number if input is positive', () => {
                const result = lib.absolute(1)
                expect(result).toBe(1)
        })
        
        it('should return a positive number if input is 0', () => {
                const result = lib.absolute(-1)
                expect(result).toBe(1)
        })
        it('should return 0 number if input is positive', () => {
                const result = lib.absolute(0)
                expect(result).toBe(0)
        })
});

describe('greet function', () => {
        it('should return greeting message', () => {
                const result = lib.greet("Willis")
                // expect(result).toBe("Welcome Willis")
                // expect(result).toMatch(/Willis/)
                expect(result).toContain('Willis')
        });
});

describe('getCurrencies function', () => {
        it('should return supported currencies', () => {
                const result = lib.getCurrencies()
                
                // Too general
                expect(result).toBeDefined()
                expect(result).not.toBeNull()

                // Too specific
                expect(result[0]).toBe('USD')
                expect(result[1]).toBe('AUD')
                expect(result[2]).toBe('EUR')
                expect(result.length).toBe(3)

                // Proper way / but not ideal
                expect(result).toContain('USD')
                expect(result).toContain('AUD')
                expect(result).toContain('EUR')

                // Ideal way
                expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']))
        });
});

describe('getProduct function', () => {
        it('should return the product with the given id', () => {
                const result = lib.getProduct(1)
                // expect(result).toEqual({ id: 1, price: 10 })
                expect(result).toMatchObject({ id: 1, price: 10 })
        });
});