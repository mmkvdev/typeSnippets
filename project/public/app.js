import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { addUID } from './generics/generics.js';
let docOne;
let docTwo;
docOne = new Invoice('c_1', 'work on cloud', 420);
docTwo = new Payment('r_1', 'work on database', 480);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const me = {
    name: 'MMK',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('amount: ', amount);
        return amount;
    }
};
console.log(me);
const welcomePerson = (person) => {
    console.log(person.name, person.age);
};
welcomePerson(me);
const invOne = new Invoice('c-1', 'work on full stack app', 250);
const invTwo = new Invoice('c-2', 'work on full stack app using graphql', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// grabbing inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    /* tuples */
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
// generics
let docId = addUID({ name: 'generics', age: 24 });
console.log(docId.name, docId.uid);
let docProtoId = addUID({ name: 'AWS' });
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docPro = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'aws' },
};
const docPre = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: ['aws', 'typescript', 'react', 'python'],
};
const docFlix = {
    uid: 3,
    resourceName: ResourceType.PERSON,
    data: { skill: 'pro' },
};
console.log(docPro, docPre);
//# sourceMappingURL=app.js.map