//! import the module in which you want to run test 
const lib = require('../lib');
const db = require('../db')
const mail = require('../mail')

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
                // expect(result).toMatchObject({ id: 1, price: 10 })
                expect(result).toHaveProperty('id', 1)
        });
});

describe('registerUser function', () => {
        it('should throw new exception if username is falsy', () => {
                const args = [null, undefined, NaN, false, '', 0]
                args.forEach(arg => {
                        expect(() => { lib.registerUser(arg) }).toThrow
                })
        });

        it('should return a user object if valid username is passed', () => {
                const result = lib.registerUser("willis")
                expect(result).toMatchObject({ username: 'willis' })
                expect(result.id).toBeGreaterThan(0)
        });
});

describe('applyDiscount function', () => {
        it('should  apply 10% discount if the customer has more than 10 points', () => {
                db.getCustomerSync = customerId => {
                        return { id: customerId, points: 20 }
                }

                const order = { customerId: 1, totalPrice: 10 }
                lib.applyDiscount(order)
                expect(order.totalPrice).toBe(9)
        });
});

describe('notifyCustomer function', () => {
        it('should send an email to the customer', () => {
                db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' })
                mail.send = jest.fn()

                lib.notifyCustomer({ customerId: 1 })

                expect(mail.send).toHaveBeenCalled()
                expect(mail.send.mock.calls[0][0]).toBe('a')
                expect(mail.send.mock.calls[0][1]).toMatch(/order/)
        });
});

