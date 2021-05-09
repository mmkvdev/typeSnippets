import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { addUID } from './generics/generics.js';
import { Resource } from './interfaces/Resource.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('c_1', 'work on cloud', 420);
docTwo = new Payment('r_1', 'work on database', 480);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

// interfaces
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'MMK',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend (amount: number): number {
        console.log('amount: ', amount);
        return amount
    }
}

console.log(me);

const welcomePerson = (person: isPerson) => {
    console.log(person.name, person.age);
}

welcomePerson(me);

const invOne = new Invoice('c-1', 'work on full stack app', 250);
const invTwo = new Invoice('c-2', 'work on full stack app using graphql', 300);
console.log(invOne,invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
})

const anchor = document.querySelector('a');

console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);


// grabbing inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    /* tuples */
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

    console.log(doc);

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

// generics
let docId = addUID({ name: 'generics', age:24 });
console.log(docId.name, docId.uid);


let docProtoId = addUID({ name: 'AWS' });

// ENUMS

enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

const docPro: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'aws' },
}

const docPre: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: ['aws', 'typescript', 'react', 'python'],
}

const docFlix: Resource<object> = {
    uid: 3,
    resourceName: ResourceType.PERSON,
    data: { skill: 'pro' },
}

console.log(docPro, docPre);