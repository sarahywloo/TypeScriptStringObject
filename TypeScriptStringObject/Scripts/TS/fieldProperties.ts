'use strict';

/*
let customer = {
    firstName: '',
    lastName: '',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}


customer.firstName = 'Stephen';
customer.lastName = 'Walther';

console.log(customer.fullName);

customer.firstName = 'Sarah';
customer.lastName = 'Kim';

console.log(customer.fullName);

//properties set get used to validate variables
*/

let customer = {
    _firstName: 'Eric',
    _lastName: 'Yay',
    set firstName(input) {
        if (!input) {
            throw new Error('You did not enter anything.');
        }
        this._firstName = input;
    },

    get firstName() {
        return this._firstName;
    },

    set lastName(input) {
        if (!input) {
            throw new Error('You did not enter anything.');
        }
        this._lastName = input;
    },

    get lastName() {
        return this._lastName;
    },

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
};

customer.firstName = 'Sarah';
customer.lastName = 'Kim';

console.log(customer.fullName);

customer.firstName = '';
customer.lastName = '';

/*
let barPatron = {
    _age: 0;
    set age(value) {
        if (value < 21) {
            throw new Error('Bar patrons must be at least 21')
        }
        this._age = value;
    }
};
barPatron.age = 5;

*/
