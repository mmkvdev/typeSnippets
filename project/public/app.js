// classes
var Invoice = /** @class */ (function () {
    function Invoice(cli, dets, am) {
        this.client = cli;
        this.details = dets;
        this.amount = am;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes E" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('c-1', 'work on full stack app', 250);
var invTwo = new Invoice('c-2', 'work on full stack app using graphql', 300);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var anchor = document.querySelector('a');
console.log(anchor.href);
var form = document.querySelector('.new-item-form');
console.log(form.children);
// grabbing inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
//# sourceMappingURL=app.js.map