// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(cli: string, dets: string, am: number) {
        this.client = cli;
        this.details = dets;
        this.amount = am;
    }

    format () {
        return `${this.client} owes E${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('c-1', 'work on full stack app', 250);
const invTwo = new Invoice('c-2', 'work on full stack app using graphql', 300);
console.log(invOne,invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const anchor = document.querySelector('a');

console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);


// grabbing inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
})